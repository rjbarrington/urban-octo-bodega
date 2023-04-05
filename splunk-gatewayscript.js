var hm = require('header-metadata');
var current_headers = hm.current.headers;
session.input.readAsJSON(function (error, json) {
  if (error) {
    // no, don't do this - throw it instead
    session.output.write(error);
  }
  else {
    var payload = {
      event: json,
      time: json.time,
      host: "",
      source: json.source,
      source_type: "json",
      index: "foo",
      fields: ""
    };
    session.output.write(payload);
  }
});
