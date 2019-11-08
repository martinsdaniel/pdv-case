import assert from 'assert';
import {
  describe,
  it,
  beforeEach,
  afterEach,
} from 'mocha';
import sinon from 'sinon';
import { ErrorTypes } from '../../../../app/lib/common/error_handler';

const { search: searchPDV } = require('../../../../app/pdv');

const db = require('../../../../app/lib/database/models');

const { pdv: PDVModel } = db;

const mySandBox = sinon.createSandbox();
describe('[Unit] Search PDV By Lat Long', () => {
  const req = {
    body: {
      lat: '-43.50404',
      long: '-22.768366',
    },
  };

  beforeEach(() => {
    mySandBox.stub(ErrorTypes, 'PDVError');
    mySandBox.stub(PDVModel, 'getPdvByLatLong');
  });

  afterEach(() => {
    mySandBox.restore();
  });

  describe('search by id', async () => {
    it('should return 200 when all required params is sent', async () => {
      const send = sinon.stub().returns({ pdv: 2342 });
      const status = sinon.stub().returns({ send });
      const next = sinon.stub().returns({ status: 200 });
      const res = { status };

      await PDVModel.getPdvByLatLong.returns({
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
                ],
              ],
            ],
          },
          address: {
            type: 'Point',
            coordinates: [
              -43.50404,
              -22.768366,
            ],
          },
          createdAt: '2019-10-25T19:14:34.765Z',
          updatedAt: '2019-10-25T19:14:34.765Z',
          deletedAt: null,
        },
      });

      await searchPDV(req, res, next);
      assert(send.calledWith());
    });
  });
});
