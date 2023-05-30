//FUNCIÓN DE ORDEN SUPERIOR (recibe por parámetro una función, la mejora y la retorna)

module.exports = (fn) => {
    return function(req, res, next){
        fn(req, res).catch((err)=> {
            next(err)
        })
    }
}

// () => (req, res, next) => fn().catch((err)=> next(err)); -->simplificado