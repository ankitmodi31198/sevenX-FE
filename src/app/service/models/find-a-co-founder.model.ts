import { BaseGetModel, BasePostModel } from '../base-model/base.model';

export class FindACoFounderGettModel extends BaseGetModel {

    toLocal(oGetResponse: any) {


        return this;
    }
}

export class FindACoFounderPostModel extends BasePostModel {

    startupName: string = '';
    email: string = '';
    contactNo: string = '';
    startupYear: string = '';
    stage: string = '';
    idea: string = '';
    profileSkills: string = '';
    industry: string = '';
    remarks: string = '';

    toRemote(data: any) {
        return {
            startupName: data.startupName,
            email: data.email,
            contactNo: data.contactNo,
            startupYear: data.startupYear,
            stage: data.stage,
            idea: data.idea,
            profileSkills: data.profileSkills,
            industry: data.industry,
            remarks: data.remarks
        };
    }
}
