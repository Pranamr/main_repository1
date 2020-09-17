sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/routing/History",
], function(Controller, JSONModel, History) {
	"use strict";

	return Controller.extend("AggregationBinding.controller.Detail", {
		
		onInit: function(oEvent){
			var b;
			var a = (function b(){
				return true;
			})();
			//console.log(typeof a);
			 var localModel = new JSONModel("./webapp/model/Invoices.json");
			 localModel.loadData("./model/Invoices.json", null, false);
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("detail").attachPatternMatched(this._onObjectMatched, this);			 
		},
		_onObjectMatched: function(oEvent){
			this.getView().bindElement({
				path: "/" + window.decodeURIComponent(oEvent.getParameter("arguments").invoicePath),
				model: "invoice"
			});			
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
		onNavBack: function () {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = UIComponent.getRouterFor(this);
				oRouter.navTo("overview", {}, true);
			}
		}		

	});
});