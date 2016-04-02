/**
 * GET /
 *  SignUp page.
 */
exports.index = function(req, res) {
  res.render('signUp', {
    title: 'Sign'
  });
};