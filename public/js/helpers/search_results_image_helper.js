Handlebars.registerHelper('artworkImage', function(artworkId) {
  var str = artworkId.toString()

  return "https://d3l2rivt3pqnj2.cloudfront.net/i/prints/300/" + str.charAt(0) + "/" + str.charAt(1) + "/" + artworkId + ".jpg"
});
