sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "./HttpClient"
], function (JSONModel, HttpClient) {
	"use strict";

	return {
		getDingen: async function () {
            const data = await HttpClient.get("../api/datafile.json");
			var oModel = new JSONModel(data);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		}

	};
});