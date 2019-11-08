
import Sequelize from 'sequelize';


module.exports = (sequelize, DataTypes) => {
  const PDV = sequelize.define(
    'pdv',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        type: Sequelize.UUID,
      },
      tradingName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ownerName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      document: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      coverageArea: DataTypes.GEOMETRY('MultiPolygon'),
      address: DataTypes.GEOMETRY('POINT'),

    },
    {
      deletedAt: 'deletedAt',
      paranoid: true,
      underscored: false,
      indexes: [
        {
          fields: ['id'],
          unique: true,
        },
        {
          fields: ['document'],
          unique: true,
        },
        {
          fields: ['tradingName'],
          unique: true,
        },
      ],
    },
  );

  PDV.getPdvByLatLong = async (lat, long) => {
    const pdv = await sequelize.query(`
    select
      *
    from
      pdvs p
    where
      ST_Distance_sphere( st_geometryfromtext('POINT(${lat} ${long})'),
      st_point(st_x(p.address),
      st_y(p.address)) ) <= 1000`,
    { type: sequelize.QueryTypes.SELECT });

    return pdv;
  };

  return PDV;
};
