requirejs.config({
  paths: {
    'text': '../lib/require/text',
    'durandal':'../lib/durandal/js',
    'plugins' : '../lib/durandal/js/plugins',
    'transitions' : '../lib/durandal/js/transitions',
    'knockout': '../lib/knockout/knockout-3.1.0',
    'jquery': '../lib/jquery/jquery-1.9.1'
  }
});

define(function (require) {
  var system = require('durandal/system');
  var app = require('durandal/app');
  var viewLocator = require('durandal/viewLocator');

  system.debug(true);
 
  app.title = 'Durandal Message Board';
   
  app.configurePlugins({
    router: true,
    dialog: true
  });

  app.start().then(function() {
    viewLocator.useConvention();
    app.setRoot('viewmodels/shell');
  });
});
 
