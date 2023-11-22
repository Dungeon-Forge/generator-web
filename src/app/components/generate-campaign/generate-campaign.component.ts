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
      "NumCharacters": this.numCharacters,
      "StartingLevel": (<HTMLInputElement>document.getElementById("start-level"))?.value,
      "EndingLevel": (<HTMLInputElement>document.getElementById("end-level"))?.value,
      "RolePlaying": (<HTMLInputElement>document.querySelector('input[name="Role Playing"]:checked')).value,
      "Traps": (<HTMLInputElement>document.querySelector('input[name="Traps"]:checked')).value,
      "Puzzles": (<HTMLInputElement>document.querySelector('input[name="Puzzles"]:checked')).value,
      "Combat": (<HTMLInputElement>document.querySelector('input[name="Combat"]:checked')).value
    }
    console.log("New Combat Value: " + JSON.stringify(surveyOutput));
  }
}
