module.exports = function (RED) {
  "use strict";
  function Pipe2Node(config) {
    RED.nodes.createNode(this, config);
    var node = this;
    this.on('input', function (msg) {
      msg.payload.total = msg.payload.total>0?msg.payload.total:msg.payload.amount;
      msg.payload.steps.push('Pipe 2 apply Surcharge: '+msg.payload.surcharge+' to: ' +msg.payload.total + ' = ' + msg.payload.total*msg.payload.surcharge);
      msg.payload.total = msg.payload.total*msg.payload.surcharge;
      node.send(msg);
    });
  }
  RED.nodes.registerType("pipe2", Pipe2Node);
};