/* Function that renders about page when executed by Router. */
module.exports.getPage = function(req, res, next) {
  res.render('about', { title: 'About Theater Schmeater' });
};
