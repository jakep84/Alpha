/**
 * GET /
 * Setting page.
 */
exports.index = function(req, res) {
  res.render('setting', {
    title: 'Setting'
  });
};