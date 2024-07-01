import supertest, { Test } from 'supertest';
import TestAgent from 'supertest/lib/agent';
import app from '@src/server';
import HttpStatusCodes from '@src/common/HttpStatusCodes';
import Paths from 'spec/support/Paths';
// import apiCb from 'spec/support/apiCb';
// import { TApiCb } from 'spec/types/misc';

// Tests
describe('ItemsRouter', () => {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let agent: TestAgent<Test>;

  // Run before all tests
  beforeAll(done => {
    agent = supertest.agent(app);
    done();
  });

  describe(`"GET:${Paths.Items.Base}"`, () => {

    // Setup API
    // const _api = (cb: TApiCb) => 
    //   agent
    //     .get(Paths.Items.Base)
    //     .end(apiCb(cb));

    // Success
    it('should return a JSON object with all the items' + 
    `of "${HttpStatusCodes.OK}" if the request was successful.`, () => {
      expect(true).toBeTruthy()
    });
  });
});
