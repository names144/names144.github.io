import { getItem, setItem, ROOT_KEY } from '../storage';

describe('storage', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  describe('getItem', () => {
    test('Should get the item from storage', () => {
      (localStorage.getItem as jest.Mock).mockImplementationOnce(() => 'item');
      expect(getItem('someKey')).toEqual('item');
      expect((localStorage.getItem as jest.Mock)).toHaveBeenCalledWith(`${ROOT_KEY}:someKey`);
    });

    test('Should handle errors', () => {
      (localStorage.getItem as jest.Mock).mockImplementationOnce(() => { throw new Error('No localStorage'); });
      expect(getItem('someKey')).toBeNull();
      expect((localStorage.getItem as jest.Mock)).toHaveBeenCalledWith(`${ROOT_KEY}:someKey`);
    });
  });

  describe('setItem', () => {
    test('Should set the item in storage', () => {
      setItem('someKey', 'someVal');
      expect((localStorage.setItem as jest.Mock)).toHaveBeenCalledWith(`${ROOT_KEY}:someKey`, 'someVal');
    });

    test('Should handle errors', () => {
      (localStorage.setItem as jest.Mock).mockImplementationOnce(() => { throw new Error('No localStorage'); });
      setItem('someKey', 'someVal');
      expect((localStorage.setItem as jest.Mock)).toHaveBeenCalledWith(`${ROOT_KEY}:someKey`, 'someVal');
    });
  });
});
