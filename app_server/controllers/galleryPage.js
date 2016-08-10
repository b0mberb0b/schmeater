/* Function that renders gallery page when executed by Router. */
module.exports.getPage = function(req, res, next) {
  res.render('index', { title: 'Schmee\'s Photo Gallery' });
};
