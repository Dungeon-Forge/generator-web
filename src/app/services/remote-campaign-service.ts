import { Campaign } from "../models/campaign";
import { CampaignFormResponse } from "../models/campaign-form-response";
import { CampaignService } from "./campaign-service";
import axios from "axios";

export class RemoteCampaignService implements CampaignService {
    // baseURL = "http://dungeonforgeserver-env.eba-6x2ib96k.us-east-2.elasticbeanstalk.com"
    baseURL = "http://localhost:3000"

    constructor() {
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*' 
    }

    generateCampaign(input: CampaignFormResponse): Promise<string> {
        const url = "/campaigns/generate"

        return new Promise((resolve, reject) => {
            axios.post(this.baseURL + url, input)
            .then(function (response) {
                console.log("Response headers: " + response.headers)
                console.log("Received response from campaign generator: " + response)
                resolve(response.data.campaignId)
            })
            .catch(function (error) {
                console.log("Error headers: " + error.headers);
                console.log("Error generating campaign: " + error);
                reject(error);
            })
        })
    }

    fetchCampaign(id: string): Promise<Campaign> {
        throw new Error("Method not implemented.");
    }
}