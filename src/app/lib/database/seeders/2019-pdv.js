

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('pdv', [
    {
      id: 'cc0b67ec-2f34-45ee-8fe5-6e0296a0615d',
      tradingName: 'Alianca Mercados',
      ownerName: 'Sidiney Maldonado',
      document: '55.787.877/0001-66',
      coverageArea: Sequelize.fn('ST_GeomFromText', 'MULTIPOLYGON(((-46.70103 -23.61731,-46.72086 -23.63517,-46.7357 -23.62738,-46.74618 -23.60575,-46.7557 -23.60855,-46.76999 -23.5987,-46.7721 -23.58224,-46.76326 -23.57079,-46.73433 -23.54613,-46.70644 -23.56163,-46.70335 -23.56973,-46.69073 -23.58475,-46.70103 -23.61731)))'),
      address: Sequelize.fn('ST_GeomFromText', 'POINT(-46.720875 -23.584986)'),
      createdAt: '2019-10-25 23:34:10.476',
      updatedAt: '2019-10-25 23:34:10.476',
    },
    {
      id: '72117a28-f20e-4d5b-9468-020e9095755b',
      tradingName: 'Bar Itaquera',
      ownerName: 'Claudiney Snaider',
      document: '20.332.274/0001-95',
      coverageArea: Sequelize.fn('ST_GeomFromText', 'MULTIPOLYGON(((-46.61026 -23.66622,-46.62596 -23.66985,-46.63481 -23.6749,-46.64012 -23.69742,-46.63566 -23.71857,-46.63154 -23.74041,-46.63078 -23.75411,-46.61701 -23.75216,-46.59878 -23.74832,-46.58076 -23.73916,-46.56257 -23.73662,-46.55038 -23.73378,-46.54404 -23.73016,-46.53368 -23.72612,-46.52488 -23.71453,-46.52502 -23.70481,-46.52786 -23.69098,-46.5573 -23.66818,-46.57335 -23.66606,-46.61026 -23.66622)))'),
      address: Sequelize.fn('ST_GeomFromText', 'POINT(-46.588654 -23.709635)'),
      createdAt: '2019-10-25 23:34:10.476',
      updatedAt: '2019-10-25 23:34:10.476',
    },

  ], {}),

  down: queryInterface => queryInterface.bulkDelete('pdv', null, {}),
};
