/*global QUnit*/

sap.ui.define([
	"xml/xmlproject1/controller/AppView1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("AppView1 Controller");

	QUnit.test("I should test the AppView1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
