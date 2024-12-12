import { DataTypes } from "sequelize";
import { connection } from "./connection.js";

const Agendamento = connection.define("agendamentos", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  cliente: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

  dataAgendamento: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    field: "data_agendamento",
  },

  horaAgendamento: {
    type: DataTypes.TIME,
    allowNull: false,
    field: "hora_agendamento",
  },

  descricao: {
    type: DataTypes.TEXT,
    field: "descricao",
  },
}, {
  tableName: "agendamentos",
  timestamps: false,
});

export default Agendamento;
