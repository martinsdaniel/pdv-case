import assert from 'assert';
import {
  describe,
  it,
  beforeEach,
  afterEach,
} from 'mocha';
import sinon from 'sinon';
import { ErrorTypes } from '../../../../app/lib/common/error_handler';

const { searchById } = require('../../../../app/pdv');
const { sequelize } = require('../../../../app/lib/database/models/index');

const PDVModel = sequelize.import('../../../../app/lib/database/models/pdv');
const mySandBox = sinon.createSandbox();

describe('[Unit] Search By ID', () => {
  const req = {
    params: {
      id: 'cd206cb0-8710-4033-8f55-68440f36cd47',
    },
  };

  beforeEach(() => {
    mySandBox.stub(ErrorTypes, 'PDVError');
    mySandBox.stub(PDVModel, 'findByPk');
  });

  afterEach(() => {
    mySandBox.restore();
  });

  describe('get pdv by id', async () => {
    it('should return 200 when all required params is sent', async () => {

      const returnData = `{
        pdvs: {
          id: 'cd206cb0-8710-4033-8f55-68440f36cd47',
          tradingName: 'Mcdonaudis',
          ownerName: 'Ronaldo',
          document: '53.859.522/0001-00',
          coverageArea: {
            type: 'MultiPolygon',
            coordinates: [
              [
                [
                  [
                    -43.50404,
                    -22.768366,
                  ],
                  [
                    -43.45254,
                    -22.775646,
                  ],
                ],
              ],
            ],
          },
          address: {
            type: 'Point',
            coordinates: [
              -43.432034,
              -22.747707,
            ],
          },
          createdAt: '2019-10-25T19:14:34.765Z',
          updatedAt: '2019-10-25T19:14:34.765Z',
          deletedAt: null,
        },
      }`;

      const send = sinon.stub().returns(returnData);
      const status = sinon.stub().returns({ send });
      const next = sinon.stub().returns({ status: 200 });
      const res = { status };

      await PDVModel.findByPk.returns(returnData);

      await searchById(req, res, next);
      assert(send.calledWith());
    });
  });
});
