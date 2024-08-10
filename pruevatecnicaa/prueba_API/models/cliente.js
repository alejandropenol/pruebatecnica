const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    cedula: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "cedula",
      autoIncrement: false
    },
    nombres: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "nombres",
      autoIncrement: false
    },
    apellidos: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "apellidos",
      autoIncrement: false
    },
    cuentaid: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "cuentaid",
      autoIncrement: false,
      references: {
        key: "cuentaid",
        model: "cuenta_model"
      }
    },
    clienteid: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "clienteid",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "cliente",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: 'public'

  };
  const ClienteModel = sequelize.define("cliente_model", attributes, options);
  return ClienteModel;
};