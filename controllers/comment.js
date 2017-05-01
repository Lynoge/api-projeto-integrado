module.exports = function(app) {
  const ProfessionalController = {
    getAll(req, res) {
      const professionals = [
                {id: 1, name: 'John Lennon', profission: 'Mecânico', location: {x: 40, y: 50}},
                {id: 2, name: 'James Clóvis', profission: 'Eletricista', location: {x: 200, y: 900}},
                {id: 3, name: 'Arthur Machado', profission: 'Eletricista', location: {x: 500, y: 500}},
                {id: 4, name: 'Armindo Bier', profission: 'Mecânico', location: {x: 800, y: 300}}
      ]
      res.setHeader('Content-Type', 'application/json')
      res.send(JSON.stringify(professionals))
    }
  }

  return ProfessionalController
}
