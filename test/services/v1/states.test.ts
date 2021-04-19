import assert from 'assert';
import app from '../../../src/app';

describe('\'v1/states\' service', () => {
  it('registered the service', () => {
    const service = app.service('v1/states');

    assert.ok(service, 'Registered the service');
  });
});
