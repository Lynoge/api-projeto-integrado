module.exports = function (app) {
    var professionals = [
        { id: 1, name: 'John Lennon', profission: 'Mecânico', location: { x: 40, y: 50 } },
        { id: 2, name: 'James Clóvis', profission: 'Eletricista', location: { x: 200, y: 900 } },
        { id: 3, name: 'Arthur Machado', profission: 'Eletricista', location: { x: 500, y: 500 } },
        { id: 4, name: 'Armindo Bier', profission: 'Mecânico', location: { x: 800, y: 300 } }
    ];

    var ProfessionalController = {
        getAll: function (req, res) {

            var arr = [];
            var name = req.query.name;
            var profission = req.query.profission;

            professionals.forEach((item) => {
                if (name && profission) {
                    if (name.toUpperCase() == item.name.toUpperCase() && profission.toUpperCase() == item.profission.toUpperCase())
                        arr.push(item);
                } else if (name) {
                    if (name.toUpperCase() == item.name.toUpperCase())
                        arr.push(item);
                } else if (profission) {
                    if (profission.toUpperCase() == item.profission.toUpperCase())
                        arr.push(item);
                } else {
                    arr.push(item);
                }
            });
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(arr));
        },
        getById: function (req, res) {
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(professionals[req.params.id - 1]));
        },
        create: function (req, res) {

        },
        remove: function (req, res) {

        }
    };
    return ProfessionalController;
};