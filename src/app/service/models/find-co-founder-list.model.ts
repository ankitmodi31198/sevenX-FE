import { BaseGetModel } from "../base-model/base.model";

export class FindCoFounderListGetModel extends BaseGetModel {

    

    toLocal(oGetResponse: FindCoFounderListGetModel) {
        const getModel: FindCoFounderListGetModel = Object.assign(new FindCoFounderListGetModel(), oGetResponse);
        // getModel.createdAt = oGetResponse.createdAt ? new Date(oGetResponse.createdAt).toLocaleString() : '';
        return getModel;
    }
}