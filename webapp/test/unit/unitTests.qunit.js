/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"xml/xmlproject1/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
