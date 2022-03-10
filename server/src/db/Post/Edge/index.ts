import { Model, DataTypes } from 'sequelize';
import db from '@/db';

export default class Edge extends Model {
  id?: number;
  fromId?: number;
  toId?: number;
};

Edge.init({
  id: {
    field: 'id',
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  fromId: {
    field: 'fromId',
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  toId: {
    field: 'toId',
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'PostGraphEdge',
  sequelize: db,
  timestamps: false,
});
