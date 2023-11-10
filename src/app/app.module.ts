import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CampaignViewComponent } from './components/campaign-view/campaign-view.component';
import { GenerateCampaignComponent } from './components/generate-campaign/generate-campaign.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    CampaignViewComponent,
    GenerateCampaignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
