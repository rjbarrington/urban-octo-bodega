var hm = require('header-metadata');
var current_headers = hm.current.headers;
var errors = {};
var json = {};
var body = session.input.readAsJSON(function (error, json) {
  if (error) {
    session.output.write(error);
  }
  else {
    var payload = {
      event: json,
      headers: current_headers
    };
    session.output.write(payload);
  }
});