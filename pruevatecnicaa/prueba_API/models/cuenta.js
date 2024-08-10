const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    cuentaid: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "cuentaid",
      autoIncrement: true
    },
    tipocuenta: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "tipocuenta",
      autoIncrement: false
    },
    estado: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "estado",
      autoIncrement: false
    },
    valordisponible: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "valordisponible",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "cuenta",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: 'public'

  };
  const CuentaModel = sequelize.define("cuenta_model", attributes, options);
  return CuentaModel;
};