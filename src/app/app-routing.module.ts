import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CampaignViewComponent } from './components/campaign-view/campaign-view.component';
import { GenerateCampaignComponent } from './components/generate-campaign/generate-campaign.component';

const routes: Routes = [
  {
    path: "/",
    redirectTo: "create",
    pathMatch: "full"
  },
  {
    path: "create", 
    component:  GenerateCampaignComponent,
    pathMatch: "full"
  },
  {
    path: "404",
    component: PageNotFoundComponent,
    pathMatch: "full"
  },
  {
    path: "campaign/:id", 
    component: CampaignViewComponent,
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: "404",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
