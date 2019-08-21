import User from '.';

describe('user model test cases ', () => {
  it('should check for the user model functionality', () => {
    const userName = 'username';
    const avatarUrl = 'avatarUrl';
    const repoUrl = 'repoUrl';
    const user = new User(userName, avatarUrl, repoUrl);
    expect(user.userName).toBe(userName);
    expect(user.avatarUrl).toBe(avatarUrl);
    expect(user.repoUrl).toBe(repoUrl);
  });
});
