module.exports = (sequelize, dataTypes) => {

    const alias = "Movie";
    const cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoincrement: true
        },
        title: {
            type: dataTypes.STRING(500),
            allowNull: false,
        },
        rating: {
            type: dataTypes.DECIMAL(3, 1).UNSIGNED,
            allowNull: false
        },
        awards: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            defaultValue: 0
        },
        release_date: {
            type: dataTypes.DATE,
            allowNull: false
        },
        length: {
            type: dataTypes.INTEGER.UNSIGNED,
            defaultValue: null
        },
        genre_id: {
            type: dataTypes.INTEGER.UNSIGNED,
            defaultValue: null
        }
    }

    // siempre tiene que estar escrita en plural y en ingles 
    // si es que la marca de tiempo no estan te pone error si no aclaraste

    const config = {
        tableName: "movies",
        timetamps: true,
        underscored: true
    }

    const Movie = sequelize.define(alias, cols, config);

    return Movie
}