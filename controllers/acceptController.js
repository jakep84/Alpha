/**
 * GET /
 * accept page.
 */
exports.index = function(req, res) {
  res.render('accept', {
    title: 'Accept'
  });
};

