sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"xml/xmlproject1/model/models"
], function (UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("xml.xmlproject1.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		},
		createContent: function () {
			var oModel = this.getModel(),
				oMetaModel = oModel.getMetaModel(),
				sPath = "/Orders('10643')",
				oViewContainer = new sap.m.VBox(this.createId("Vbox"));
				
			/* pass the metacontext and metamodel to the preprocessor */
			oMetaModel.loaded().then(function () {
				var oTemplateView = sap.ui.view({
					preprocessors: {
						xml: {
							bindingContexts: {
								meta: oMetaModel.getMetaContext(sPath)
							},
							models: {
								meta: oMetaModel
							}
						}
					},
					type: sap.ui.core.mvc.ViewType.XML,
					viewName: "xml.xmlproject1.view.AppView1"
				});
				
				oTemplateView.setModel(oModel);
				oTemplateView.bindElement(sPath);
				oViewContainer.addItem(oTemplateView);
			});

			return oViewContainer;
		}
	});
});
