$(function() {
  window.artworkCollection = new ArtworkCollection();
  window.searchFieldView = new SearchFieldView({ el: $("#search-field-container") });
  window.searchResultsView = new SearchResultsView({el: $("#search-results-container")});
});
