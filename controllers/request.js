/**
 * GET /
 *  Request page.
 */
exports.index = function(req, res) {
  res.render('request', {
    title: 'Request'
  });
};