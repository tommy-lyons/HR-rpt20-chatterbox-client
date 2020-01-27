var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  // added functionality to call handleAddRoom when use the add room button
  initialize: function() {
    RoomsView.$button.on('click', RoomsView.handleAddRoom);
  },

  // cleans up rooms list to not include duplicates and empties.
  render: function(arr) {
    var filteredRooms = [];

    _.each(arr, function(elem) {
      if (elem.roomname && !filteredRooms.includes(RoomView.render({ roomname: elem.roomname }))) {
        filteredRooms.push(RoomView.render({ roomname: elem.roomname }));
      }
    });
    for (var i = 0; i < filteredRooms.length; i++) {
      $('#rooms select').append(filteredRooms[i]);
    }
    return filteredRooms;
  },

  // so when the add room button is clicked, a new room is appended to select list, and will be added as the room name in the message when it's selected.
  handleAddRoom: function() {
    var newRoom = document.getElementById('roomname').value;
    $('#rooms select').append(RoomView.render({ roomname: newRoom}));

  }
};


// we need to re-scope filteredRooms, or fix that otherwise

// or better, we need to figure out how to save the rooms that we add to the array.

// also need to figure out how to refresh or re-render divs when we pull data

// and more...