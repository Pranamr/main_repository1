sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("AggregationBinding.controller.View1", {
		
		onInit: function(oEvent){
			var b;
			var a = (function b(){
				return true;
			})();
			//console.log(typeof a);
			 var localModel = new JSONModel("./webapp/model/Invoices.json");
			 localModel.loadData("./model/Invoices.json", null, false);
			 var b = this.getOwnerComponent().globalModel();
		},
		
		onBeforeRendering: function(oEvent){
			var a;
			a = "1";
		},
		
		onAfterRendering: function(oEvent){
			var a;
			a = "1";
		},
		
		exit: function(oEveny){
			var a;
			a = "1";			
		},
		
		onItemPress: function(oEvent){
			var a = "1";
			a = oEvent.getSource().getTitle();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("detail",{
				invoicePath: window.encodeURIComponent(oEvent.getSource().getBindingContext("invoice").getPath().substr(1))
			});
		}

	});
});