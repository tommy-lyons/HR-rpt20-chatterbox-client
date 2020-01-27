var MessagesView = {

  $users: $('username'),
  $chats: $('#chats'),

  // empty function on the messages view object
  initialize: function() {


  },

  // we want to display the array of chat messages in the DOM
  render: function(arr) {
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
      $('#chats').prepend(MessagesView.render(filteredArr));
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

    // this took a bit, finally worked after calling the method AFTER other functionality in App.fetch
    // NEXT need to apply style to all elements that have the same username as the one we click on somehow,
    // not sure how to select by text value and pass in a variable, can do it directly with the jQuery contains()
    // method, but it doesn't allow for passing in a variable, only string literals...not sure
    $('.username').on('click', function() {
      var text = $(this).text();
      console.log(text);
      // do something with the text
    });

  }


};