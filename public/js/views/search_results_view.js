window.SearchResultsView = Backbone.View.extend({


  initialize: function(){
    var source   = $("#search-results-template").html();
    this.template = Handlebars.compile(source);
    this.render();
  },

  render: function(){
    $("#search-results-container").html(this.template({label: "Your search results "}));

  },

});

