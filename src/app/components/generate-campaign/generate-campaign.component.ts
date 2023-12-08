import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CampaignService } from 'src/app/services/campaign-service';

@Component({
  selector: 'app-generate-campaign',
  templateUrl: './generate-campaign.component.html',
  styleUrls: ['./generate-campaign.component.less'],
})
export class GenerateCampaignComponent {
  campaignService: CampaignService;
  numCharacters: number = 0;
  shouldDisplayError = false;
  shouldDisplaySuccess = false;
  isProcessing = false;
  generatedCampaignId: string = ''

  constructor(private router: Router, campaignService: CampaignService) {
    this.campaignService = campaignService
  }

  decrementNumCharacters() {
    this.numCharacters = Math.max(0, this.numCharacters - 1)
  }

  incrementNumCharacters() {
    this.numCharacters = Math.min(10, this.numCharacters + 1)
  }

  submitSurvey() {
    window.scroll(0,0);
    try {
      const surveyOutput = {
        "numPlayerCharacters": this.numCharacters,
        "startingLevel": parseInt((<HTMLInputElement>document.getElementById("start-level"))?.value),
        "endingLevel": parseInt((<HTMLInputElement>document.getElementById("end-level"))?.value),
        "rolePlayingScale": parseInt((<HTMLInputElement>document.querySelector('input[name="Role Playing"]:checked'))?.value),
        "trapScale": parseInt((<HTMLInputElement>document.querySelector('input[name="Traps"]:checked'))?.value),
        "puzzleScale": parseInt((<HTMLInputElement>document.querySelector('input[name="Puzzles"]:checked'))?.value),
        "combatScale": parseInt((<HTMLInputElement>document.querySelector('input[name="Combat"]:checked'))?.value)
      }

      console.log("Survey Submitted: " + JSON.stringify(surveyOutput));
      this.toggleButtonEnabled(false)
    
      this.campaignService.generateCampaign(surveyOutput)
      .then((newId) => {
        console.log("Received new campaign id: " + newId)
        this.generatedCampaignId = newId
        this.shouldDisplayError = false
        this.shouldDisplaySuccess = true
        this.toggleButtonEnabled(true)
      })
      .catch((error) => {
        console.log("Failed to generate a campaign: " + error.message)
        this.shouldDisplayError = true
        this.shouldDisplaySuccess = false
        this.isProcessing = false
      })
    } catch {
      console.log("Invalid form response")
      this.shouldDisplayError = true
      this.shouldDisplaySuccess = false
      this.isProcessing = false
    }
  }

  dismissModal() {
    this.shouldDisplayError = false;
    this.shouldDisplaySuccess = false;
    this.toggleButtonEnabled(true);
    window.location.reload()
  }

  displayCampaign() {
    if (this.generatedCampaignId) {
      this.fetchCampaignById(this.generatedCampaignId)
    } else {
      this.router.navigate(["404"])
    }
  }

  toggleButtonEnabled(isEnabled: boolean) {
    (<HTMLInputElement> document.getElementById("submit")).disabled = !isEnabled;
    this.isProcessing = !isEnabled
  }

  fetchCampaignById(id: string) {
    console.log("Fetching campaign for id: " + id)
    this.campaignService.fetchCampaign(id)
    .then((campaign) => {
      console.log("Retrieved campaign for id: " + id + "\nCampaign: " + campaign);
      window.open(campaign);
    })
    .catch((error) => {
      console.log("Error retrieving campaign for id: " + id + "\nError: " + error.message);
      this.router.navigate(["404"]);
    });
  }
}
