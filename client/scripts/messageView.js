var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username"><%- user %>:</div>
        <div><%- text %></div>
      </div>`)

};
