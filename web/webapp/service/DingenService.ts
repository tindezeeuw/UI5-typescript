class DingenService {
    private httpClient: HttpClient;

    constructor(HttpClient) {
        this.httpClient = HttpClient;
    }

    async getDingen() {
        const data = await this.httpClient.get("../api/datafile.json");
        var oModel = new sap.ui.model.json.JSONModel(data, true);
        oModel.setDefaultBindingMode(sap.ui.model.BindingMode.OneWay);
        return oModel;
    }
}

sap.ui.define([
    "./HttpClient"
], function (HttpClient) {
	"use strict";

	return new DingenService(HttpClient);
});