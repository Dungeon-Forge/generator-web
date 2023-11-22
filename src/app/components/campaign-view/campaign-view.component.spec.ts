import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignViewComponent } from './campaign-view.component';
import { CampaignService } from 'src/app/services/campaign-service';
import { CampaignFormResponse } from 'src/app/models/campaign-form-response';
import { Campaign } from 'src/app/models/campaign';
import { RouterTestingModule } from "@angular/router/testing";

describe('CampaignViewComponent', () => {
  let component: CampaignViewComponent;
  let fixture: ComponentFixture<CampaignViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CampaignViewComponent],
      imports: [
        RouterTestingModule
      ],
      providers: [
        { provide: CampaignService, useClass: MockCampaignService },
      ]
    });
    fixture = TestBed.createComponent(CampaignViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class MockCampaignService implements CampaignService {
  generateCampaign(input: CampaignFormResponse): Promise<string> {
    throw new Error('Method not implemented.');
  }
  fetchCampaign(id: string): Promise<Campaign> {
    throw new Error('Method not implemented.');
  }
}