import { Campaign } from "../models/campaign";
import { CampaignFormResponse } from "../models/campaign-form-response";
import { CampaignService } from "./campaign-service";

export class RemoteCampaignService implements CampaignService {
    generateCampaign(input: CampaignFormResponse): Promise<string> {
        throw new Error("Method not implemented.");
    }
    fetchCampaign(id: string): Promise<Campaign> {
        throw new Error("Method not implemented.");
    }
}