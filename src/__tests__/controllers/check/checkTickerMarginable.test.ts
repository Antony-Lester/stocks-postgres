// eslint-disable-next-line node/no-unpublished-import, node/no-extraneous-import
import {describe, expect, test} from '@jest/globals';

import db from '../../../db/connection';

import {tickersData} from '../../../db/data/development-data';
import createTickersTable from '../../../controllers/create/createTickersTable';
import populateTickersTable from '../../../controllers/populate/populateTickersTable';
import dropTable from '../../../controllers/drop/dropTable';
import checkTickerMarginable from '../../../controllers/check/checkTickerMarginable';

describe('check Ticker Marginable', () => {
  test('returns Marginable bool if valid', async () => {
    const client = await db.connect();
    try {
      client.query('BEGIN');

      await createTickersTable();
      await populateTickersTable(tickersData);
      await checkTickerMarginable('CAJPY').then(data => {
        expect(data).toBe(false);
      });
      await dropTable('tickers');
      client.query('ROLLBACK');
    } finally {
      client.release();
    }
  }, 10000);
  test('returns undefined if not valid', async () => {
    const client = await db.connect();
    try {
      client.query('BEGIN');

      await createTickersTable();
      await populateTickersTable(tickersData);
      await checkTickerMarginable('TEST').then(data => {
        expect(data).toBe(undefined);
      });
      await dropTable('tickers');
      client.query('ROLLBACK');
    } finally {
      client.release();
    }
  }, 10000);
});
