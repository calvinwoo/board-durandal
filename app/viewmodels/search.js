define(function (require) {
  var ko = require('knockout');
  var http = require('plugins/http');

  var url = 'http://www.reddit.com/search.json';
  var ifDisplayNoneText = false;

  var runSearch = function(query, url, assignment) {
    var searchUrl = url + '?q=' + query();
    http.get(searchUrl).then(function(data) {
      ifDisplayNoneText = data.data.children.length;
      assignment(data.data.children);
    });
  }

  var query = ko.observable('').extend({ rateLimit: { timeout: 300, method: 'notifyWhenChangesStop' } });
  var results = ko.observableArray([]);

  query.subscribe(function() {
    runSearch(query, url, results);
  });

  return {
    ifDisplayNoneText: ifDisplayNoneText,
    query: query,
    results: results
  };
});
