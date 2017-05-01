module.exports = function (app) {
  const professionalController = app.controllers.professional

  app.route('/professionals')
    .get((req, res) => {
      professionalController.getAll(req, res)
      .then(response => {
        res.status(response.statusCode)
        res.json(response.data)
      })
    })

    .post((req, res) => {
      professionalController.create(req.body)
      .then(response => {
        res.status(response.statusCode)
        res.json(response.data)
      })
    })

  app.route('/professionals/:id')
    .get((req, res) => {
      professionalController.findById(req.params)
      .then(response => {
        res.status(response.statusCode)
        res.json(response.data)
      })
    })

    .put((req, res) => {
      professionalController.update(req.body, req.params)
      .then(response => {
        res.status(response.statusCode)
        res.json(response.data)
      })
    })

    .delete((req, res) => {
      professionalController.delete(req.params)
      .then(response => {
        res.status(response.statusCode)
        res.json(response.data)
      })
    })
}
