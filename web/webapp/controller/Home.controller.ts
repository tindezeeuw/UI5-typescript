namespace ui5TypescriptDemo {
    sap.ui.define([
        'ui5typescriptdemo/controller/BaseController',
        "ui5typescriptdemo/service/DingenService"
    ], function (
        BaseController: typeof ui5TypescriptDemo.BaseController,
        DingenService: ui5TypescriptDemo.DingenService
        ) {
        "use strict";

        const className = "ui5typescriptdemo.controller.Home";
        
        class HomeController extends BaseController {
            constructor() {
                super(className);
                const fnClass = BaseController.extend(className, {});
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