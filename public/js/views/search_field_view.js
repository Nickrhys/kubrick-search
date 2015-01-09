window.SearchFieldView = Backbone.View.extend({

  initialize: function(){
    var source   = $("#search-field-template").html();
    this.template = Handlebars.compile(source);
    this.render();
  },

  render: function() {
    $("#search-field-container").html(this.template({label: "Search term "}));
  },

  events: {
    "keyup #search-field-input": "updateSearch"
  },

  updateSearch: function() {
    window.artworkCollection.fetch({
      data: {token : window.token, s : $("#search-field-input").val()}
    })
  }
});
