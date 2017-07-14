module.exports = function (app) {
  const ChatController = {
    index: function (req, res) {
      const params = { user: req.session.user }
      res.render('chat/index', params)
    }
  }
  return ChatController
}
