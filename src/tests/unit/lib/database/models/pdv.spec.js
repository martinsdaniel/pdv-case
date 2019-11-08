import assert from 'assert';
import {
  describe,
  it,
} from 'mocha';


const { sequelize } = require('../../../../../app/lib/database/models/index');

const PDV = sequelize.import('../../../../../app/lib/database/models/pdv');

describe('[Unit] PDV Model', async () => {
  const PDVData = {
    tradingName: 'Ourinhos Marketing',
    ownerName: 'Silva',
    document: '94.485.174/0001-35',
    coverageArea: {
      type: 'MultiPolygon',
      coordinates: [
        [
          [
            [
              -49.36299,
              -25.4515,
            ],
            [
              -49.35334,
              -25.45065,
            ],
          ],
        ],
      ],
    },
  };

  describe('Validations', () => {
    it('Should validate obrigatory fields TRUE', async () => {
      const pdv = await PDV.build(PDVData);
      assert(await pdv.validate());
    });

    it('Empty obrigatory fields', async () => {
      const WrongData = {
        tradingName: 'Ourinhos Marketing',
        ownerName: 'Silva',
        document: '1234567890',
        coverageArea: {
          type: 'MultiPolygon',
          coordinates: [
            [
              [
                [
                  -49.36299,
                  -25.4515,
                ],
                [
                  -49.35334,
                  -25.45065,
                ],
              ],
            ],
          ],
        },
      };
      try {
        const wrongPDVData = await PDV.build(WrongData);
        assert(await wrongPDVData.validate());
      } catch (error) {
        assert(error.message === 'notNull Violation: pdv.document cannot be null');
      }
    });
  });
});
