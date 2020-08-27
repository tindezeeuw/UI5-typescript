sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"ui5typescriptdemo/model/models"
], function (
    UIComponent: typeof sap.ui.core.UIComponent, 
    Device, 
    models) {
    "use strict";
    
    class Component extends UIComponent {
        constructor(mSettings: object) {
            super("ui5typescriptdemo.Component", mSettings);
            const fnClass = UIComponent.extend("ui5typescriptdemo.Component", {
                metadata: {
                    manifest: 'json',
                },
            });
            Component.prototype.getMetadata = fnClass.prototype.getMetadata;
        }

        init() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
    }

	return Component;
});