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
      // changed this, now a new messages have selescted room for the roomnanm property
      roomname: $('#roomlist option:selected').text()
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