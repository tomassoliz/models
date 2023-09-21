module.exports = (sequelize, dataTypes) => {

    const alias = "Actor";
    const cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoincrement: true
        },
        first_name: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        last_name: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        rating: {
            type: dataTypes.DECIMAL(3, 1),
            defaultValue: null
        },
        favorite_movie_id: {
            type: dataTypes.INTEGER.UNSIGNED,
            defaultValue: null
        }
    }

    const config = {
        tableName: "actors",
        timetamps: true,
        underscored: true
    }

    const Actor = sequelize.define(alias, cols, config);

    return Actor
}