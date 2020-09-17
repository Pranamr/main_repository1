sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"AggregationBinding/model/models",
	 "sap/ui/model/json/JSONModel"
], function(UIComponent, Device, models, JSONModel) {
	"use strict";

	return UIComponent.extend("AggregationBinding.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			
			 var mainModel = new JSONModel("./model/Invoices.json");
			 mainModel.loadData("./model/Invoices.json", null, false);       
			 
			 this.getRouter().initialize();
			
		},
		
		globalModel: function(oEvent){
			var mainModel = new JSONModel("./model/Invoices.json");
			 mainModel.loadData("./model/Invoices.json", null, false);       
			 return mainModel;
		}
	});
});