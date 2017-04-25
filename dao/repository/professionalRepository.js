import { Professional } from '../models';

export default class professionalRepository {

    getAll() {
        var toDomain = this.toDomain;
        var p = new Promise(function (resolve, reject) {
            Professional.findAll().then((result) => {
                var users = [];
                var i = 0;
                for (i; i < result.length; i++)
                    users.push(toDomain(result[i]));
                resolve(users);
            });
        });
        return p;
    }

    findByName(name) {
        var toDomain = this.toDomain;
        var p = new Promise(function (resolve, reject) {
            Professional.findAll({ where: { name: { $iLike: '%' + name + '%' } } }).then((result) => {
                var users = [];
                var i = 0;
                for (i; i < result.length; i++)
                    users.push(toDomain(result[i]));
                resolve(users);
            });
        });
        return p;
    }

    findByProfission() {

    }

    add(professional) {

    }

    update(professional) {

    }

    remove(professional) {

    }

    toDomain(entity) {
        if (Array.isArray(entity)) {
            var users = [];
            for (i; i < entity.length; i++) {
                users.push({
                    professionalId: entity[i].professionalId,
                    name: entity[i].name,
                    email: entity[i].email
                });
            }
        } else {
            return {
                professionalId: entity.professionalId,
                name: entity.name,
                email: entity.email
            }
        }
    }
}