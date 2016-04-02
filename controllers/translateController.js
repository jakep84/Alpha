/**
 * GET /
 *  Translate page.
 */
exports.index = function(req, res) {
  res.render('translate', {
    title: 'Translate'
  });
}; 