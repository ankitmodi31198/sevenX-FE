import { BaseGetModel, BasePostModel } from '../base-model/base.model';

export class StartupIdeaAnalysisGettModel extends BaseGetModel {

    toLocal(oGetResponse: any) {


        return this;
    }
}

export class StartupIdeaAnalysisPostModel extends BasePostModel {

    startupName: string = null;
    email: string = null;
    contactNo: string = null;
    idea: string = null;
    industry: string = null;
    stage: string = null;
    remarks: string = null;

    toRemote(data: any) {
        return {
            startupName: data.startupName,
            email: data.email,
            contactNo: data.contactNo,
            idea: data.idea,
            industry: data.industry,
            stage: data.stage,
            remarks: data.remarks
        };
    }
}
