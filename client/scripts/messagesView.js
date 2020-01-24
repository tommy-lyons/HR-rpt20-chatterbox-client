var MessagesView = {

  $chats: $('#chats'),

  // empty function on the messages view object
  initialize: function() {

    // render the messages when the page loads
    // $(document).ready(MessagesView.render);
    // want to re-render for every submission
  },

  // we want to display the array of chat messages in the DOM
  render: function(data) {

    // select $chats.show?
    $('#chats').append('test', MessageView.render(data));
    // re-render when submit

  }

};