const db = require('../database/models')

module.exports = {
    list: (req, res) => {
        // finAll: traeme todo
        db.Movie.findAll()
            .then((movies) => {
                return res.render('moviesList', {
                    movies
                })
            })
            .catch((error) => console.log(error))
    },

    new: (req, res) => {
        // findAll siempre te devuelve un array
        db.Movie.findAll({
            order: [
                ['release_date', 'DESC']
                // ['title', 'ASC']
            ]
        })
            .then(movies => {
                return res.render('newestMovies', {
                    movies
                })
            })
            .catch(error => console.log(error))
        // return res.send('peliculas de estreno')
    },

    recomended: (req, res) => {
        db.Movie.findAll({
            limit: 5,
            order : [
                ['rating', 'DESC']
            ]
        })
            .then(movies => {
                return res.render('recommendedMovies', {
                    movies
                })
            })
            .catch(error => console.log(error))
    },

    detail: (req, res) => {
        const { id } = req.params;
        // findByPk : traeme por la clave primaria
        db.Movie.findByPk(id)
            .then(movie => {
                return res.render('moviesDetail', {
                    movie
                })
            })
            .catch(error => console.log(error))

    }
}
