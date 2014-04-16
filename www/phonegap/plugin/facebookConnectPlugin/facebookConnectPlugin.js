/*
 * @author Ally Ogilvie
 * @copyright Wizcorp Inc. [ Incorporated Wizards ] 2014
 * @file - facebookConnectPlugin.js
 * @about - JavaScript interface for PhoneGap bridge to Facebook Connect SDK
 *
 *
 */

var exec = require("cordova/exec");

var facebookConnectPlugin = { 
    
	getLoginStatus: function(s, f) {
	    cordova.exec(s, f, "FacebookConnectPlugin", "getLoginStatus", []);
	},
	    
	showDialog: function(options, s, f) {
	    cordova.exec(s, f, "FacebookConnectPlugin", "showDialog", [options]);
	},
	    
	login: function(permissions, s, f) {
	    cordova.exec(s, f, "FacebookConnectPlugin", "login", permissions);
	},
	    
	getAccessToken: function(s, f) {
	    cordova.exec(s, f, "FacebookConnectPlugin", "getAccessToken", []);
	},
	    
	logout: function(s, f) {
	    cordova.exec(s, f, "FacebookConnectPlugin", "logout", []);
	},
	
	api: function(path, method, params, callback, f) {
		cordova.exec(callback, f, "FacebookConnectPlugin", "graphApi", [path, method, params, callback]);
	}
	    	    
};

module.exports = facebookConnectPlugin;
