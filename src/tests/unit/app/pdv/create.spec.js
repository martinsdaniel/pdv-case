import assert from 'assert';
import {
  describe,
  it,
  beforeEach,
  afterEach,
} from 'mocha';
import sinon from 'sinon';
import { ErrorTypes } from '../../../../app/lib/common/error_handler';

const { create: createPDV } = require('../../../../app/pdv');

const db = require('../../../../app/lib/database/models');

const { pdv: PDVModel } = db;

const mySandBox = sinon.createSandbox();
describe('[Unit] Create PDV', () => {
  const req = {
    body: {
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
    },
  };

  beforeEach(() => {
    mySandBox.stub(ErrorTypes, 'PDVError');
    mySandBox.stub(PDVModel, 'create');
  });

  afterEach(() => {
    mySandBox.restore();
  });

  describe('PDV creation', async () => {
    it('should return 200 when all required params is sent', async () => {
      const send = sinon.stub().returns({ pdv: 2342 });
      const status = sinon.stub().returns({ send });
      const next = sinon.stub().returns({ status: 200 });
      const res = { status };

      await PDVModel.create.returns([{
        id: '98f0643f-20bc-474c-8e47-0a218d5d82d7',
      }, false]);

      await createPDV(req, res, next);
      assert(send.calledWith());
    });
  });
});
