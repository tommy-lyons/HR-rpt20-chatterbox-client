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
      roomname: document.getElementById('rooms').value
    };

    Parse.create(messageObj);
    $('#chats').prepend(MessageView.render({user: messageObj.username, text: messageObj.text}));
    document.getElementById('send').reset();

  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};