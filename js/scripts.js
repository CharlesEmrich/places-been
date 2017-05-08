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
    //gather data from form, create new place object
    var newPlace = new Place (
      $("input#location-input").val(),
      $("input#landmarks-input").val(),
      $("textarea#notes-input").val()
    );
    //add new place object to list of places and add event handler
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
