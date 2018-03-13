exports.header = null

exports.footer = {
  contents: function(pageNum, numPages) {
    return "<h6 style='text-align: center;'><span>" + pageNum + " / " + numPages + "</span></h6>"
  },
  height: '0.1cm'
}
