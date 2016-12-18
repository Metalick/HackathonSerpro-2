﻿// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
var InitController = {};
var pushNotification;
(function (ns) {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {

        // Handle the Cordova pause and resume events
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);
        document.addEventListener('hidekeyboard', onKeyboardHide, false);
        document.addEventListener('showkeyboard', onKeyboardShow, false);
        bindEventos();
    };

    function bindEventos()
    {
        MenuController.bindEventos();
        //AutorizacaoController.validar();
    }

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {

    };

    function onKeyboardHide() {

    }

    function onKeyboardShow() {

    }

    function orientationChange() {

    }
})(InitController);