var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username"><%- user %>:</div>
        <div><%- text %></div>
      </div>`)

};


// var compiled = _.template("hello: <%= name %>");

// compiled({name: 'moe'});

// => "hello: moe"


// var template = _.template("<b><%- value %></b>");

// template({value: '<script>'});

// => "<b>&lt;script&gt;</b>"
