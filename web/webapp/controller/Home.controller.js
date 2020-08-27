sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "ui5typescriptdemo/service/DingenService"
], function (Controller, DingenService) {
	"use strict";

	return Controller.extend("ui5typescriptdemo.controller.Home", {
		onInit: async function () {
            const dataModel = await DingenService.getDingen();
            this.getView().setModel(dataModel);
		}
	});
});