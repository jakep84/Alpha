/**
 * GET /
 *  Thank you page.
 */
exports.index = function(req, res) {
  res.render('thankYou', {
    title: 'Thanks'
  });
};