import fn from '../src';

describe('api.basic', () => {
  test('case len === 1', () => {
    const res = fn('a');
    expect(res).toBe('a');
  });

  test('case <=2 parts', () => {
    const res1 = fn('a');
    const res2 = fn('a.b');
    const res3 = fn('a.b-c');
    expect(res1).toBe('a');
    expect(res2).toBe('a.b');
    expect(res3).toBe('a.bC');
  });

  test('case >2 parts', () => {
    const res1 = fn('a.b.c');
    const res2 = fn('a.b-c.d');
    const res3 = fn('a.b-c.d-ef');
    expect(res1).toBe('a.b.c');
    expect(res2).toBe('a.bC.d');
    expect(res3).toBe('a.bC.dEf');
  });

  test('underscore', () => {
    const res1 = fn('a.b_c');
    const res2 = fn('a.b-c.d_ef');
    const res3 = fn('a.b-c.d_ef-gh');
    expect(res1).toBe('a.bC');
    expect(res2).toBe('a.bC.dEf');
    expect(res3).toBe('a.bC.dEfGh');
  });
});
