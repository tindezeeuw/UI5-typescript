namespace ui5TypescriptDemo {
    sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "ui5typescriptdemo/service/DingenService"
    ], function (
        Controller, 
        DingenService: ui5TypescriptDemo.DingenService
        ) {
        "use strict";

        const className = "ui5typescriptdemo.controller.Home";
        
        class HomeController extends Controller {
            constructor() {
                super(className);
                const fnClass = Controller.extend(className, {});
                this.getMetadata = fnClass.prototype.getMetadata;
            }

            async onInit() {
                const dataModel = await DingenService.getDingen();
                this.getView().setModel(dataModel);
            }
        }

        return HomeController;
    });
}