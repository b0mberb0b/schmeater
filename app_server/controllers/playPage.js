/* Function that renders play page when executed by Router. */
module.exports.getPage = function(req, res, next) {
  res.render('play', { title: 'Theater Schmeater Event' });
};
