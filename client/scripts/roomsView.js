var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    console.log('initialize running');
    RoomsView.$button.on('click', RoomsView.handleClick);
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
  },

  handleClick: function() {
    console.log(filteredRooms);
  //  document.getElementById('roomname').value
  },
};


// we need to re-scope filteredRooms, or fix that otherwise

// or better, we need to figure out how to save the rooms that we add to the array.

// also need to figure out how to refresh or re-render divs when we pull data

// and more...