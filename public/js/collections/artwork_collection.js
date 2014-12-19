var ArtworkCollection = Backbone.Collection.extend({
  url: 'http://kubrick.herokuapp.com/v1/artworks',

  parse: function(response) {
    return response.results;
  }
});
