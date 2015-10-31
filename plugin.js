module.exports = function(babel) {
  var t = babel.types;

  return {
    visitor: {
      BlockStatement: function(path) {
        path.replaceWith(path.node.body[0]);
      },
      WhileStatement: function(path) {
        throw path.buildCodeFrameError('Reached WhileStatement');
      }
    }
  };
};
