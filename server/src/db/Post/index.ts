import { Model, DataTypes } from 'sequelize';
import db from '@/db';

export default class Post extends Model {
  id?: number;
  title?: string;
  body?: string;
  firstUpload?: Date;
  lastUpdate?: Date;
};

Post.init({
  id: {
    field: 'id',
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  title: {
    field: 'title',
    type: DataTypes.TEXT,
    allowNull: false,
  },
  body: {
    field: 'body',
    type: DataTypes.TEXT,
    allowNull: false,
  },
  firstUpload: {
    field: 'firstUpload',
    type: DataTypes.DATE,
    allowNull: false,
  },
  lastUpdate: {
    field: 'lastUpdate',
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  tableName: 'Post',
  sequelize: db,
  timestamps: false,
});
