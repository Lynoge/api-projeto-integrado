module.exports = function (req, res, next) {
    // Pesquisar por Passport JS
    // Implementar validações de autenticação aqui!
    console.log('Middleware Authentication');
    return next();
}