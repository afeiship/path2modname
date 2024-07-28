import fn from '../src';

describe('api.basic', () => {
  test('case len === 1', () => {
    expect(fn('a')).toBe('a');
    expect(fn('my-school')).toBe('mySchool');
    expect(fn('my_school')).toBe('mySchool');
  });

  test('case <=2 parts', () => {
    const res1 = fn('a');
    const res1_1 = fn('abc');
    const res2 = fn('user.user-info.profile');
    expect(res1).toBe('a');
    expect(res1_1).toBe('abc');
    expect(res2).toBe('user.userInfoProfile');
  });

  test('case >2 parts', () => {
    const res1 = fn('a.b.c');
    const res2 = fn('a.my-school.select-course');
    const res3 = fn('a.project.compare');
    const res4 = fn('a.user_info.profile');
    expect(res1).toBe('a.bC');
    expect(res2).toBe('a.mySchoolSelectCourse');
    expect(res3).toBe('a.projectCompare');
    expect(res4).toBe('a.userInfoProfile');
  });
});
