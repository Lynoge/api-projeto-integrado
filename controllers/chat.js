// describe('Models: Index', () => {
//   it('First test', () => {
//     expect(200).toBe(200)
//   })
// })


module.exports = function(app){
    var ChatController = {
        index: function(req, res){
            var params = { user: req.session.user };
            res.render('chat/index', params);
        }
    }
    return ChatController;
}