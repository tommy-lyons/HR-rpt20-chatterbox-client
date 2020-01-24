var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    // want to access the form data for passing to the server
    // text from the input box, user name from the App object, and room from...?
    var input = document.getElementById('message').value;

    var messageObj = {
      name: App.username,
      text: input,
      roomName: 'not in a room yet'
    };

    console.log(messageObj);

  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};