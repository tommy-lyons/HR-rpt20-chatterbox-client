var MessageView = {

  render: _.template(`
      <div class="chat <%- user %>">
        <div class="username"><%- user %>:</div>
        <div><%- text %></div>
      </div>`)

};
