"use strict";

var template = require('./hello.hbs')
var context = {title: "My New Post", body: "This is my first post!"}

// browserify load
window.Test = "Test is good"

module.exports = template(context)