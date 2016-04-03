/**
 * GET /
 * Choices Page.
 */
exports.index = function(req, res) {
  res.render('choices', {
    title: 'Choices'
  });
};