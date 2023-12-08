import { Campaign } from "../models/campaign";
import { CampaignFormResponse } from "../models/campaign-form-response";
import { CampaignService } from "./campaign-service";
import axios from "axios";

export class RemoteCampaignService implements CampaignService {
    baseURL = "http://dungeonforgeserver-env.eba-6x2ib96k.us-east-2.elasticbeanstalk.com"

    generateCampaign(input: CampaignFormResponse): Promise<string> {
        const url = "/campaigns/generate"

        return new Promise((resolve, reject) => {
            axios.post(this.baseURL + url, input, { timeout: 12000000 })
            .then(function (response) {
                console.log("Received response from campaign generator: " + JSON.stringify(response))
                const campaignId = response.data.id

                if (typeof campaignId === 'string') {
                    resolve(campaignId)
                } else {
                    reject(new Error("Received an invalid response from the server with id " + campaignId))
                }
            })
            .catch(function (error) {
                console.log("Error generating campaign: " + error);
                reject(error);
            })
        })
    }

    fetchCampaign(id: string): Promise<string> {
        const url = "/campaign/" + id

        return new Promise((resolve, reject) => {
            axios.get(this.baseURL + url)
            .then(function (response) {
                console.log("Received response from campaign service: " + response.data)
                resolve(response.data)
            })
            .catch(function (error) {
                console.log("Error fetching campaign: " + error);
                reject(error);
            })
        })
    }
}