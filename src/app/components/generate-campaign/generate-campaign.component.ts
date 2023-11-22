import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CampaignService } from 'src/app/services/campaign-service';

@Component({
  selector: 'app-generate-campaign',
  templateUrl: './generate-campaign.component.html',
  styleUrls: ['./generate-campaign.component.less'],
})
export class GenerateCampaignComponent {
  campaignService: CampaignService;
  numCharacters: number = 0

  constructor(campaignService: CampaignService) {
    this.campaignService = campaignService
  }

  decrementNumCharacters() {
    this.numCharacters = Math.max(0, this.numCharacters - 1)
  }

  incrementNumCharacters() {
    this.numCharacters = Math.min(10, this.numCharacters + 1)
  }

  submitSurvey() {
    const surveyOutput = {
      "numPlayerCharacters": this.numCharacters,
      "startingLevel": parseInt((<HTMLInputElement>document.getElementById("start-level"))?.value),
      "endingLevel": parseInt((<HTMLInputElement>document.getElementById("end-level"))?.value),
      "rolePlayingScale": parseInt((<HTMLInputElement>document.querySelector('input[name="Role Playing"]:checked')).value),
      "trapScale": parseInt((<HTMLInputElement>document.querySelector('input[name="Traps"]:checked')).value),
      "puzzleScale": parseInt((<HTMLInputElement>document.querySelector('input[name="Puzzles"]:checked')).value),
      "combatScale": parseInt((<HTMLInputElement>document.querySelector('input[name="Combat"]:checked')).value)
    }
    console.log("Survey Submitted: " + JSON.stringify(surveyOutput));
    
    this.campaignService.generateCampaign(surveyOutput)
    .then((newId) => {
      console.log("Received new campaign id: " + newId)
    })
    .catch((error) => {
      console.log("Failed to generate a campaign: " + error.message)
    })
  }
}
