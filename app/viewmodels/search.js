define(function (require) {
  var ko = require('knockout');
  var http = require('plugins/http');

  var url = 'http://www.reddit.com/search.json';

  return {
    query: ko.observable(),
    results: ko.observableArray([]),
    runSearch: function() {
      var that = this;
      var queryUrl = url + '?q=' + this.query();
      http.get(queryUrl).then(function(data) {
        that.results(data.data.children);
        console.log(that.results())
      });
    }
  };
});
