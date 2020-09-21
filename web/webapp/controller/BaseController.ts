namespace ui5TypescriptDemo {
    import Controller = sap.ui.core.mvc.Controller;
    import JSONModel = sap.ui.model.json.JSONModel; // dit is een shorthand voor gebruik in de code. Scheelt je heel veel sap.ui.model... typen

    const className = "ui5typescriptdemo.controller.BaseController";

    export class BaseController extends Controller {
        constructor(name: string = className) {
            super(name);
            const fnClass = Controller.extend(className, {});
            BaseController.prototype.getMetadata = fnClass.prototype.getMetadata;
        }

        /**
         * Generieke functie om de router van de view op te halen
         * @return {UI5 Router} De router van de Component
         */
        getRouter() {
            return sap.ui.core.UIComponent.getRouterFor(this);
        }

        /*********************************************************************\
         * Modelverwerking in controllers
        \*********************************************************************/

        getModel(sName?: string): JSONModel {
            return this.getView().getModel(sName) as JSONModel;
        }

        setModel(oModel: JSONModel, sName?: string) {
            this.getView().setModel(oModel, sName);
        }
    }


    sap.ui.define([
        "sap/ui/core/mvc/Controller"
    ], function (
        Controller: sap.ui.core.mvc.Controller
        ) {
        "use strict";
        return BaseController;
    });

}