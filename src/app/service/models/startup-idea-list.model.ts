import { BaseGetModel } from "../base-model/base.model";

export class StartupIdeaListGetModel extends BaseGetModel {

    contactNo: string;
    documents: any[];
    email: string;
    id: number;
    idea: string;
    industry: string;
    remarks: string;
    startupName: string;
    userId: number;

    toLocal(oGetResponse: StartupIdeaListGetModel) {
        const getModel: StartupIdeaListGetModel = Object.assign(new StartupIdeaListGetModel(), oGetResponse);
        // getModel.createdAt = oGetResponse.createdAt ? new Date(oGetResponse.createdAt).toLocaleString() : '';
        return getModel;
    }
}