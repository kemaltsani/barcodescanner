/*global QUnit*/

sap.ui.define([
	"barcodescanner/controller/BarcodeScannerButton.controller"
], function (Controller) {
	"use strict";

	QUnit.module("BarcodeScannerButton Controller");

	QUnit.test("I should test the BarcodeScannerButton controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
