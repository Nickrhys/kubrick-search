$(function() {
  window.searchFieldView = new SearchFieldView({ el: $("#search-field-container") });
  window.searchResultsView = new SearchResultsView({el: $("#search-results-container")});
  window.artworkCollection = new ArtworkCollection();
});


