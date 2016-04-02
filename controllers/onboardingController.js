/**
 * GET /
 * Home page.
 */
exports.index = function(req, res) {
  res.render('onboarding', {
    title: 'OnBoarding'
  });
};
