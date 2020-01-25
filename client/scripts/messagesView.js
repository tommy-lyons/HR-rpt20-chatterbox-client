var MessagesView = {

  $chats: $('#chats'),

  // empty function on the messages view object
  initialize: function() {

    // render the messages when the page loads
    $(document).ready(MessagesView.render);
    // want to re-render for every submission
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

    // select $chats.show?
    // $('#chats').append('test', MessageView.render(data));
    // re-render when submit
  },

  filterByRoom: function(arr) {
    var data = arr;

    var filterArr = function(data, str) {
      var filteredArr = [];
      // check each elem in the data array
      // compare roomname to str
      // return filtered arr of messages that are only in that room
      // call messages render with new arr
      _.each(arr, function(elem) {
        if (elem.roomname === str) {
          filteredArr.push(elem);
        }
      });
      $('#chats').empty();
      $('#chats').prepend(MessagesView.render(filteredArr));
      console.log(filteredArr);
    };
    // find the name of the selected value
    // filter out chats by that name
    // render the filtered chats to the DOM
    var str = '';
    //when the selected option changes
    $( 'select' ).change(function() {
      //assign the text from the selected option to the str variable
      $( 'select option:selected' ).each(function() {
        str = $( this ).text();
      });
      // rerender chats div
      filterArr(data, str);
    })
      .trigger( 'change' );
  }


};