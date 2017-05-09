/// Business Logic ///
function Place (location, landmarks, notes) {
  this.location  = location;
  this.landmarks = landmarks.split(",");
  this.notes     = notes;
}

/// User Logic ///
$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var newPlace = new Place (
      $("input#location-input").val(),
      $("input#landmarks-input").val(),
      $("textarea#notes-input").val()
    );

    $("ul#places").append("<li>" + newPlace.location + "</li>");
    $("ul#places li").last().click(function() {
      $("#output h3").text(newPlace.location);
      $("#output ul").empty();
      for (var i = 0; i < newPlace.landmarks.length; i++) {
        $("#output ul").append("<li>" + newPlace.landmarks[i] + "</li>");
      }
      $("#output p").text(newPlace.notes);
    });
  });

});
