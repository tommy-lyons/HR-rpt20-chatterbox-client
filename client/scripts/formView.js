var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    var messageObj = {
      username: App.username,
      text: document.getElementById('message').value,
      roomname: 'not in a room yet'
    };

    Parse.create(messageObj);
    $('#chats').prepend(MessageView.render({user: messageObj.username, text: messageObj.text}));
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};