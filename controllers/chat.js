/**
 * GET /
 * Chat page.
 */
exports.index = function(req, res) {
  res.render('chat', {
    title: 'Chat'
  });
};