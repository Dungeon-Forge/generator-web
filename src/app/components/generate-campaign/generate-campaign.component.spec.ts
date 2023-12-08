import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateCampaignComponent } from './generate-campaign.component';
import { CampaignService } from 'src/app/services/campaign-service';
import { Campaign } from 'src/app/models/campaign';
import { CampaignFormResponse } from 'src/app/models/campaign-form-response';

describe('GenerateCampaignComponent', () => {
  let component: GenerateCampaignComponent;
  let fixture: ComponentFixture<GenerateCampaignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenerateCampaignComponent],
      providers: [
        { provide: CampaignService, useClass: MockCampaignService },
      ]
    });
    fixture = TestBed.createComponent(GenerateCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('campaign service should throw non-implemented error', () => {
    const result = () => component.campaignService.fetchCampaign("Test")
    expect(result).toThrow()
  });
});

class MockCampaignService implements CampaignService {
  generateCampaign(input: CampaignFormResponse): Promise<string> {
    throw new Error('Method not implemented.');
  }
  fetchCampaign(id: string): Promise<string> {
    throw new Error('Method not implemented.');
  }
}