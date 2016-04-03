/**
 * GET /
 * Describe page.
 */
exports.index = function(req, res) {
  res.render('describe', {
    title: 'Describe'
  });
};