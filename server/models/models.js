const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true,autoIncrement: true },
    email: {type: DataTypes.STRING, unique: true, allowNull: false },
    firstName: {type: DataTypes.STRING, allowNull: false },
    lastName: {type: DataTypes.STRING, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
}
)
const Trip = sequelize.define('trip', {
    id: {type: DataTypes.INTEGER, primaryKey: true,autoIncrement: true },
    driver_id: {type: DataTypes.INTEGER},
    startTrip: {type: DataTypes.STRING, },
    endTrip: {type: DataTypes.STRING, },
    img: {type: DataTypes.STRING, },
}
)

User.hasMany(Trip)
Trip.belongsTo(User)

module.exports = {
    User,
    Trip
}