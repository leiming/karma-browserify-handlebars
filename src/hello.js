"use strict";

var template = require('./hello.hbs')
var context = {title: "My New Post", body: "This is my first post!"}

// handlebars runtime load
console.log(template(context))

// browserify load
window.Test = "Test is good"

module.exports = template(context)