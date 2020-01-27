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

  // add a new room to select list, by selecting it when submitting your message,
  // the message will submit to that room
  handleAddRoom: function() {
    var newRoom = document.getElementById('roomname').value;
    $('#rooms select').append(RoomView.render({ roomname: newRoom}));

  }
};

