/* Function that renders season page when executed by Router. */
module.exports.getPage = function(req, res, next) {
  res.render('index', { title: 'Schmeater Season' });
};
