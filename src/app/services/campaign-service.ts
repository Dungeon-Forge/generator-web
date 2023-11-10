import { Campaign } from "../models/campaign"
import { CampaignFormResponse } from "../models/campaign-form-response"

export interface CampaignService {
    /**
    * Generates a campaign using the input parameters
    *
    * @param formResponse - A CampaignFormResponse object with inputs to be sent to the generation service
    * @returns A promise to return the ID of the newly generated campaign
    */
    generateCampaign(input: CampaignFormResponse): Promise<string>

    /**
    * Fetches a campaign with the given id
    *
    * @param id - A string id representing the generated campaign
    * @returns A promise to return the fully generated campaign
    */
    fetchCampaign(id: string): Promise<Campaign>
}
