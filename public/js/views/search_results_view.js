window.SearchResultsView = Backbone.View.extend({


  initialize: function(){
    this.listenTo(window.artworkCollection, "sync", this.render);
    var source   = $("#search-results-template").html();
    this.template = Handlebars.compile(source);
    this.render();
  },

  render: function(){
    $("#search-results-container").html(this.template({artworks: window.artworkCollection.toJSON()}));
    console.log("rendering");
  },

});

