/**
 * GET /
 *  Loading page.
 */
exports.index = function(req, res) {
  res.render('loading', {
    title: 'Loading'
  });
};