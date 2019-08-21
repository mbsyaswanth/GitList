import UserStore from './index';
import UserServices from '../../services/UserServices/index.fixtures';
describe('User store test cases', () => {
  it('should check for the setUsers functionality', () => {
    const store = new UserStore();
    const services = new UserServices();
    expect(store.users).toHaveLength(0);
    store.setUsers(services.getUsers());
    expect(store.users).toHaveLength(2);
  });
});
