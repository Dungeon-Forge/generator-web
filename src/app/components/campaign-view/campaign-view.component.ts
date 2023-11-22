import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CampaignService } from 'src/app/services/campaign-service';

@Component({
  selector: 'app-campaign-view',
  templateUrl: './campaign-view.component.html',
  styleUrls: ['./campaign-view.component.less']
})
export class CampaignViewComponent {
  campaignService: CampaignService;
  startingLevel: number = 1
  endingLevel: number = 2
  numPlayers: number = 1
  pages: string[] = [
    `
    <h1>This is a Title</h1>
    <p>aalskdjf a;slkdjf ;alskdjfv na;lskdjf ;lasdkjfvwqeoijvnfpeoqwiudhgj [opaisdufnvpoiwejdgv apaiosunf ql;wkvf aksjdhf poasidfjvnqwlkervn apsoidug npaosij vfq;lwkejvnfpoasidufn aosj dfvpoqwiunecrm[paosk, foaijsh fpoiajsnmvt[oiqwje vflaksjd f[0oiasumfv[lkqwj erfvpoijas dg[oija spfv oijqwnf[d poi asdpjfqpeoijfv owieurhgnvpodi nvm pkj ,mj dpoijeq pgotjdsfplgkj epoijtr oqiwje flkasjdngp oi jdl;f kmxl kmc[owpd r[weopuit -[0394u5 [oqidsajg [owij foq[wiej toi</p>
    <p>aalskdjf a;slkdjf ;alskdjfv na;lskdjf ;lasdkjfvwqeoijvnfpeoqwiudhgj [opaisdufnvpoiwejdgv apaiosunf ql;wkvf aksjdhf poasidfjvnqwlkervn apsoidug npaosij vfq;lwkejvnfpoasidufn aosj dfvpoqwiunecrm[paosk, foaijsh fpoiajsnmvt[oiqwje vflaksjd f[0oiasumfv[lkqwj erfvpoijas dg[oija spfv oijqwnf[d poi asdpjfqpeoijfv owieurhgnvpodi nvm pkj ,mj dpoijeq pgotjdsfplgkj epoijtr oqiwje flkasjdngp oi jdl;f kmxl kmc[owpd r[weopuit -[0394u5 [oqidsajg [owij foq[wiej toi</p>
    <p>aalskdjf a;slkdjf ;alskdjfv na;lskdjf ;lasdkjfvwqeoijvnfpeoqwiudhgj [opaisdufnvpoiwejdgv apaiosunf ql;wkvf aksjdhf poasidfjvnqwlkervn apsoidug npaosij vfq;lwkejvnfpoasidufn aosj dfvpoqwiunecrm[paosk, foaijsh fpoiajsnmvt[oiqwje vflaksjd f[0oiasumfv[lkqwj erfvpoijas dg[oija spfv oijqwnf[d poi asdpjfqpeoijfv owieurhgnvpodi nvm pkj ,mj dpoijeq pgotjdsfplgkj epoijtr oqiwje flkasjdngp oi jdl;f kmxl kmc[owpd r[weopuit -[0394u5 [oqidsajg [owij foq[wiej toi</p>
    <br><br><br>
    <hr>
    <table>
        <thead>
            <th>
                Heading 1
            </th>
            <th>
                Heading 2
            </th>
            <th>
                Heading 3
            </th>
        </thead>
        <tbody>
            <tr>
                <td>
                    Data 1
                </td>
                <td>
                    Data 2
                </td>
                <td>
                    Data 3
                </td>
            </tr>
        </tbody>
        

    </table>
    <p>aalskdjf a;slkdjf ;alskdjfv na;lskdjf ;lasdkjfvwqeoijvnfpeoqwiudhgj [opaisdufnvpoiwejdgv apaiosunf ql;wkvf aksjdhf poasidfjvnqwlkervn apsoidug npaosij vfq;lwkejvnfpoasidufn aosj dfvpoqwiunecrm[paosk, foaijsh fpoiajsnmvt[oiqwje vflaksjd f[0oiasumfv[lkqwj erfvpoijas dg[oija spfv oijqwnf[d poi asdpjfqpeoijfv owieurhgnvpodi nvm pkj ,mj dpoijeq pgotjdsfplgkj epoijtr oqiwje flkasjdngp oi jdl;f kmxl kmc[owpd r[weopuit -[0394u5 [oqidsajg [owij foq[wiej toi</p>
    <h2>Subtitle</h2>
    <p>aalskdjf a;slkdjf ;alskdjfv na;lskdjf ;lasdkjfvwqeoijvnfpeoqwiudhgj [opaisdufnvpoiwejdgv apaiosunf ql;wkvf aksjdhf poasidfjvnqwlkervn apsoidug npaosij vfq;lwkejvnfpoasidufn aosj dfvpoqwiunecrm[paosk, foaijsh fpoiajsnmvt[oiqwje vflaksjd f[0oiasumfv[lkqwj erfvpoijas dg[oija spfv oijqwnf[d poi asdpjfqpeoijfv owieurhgnvpodi nvm pkj ,mj dpoijeq pgotjdsfplgkj epoijtr oqiwje flkasjdngp oi jdl;f kmxl kmc[owpd r[weopuit -[0394u5 [oqidsajg [owij foq[wiej toi</p>
    <p>aalskdjf a;slkdjf ;alskdjfv na;lskdjf ;lasdkjfvwqeoijvnfpeoqwiudhgj [opaisdufnvpoiwejdgv apaiosunf ql;wkvf aksjdhf poasidfjvnqwlkervn apsoidug npaosij vfq;lwkejvnfpoasidufn aosj dfvpoqwiunecrm[paosk, foaijsh fpoiajsnmvt[oiqwje vflaksjd f[0oiasumfv[lkqwj erfvpoijas dg[oija spfv oijqwnf[d poi asdpjfqpeoijfv owieurhgnvpodi nvm pkj ,mj dpoijeq pgotjdsfplgkj epoijtr oqiwje flkasjdngp oi jdl;f kmxl kmc[owpd r[weopuit -[0394u5 [oqidsajg [owij foq[wiej toi</p>

    <img src="/assets/generate-campaign.jpg">
    <p>aalskdjf a;slkdjf ;alskdjfv na;lskdjf ;lasdkjfvwqeoijvnfpeoqwiudhgj [opaisdufnvpoiwejdgv apaiosunf ql;wkvf aksjdhf poasidfjvnqwlkervn apsoidug npaosij vfq;lwkejvnfpoasidufn aosj dfvpoqwiunecrm[paosk, foaijsh fpoiajsnmvt[oiqwje vflaksjd f[0oiasumfv[lkqwj erfvpoijas dg[oija spfv oijqwnf[d poi asdpjfqpeoijfv owieurhgnvpodi nvm pkj ,mj dpoijeq pgotjdsfplgkj epoijtr oqiwje flkasjdngp oi jdl;f kmxl kmc[owpd r[weopuit -[0394u5 [oqidsajg [owij foq[wiej toi</p>
    <p>aalskdjf a;slkdjf ;alskdjfv na;lskdjf ;lasdkjfvwqeoijvnfpeoqwiudhgj [opaisdufnvpoiwejdgv apaiosunf ql;wkvf aksjdhf poasidfjvnqwlkervn apsoidug npaosij vfq;lwkejvnfpoasidufn aosj dfvpoqwiunecrm[paosk, foaijsh fpoiajsnmvt[oiqwje vflaksjd f[0oiasumfv[lkqwj erfvpoijas dg[oija spfv oijqwnf[d poi asdpjfqpeoijfv owieurhgnvpodi nvm pkj ,mj dpoijeq pgotjdsfplgkj epoijtr oqiwje flkasjdngp oi jdl;f kmxl kmc[owpd r[weopuit -[0394u5 [oqidsajg [owij foq[wiej toi</p>

    <blockquote>Test quote</blockquote>
    `,
    `
    <p>aalskdjf a;slkdjf ;alskdjfv na;lskdjf ;lasdkjfvwqeoijvnfpeoqwiudhgj [opaisdufnvpoiwejdgv apaiosunf ql;wkvf aksjdhf poasidfjvnqwlkervn apsoidug npaosij vfq;lwkejvnfpoasidufn aosj dfvpoqwiunecrm[paosk, foaijsh fpoiajsnmvt[oiqwje vflaksjd f[0oiasumfv[lkqwj erfvpoijas dg[oija spfv oijqwnf[d poi asdpjfqpeoijfv owieurhgnvpodi nvm pkj ,mj dpoijeq pgotjdsfplgkj epoijtr oqiwje flkasjdngp oi jdl;f kmxl kmc[owpd r[weopuit -[0394u5 [oqidsajg [owij foq[wiej toi</p>
    <div class="descriptive">
      <p>Test regular</p>
      <strong>Test Strong</strong>
    </div>
    <p>aalskdjf a;slkdjf ;alskdjfv na;lskdjf ;lasdkjfvwqeoijvnfpeoqwiudhgj [opaisdufnvpoiwejdgv apaiosunf ql;wkvf aksjdhf poasidfjvnqwlkervn apsoidug npaosij vfq;lwkejvnfpoasidufn aosj dfvpoqwiunecrm[paosk, foaijsh fpoiajsnmvt[oiqwje vflaksjd f[0oiasumfv[lkqwj erfvpoijas dg[oija spfv oijqwnf[d poi asdpjfqpeoijfv owieurhgnvpodi nvm pkj ,mj dpoijeq pgotjdsfplgkj epoijtr oqiwje flkasjdngp oi jdl;f kmxl kmc[owpd r[weopuit -[0394u5 [oqidsajg [owij foq[wiej toi</p>
    <p>aalskdjf a;slkdjf ;alskdjfv na;lskdjf ;lasdkjfvwqeoijvnfpeoqwiudhgj [opaisdufnvpoiwejdgv apaiosunf ql;wkvf aksjdhf poasidfjvnqwlkervn apsoidug npaosij vfq;lwkejvnfpoasidufn aosj dfvpoqwiunecrm[paosk, foaijsh fpoiajsnmvt[oiqwje vflaksjd f[0oiasumfv[lkqwj erfvpoijas dg[oija spfv oijqwnf[d poi asdpjfqpeoijfv owieurhgnvpodi nvm pkj ,mj dpoijeq pgotjdsfplgkj epoijtr oqiwje flkasjdngp oi jdl;f kmxl kmc[owpd r[weopuit -[0394u5 [oqidsajg [owij foq[wiej toi</p>
    <p>aalskdjf a;slkdjf ;alskdjfv na;lskdjf ;lasdkjfvwqeoijvnfpeoqwiudhgj [opaisdufnvpoiwejdgv apaiosunf ql;wkvf aksjdhf poasidfjvnqwlkervn apsoidug npaosij vfq;lwkejvnfpoasidufn aosj dfvpoqwiunecrm[paosk, foaijsh fpoiajsnmvt[oiqwje vflaksjd f[0oiasumfv[lkqwj erfvpoijas dg[oija spfv oijqwnf[d poi asdpjfqpeoijfv owieurhgnvpodi nvm pkj ,mj dpoijeq pgotjdsfplgkj epoijtr oqiwje flkasjdngp oi jdl;f kmxl kmc[owpd r[weopuit -[0394u5 [oqidsajg [owij foq[wiej toi</p>
    <p>aalskdjf a;slkdjf ;alskdjfv na;lskdjf ;lasdkjfvwqeoijvnfpeoqwiudhgj [opaisdufnvpoiwejdgv apaiosunf ql;wkvf aksjdhf poasidfjvnqwlkervn apsoidug npaosij vfq;lwkejvnfpoasidufn aosj dfvpoqwiunecrm[paosk, foaijsh fpoiajsnmvt[oiqwje vflaksjd f[0oiasumfv[lkqwj erfvpoijas dg[oija spfv oijqwnf[d poi asdpjfqpeoijfv owieurhgnvpodi nvm pkj ,mj dpoijeq pgotjdsfplgkj epoijtr oqiwje flkasjdngp oi jdl;f kmxl kmc[owpd r[weopuit -[0394u5 [oqidsajg [owij foq[wiej toi</p>
    <div class="classTable">
      <h5>Class Name<h5>
    </div>
    <p>aalskdjf a;slkdjf ;alskdjfv na;lskdjf ;lasdkjfvwqeoijvnfpeoqwiudhgj [opaisdufnvpoiwejdgv apaiosunf ql;wkvf aksjdhf poasidfjvnqwlkervn apsoidug npaosij vfq;lwkejvnfpoasidufn aosj dfvpoqwiunecrm[paosk, foaijsh fpoiajsnmvt[oiqwje vflaksjd f[0oiasumfv[lkqwj erfvpoijas dg[oija spfv oijqwnf[d poi asdpjfqpeoijfv owieurhgnvpodi nvm pkj ,mj dpoijeq pgotjdsfplgkj epoijtr oqiwje flkasjdngp oi jdl;f kmxl kmc[owpd r[weopuit -[0394u5 [oqidsajg [owij foq[wiej toi</p>
    <p>aalskdjf a;slkdjf ;alskdjfv na;lskdjf ;lasdkjfvwqeoijvnfpeoqwiudhgj [opaisdufnvpoiwejdgv apaiosunf ql;wkvf aksjdhf poasidfjvnqwlkervn apsoidug npaosij vfq;lwkejvnfpoasidufn aosj dfvpoqwiunecrm[paosk, foaijsh fpoiajsnmvt[oiqwje vflaksjd f[0oiasumfv[lkqwj erfvpoijas dg[oija spfv oijqwnf[d poi asdpjfqpeoijfv owieurhgnvpodi nvm pkj ,mj dpoijeq pgotjdsfplgkj epoijtr oqiwje flkasjdngp oi jdl;f kmxl kmc[owpd r[weopuit -[0394u5 [oqidsajg [owij foq[wiej toi</p>
    <p>aalskdjf a;slkdjf ;alskdjfv na;lskdjf ;lasdkjfvwqeoijvnfpeoqwiudhgj [opaisdufnvpoiwejdgv apaiosunf ql;wkvf aksjdhf poasidfjvnqwlkervn apsoidug npaosij vfq;lwkejvnfpoasidufn aosj dfvpoqwiunecrm[paosk, foaijsh fpoiajsnmvt[oiqwje vflaksjd f[0oiasumfv[lkqwj erfvpoijas dg[oija spfv oijqwnf[d poi asdpjfqpeoijfv owieurhgnvpodi nvm pkj ,mj dpoijeq pgotjdsfplgkj epoijtr oqiwje flkasjdngp oi jdl;f kmxl kmc[owpd r[weopuit -[0394u5 [oqidsajg [owij foq[wiej toi</p>
    <p>aalskdjf a;slkdjf ;alskdjfv na;lskdjf ;lasdkjfvwqeoijvnfpeoqwiudhgj [opaisdufnvpoiwejdgv apaiosunf ql;wkvf aksjdhf poasidfjvnqwlkervn apsoidug npaosij vfq;lwkejvnfpoasidufn aosj dfvpoqwiunecrm[paosk, foaijsh fpoiajsnmvt[oiqwje vflaksjd f[0oiasumfv[lkqwj erfvpoijas dg[oija spfv oijqwnf[d poi asdpjfqpeoijfv owieurhgnvpodi nvm pkj ,mj dpoijeq pgotjdsfplgkj epoijtr oqiwje flkasjdngp oi jdl;f kmxl kmc[owpd r[weopuit -[0394u5 [oqidsajg [owij foq[wiej toi</p>
    <p>aalskdjf a;slkdjf ;alskdjfv na;lskdjf ;lasdkjfvwqeoijvnfpeoqwiudhgj [opaisdufnvpoiwejdgv apaiosunf ql;wkvf aksjdhf poasidfjvnqwlkervn apsoidug npaosij vfq;lwkejvnfpoasidufn aosj dfvpoqwiunecrm[paosk, foaijsh fpoiajsnmvt[oiqwje vflaksjd f[0oiasumfv[lkqwj erfvpoijas dg[oija spfv oijqwnf[d poi asdpjfqpeoijfv owieurhgnvpodi nvm pkj ,mj dpoijeq pgotjdsfplgkj epoijtr oqiwje flkasjdngp oi jdl;f kmxl kmc[owpd r[weopuit -[0394u5 [oqidsajg [owij foq[wiej toi</p>
    <p>aalskdjf a;slkdjf ;alskdjfv na;lskdjf ;lasdkjfvwqeoijvnfpeoqwiudhgj [opaisdufnvpoiwejdgv apaiosunf ql;wkvf aksjdhf poasidfjvnqwlkervn apsoidug npaosij vfq;lwkejvnfpoasidufn aosj dfvpoqwiunecrm[paosk, foaijsh fpoiajsnmvt[oiqwje vflaksjd f[0oiasumfv[lkqwj erfvpoijas dg[oija spfv oijqwnf[d poi asdpjfqpeoijfv owieurhgnvpodi nvm pkj ,mj dpoijeq pgotjdsfplgkj epoijtr oqiwje flkasjdngp oi jdl;f kmxl kmc[owpd r[weopuit -[0394u5 [oqidsajg [owij foq[wiej toi</p>
    `
  ]

  constructor(private router: Router, private route: ActivatedRoute, campaignService: CampaignService) {
    this.campaignService = campaignService
  }
  
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.fetchCampaignById(id)
    } else {
      this.router.navigate(["404"])
    }
  }

  fetchCampaignById(id: string) {
    console.log("Fetching campaign for id: " + id)
    this.campaignService.fetchCampaign(id)
    .then((campaign) => {
      console.log("Retrieved campaign for id: " + id + "\nCampaign: " + campaign);
    })
    .catch((error) => {
      console.log("Error retrieving campaign for id: " + id + "\nError: " + error.message);
      this.router.navigate(["404"])
    });
  }
}
