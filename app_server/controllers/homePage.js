/* Function that renders home page when executed by Router. */
module.exports.getPage = function(req, res, next) {
  res.render('index', { title: 'Theater Schmeater' });
};
