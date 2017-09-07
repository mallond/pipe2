module.exports = function (RED) {
  "use strict";
  function Pipe2Node(config) {
    RED.nodes.createNode(this, config);
    var node = this;
    this.on('input', function (msg) {
      node.send(msg);
    });
  }
  RED.nodes.registerType("pipe2", Pipe2Node);
};