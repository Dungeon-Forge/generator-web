import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateCampaignComponent } from './generate-campaign.component';

describe('GenerateCampaignComponent', () => {
  let component: GenerateCampaignComponent;
  let fixture: ComponentFixture<GenerateCampaignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenerateCampaignComponent]
    });
    fixture = TestBed.createComponent(GenerateCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
