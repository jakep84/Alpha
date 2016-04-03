/**
 * GET /
 *  Rate page.
 */
exports.index = function(req, res) {
  res.render('rate', {
    title: 'Rate'
  });
};