/* Function that renders support page when executed by Router. */
module.exports.getPage = function(req, res, next) {
  res.render('support', { title: 'Schmeater Season' });
};
