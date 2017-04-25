import Repository from '../dao/repository/professionalRepository';
module.exports = function (app) {

    var repository = new Repository();

    var ProfessionalController = {
        getAll: function (req, res) {

            var name = req.query.name;
            var profission = req.query.profission;
            if (name) {
                repository.findByName(name).then(users => {
                    res.setHeader('Content-Type', 'application/json');
                    res.send(JSON.stringify(users));
                });
            }else{
                repository.getAll().then(users => {
                    res.setHeader('Content-Type', 'application/json');
                    res.send(JSON.stringify(users));
                });
            }

            // professionals.forEach((item) => {
            //     if (name && profission) {
            //         if (name.toUpperCase() == item.name.toUpperCase() && profission.toUpperCase() == item.profission.toUpperCase())
            //             arr.push(item);
            //     } else if (name) {
            //         if (name.toUpperCase() == item.name.toUpperCase())
            //             arr.push(item);
            //     } else if (profission) {
            //         if (profission.toUpperCase() == item.profission.toUpperCase())
            //             arr.push(item);
            //     } else {
            //         arr.push(item);
            //     }
            // });

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