export const ROOT_KEY = 'names144';

export const setItem = (key: string, item: string): void => {
  try {
    localStorage.setItem(`${ROOT_KEY}:${key}`, item);
  } catch (err) {
    console.warn('Unable to save to storage', key);
  }
};

export const getItem = (key: string): string | null => {
  let item = null;
  try {
    item = localStorage.getItem(`${ROOT_KEY}:${key}`);
  } catch (err) {
    console.warn('Unable to get from storage', key);
  }
  return item;
};
