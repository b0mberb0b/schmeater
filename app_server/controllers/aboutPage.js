/* Function that renders about page when executed by Router. */
module.exports.getPage = function(req, res, next) {
  res.render('index', { title: 'About Theater Schmeater' });
};
