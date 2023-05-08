const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: {type: DataTypes.STRING, unique: true, allowNull: false },
    firstName: {type: DataTypes.STRING, allowNull: false },
    lastName: {type: DataTypes.STRING, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
    phoneNumber: {type: DataTypes.STRING,},
    aboutMe: {type: DataTypes.STRING,},
    picProfile: {type: DataTypes.STRING, },
    role: {type: DataTypes.STRING, defaultValue: "USER"},

}
)
const Trip = sequelize.define('trip', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    startTrip: {type: DataTypes.STRING, },
    endTrip: {type: DataTypes.STRING, },
    roadMap: {type: DataTypes.STRING, },
    price: {type: DataTypes.INTEGER, },
    babyChair: {type: DataTypes.BOOLEAN, },
    petsAllowed: {type: DataTypes.BOOLEAN, },
    spaceTrunk: {type: DataTypes.BOOLEAN, },
}
)
const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: {type: DataTypes.STRING, },
})
const UserType = sequelize.define('user_type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})
const Document = sequelize.define('document', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    passport: {type: DataTypes.STRING, },
    driverLicense: {type: DataTypes.STRING, },
    vehiclePassport: {type: DataTypes.STRING, },
    insurance: {type: DataTypes.STRING, },
})

User.hasMany(Trip)
Trip.belongsTo(User)

Type.belongsToMany(User, {through: UserType })
User.belongsToMany(Type, {through: UserType })

User.hasOne(Document)
Document.belongsTo(User)

module.exports = {
    User,
    Trip,
    Type,
    UserType,
    Document
}