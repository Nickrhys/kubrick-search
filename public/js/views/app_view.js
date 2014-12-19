window.AppView = Backbone.View.extend({


  initialize: function(){
    var source   = $("#search-field-template").html();
    this.template = Handlebars.compile(source);
    this.render();
  },


  render: function() {
    $("#search-field-container").html(this.template({label: "Search term "}));
  },

  events: {
    "click #search-field-input": "updateSearch"
  },

  updateSearch: function() {
    console.log("updated search")
  }
});

