var MessagesView = {

  $users: $('username'),
  $chats: $('#chats'),

  // empty function on the messages view object
  initialize: function() {
  },

  // we want to display the array of chat messages in the DOM
  renderMessage: function(arr) {
    _.each(arr, function(elem) {
      if (elem.text) {
        var check = elem.text.split('').includes('<');

        if (!check) { // if it doesn't start with a script
          $('#chats').append(MessageView.render({user: elem.username, text: elem.text}));
        }
      }
    });
  },

  // lets user 'enter room' - you will only see messages with the selected roomname, or messages that are posted for that room
  filterByRoom: function(arr) {
    var room = '';

    var filterArr = function(arr, room) {
      var filteredArr = [];
      // traverse collection for messages that match the desired room
      _.each(arr, function(elem) {
        if (elem.roomname === room) {
          filteredArr.push(elem);
        }
      });
      $('#chats').empty();
      $('#chats').prepend(MessagesView.renderMessage(filteredArr));
    };

    // when a new room is selected
    $( 'select' ).change(function() {
      // assign the text from the selected option to the str variable
      $( 'select option:selected' ).each(function() {
        room = $( this ).text();
      });
      // call filterArr and pass selected room
      filterArr(arr, room);
      // added this method call here so that when the roomnames are filtered to generate a new room
      // the befriend functionality still works

      MessagesView.befriend();
    })
      .trigger( 'change' ); // ?
  },

  befriend: function () {
    $('.username').on('click', function() {
      var text = ($(this).text());
      var name = text.substr(0, text.length - 1);
      console.log(name);
      $('.' + name).css('border', '13px solid red');
    });
  }

};