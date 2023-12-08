import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CampaignService } from 'src/app/services/campaign-service';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-campaign-view',
  templateUrl: './campaign-view.component.html',
  styleUrls: ['./campaign-view.component.less']
})
export class CampaignViewComponent {
  campaignService: CampaignService;
  campaignURL = ''

  constructor(private router: Router, private route: ActivatedRoute, campaignService: CampaignService) {
    this.campaignService = campaignService
  }
  
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.campaignURL = id
    } else {
      this.router.navigate(["404"])
    }
  }
}
