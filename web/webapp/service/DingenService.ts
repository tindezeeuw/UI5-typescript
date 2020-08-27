namespace ui5TypescriptDemo {
    export class DingenService {
        private restService: ui5TypescriptDemo.HttpClient;

        private readonly apiPrefix = "../api";
        private readonly dataURL = `${this.apiPrefix}/datafile.json`;

        constructor(HttpClient) {
            this.restService = HttpClient;
        }

        async getDingen() {
            const data = await this.restService.get(this.dataURL);
            const model = this.createModel(data);
            return model;
        }

        private createModel(data: any) {
            const model = new sap.ui.model.json.JSONModel(data, true);
            model.setDefaultBindingMode(sap.ui.model.BindingMode.OneWay);
            return model;
        }
    }
}

sap.ui.define([
    "./HttpClient"
], function (HttpClient) {
    "use strict";

    return new ui5TypescriptDemo.DingenService(HttpClient);
});