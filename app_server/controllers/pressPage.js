/* Function that renders press page when executed by Router. */
module.exports.getPage = function(req, res, next) {
  res.render('press', { title: 'Theater Press Page' });
};
