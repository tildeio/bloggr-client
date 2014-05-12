// in order to see the app running inside the QUnit runner
App.rootElement = '#ember-testing';

// Common test setup
App.setupForTesting();
App.injectTestHelpers();

// common QUnit module declaration
module("Integration tests", {
  setup: function() {
    // before each test, ensure the application is ready to run.
    Ember.run(App, App.advanceReadiness);
  },

  teardown: function() {
    // reset the application state between each test
    App.reset();
  }
});

// QUnit test cases

test("root @ /", function() {
  // async helper telling the application to go to the '/' route
  visit("/");

  // helper waiting the application is idle before running the callback
  andThen(function() {
    equal(find("div.navbar > div.navbar-inner > a.brand").text(), "Bloggr", "Application title is rendered");
    equal(find("div.navbar > div.navbar-inner > ul.nav > li").length, 2, "There are two items in the navbar");
  });
});

test("posts @ /posts", function() {
  // async helper telling the application to go to the '/posts' route
  visit("/posts");

  // helper waiting the application is idle before running the callback
  andThen(function() {
    equal(find("tbody > tr").length, 2, "There are two items in the post list");
  });
});