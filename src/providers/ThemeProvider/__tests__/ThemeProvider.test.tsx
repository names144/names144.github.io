import * as React from 'react';
import renderer from 'react-test-renderer';

import {getItem as getItemMock, setItem as setItemMock} from 'utils/storage';

import ThemeProvider, { useTheme, Themes } from '../ThemeProvider';

jest.mock('utils/storage');

const getItem = getItemMock as unknown as jest.Mock<typeof getItemMock>;
const setItem = setItemMock as unknown as jest.Mock<typeof getItemMock>;

const ChildComponent = ({ setThemeCb }: any) => {
  const { theme, setTheme } = useTheme();
  return <div
    data-theme={theme}
    onClick={setThemeCb ? setThemeCb.bind(null, setTheme) : undefined} />;
};

describe('ThemeProvider', () => {
  test('Should provide the theme, fresh page no storage', () => {
    const rendered = renderer.create((
      <ThemeProvider>
        <ChildComponent />
      </ThemeProvider>
    ));

    renderer.act(() => {
      rendered.update((
        <ThemeProvider>
          <ChildComponent />
        </ThemeProvider>
      ));
    });

    const { root } = rendered;
    expect(root).toBeDefined();
    expect(root.findByType('div').props['data-theme']).toEqual(Themes.LIGHT);
    expect(getItem).toHaveBeenCalled();
    expect(setItem).toHaveBeenCalledWith(expect.any(String), Themes.LIGHT);
  });

  test('Should provide the theme from storage', () => {
    getItem.mockImplementationOnce((() => Themes.DARK) as any);

    const rendered = renderer.create((
      <ThemeProvider>
        <ChildComponent />
      </ThemeProvider>
    ));

    renderer.act(() => {
      rendered.update((
        <ThemeProvider>
          <ChildComponent />
        </ThemeProvider>
      ));
    });

    const { root } = rendered;
    expect(root).toBeDefined();
    expect(root.findByType('div').props['data-theme']).toEqual(Themes.DARK);
    expect(getItem).toHaveBeenCalled();
    expect(setItem).toHaveBeenCalledWith(expect.any(String), Themes.DARK);
  });

  test('Should set the them from the hook', () => {
    const themeSetter = (setTheme: any) => {
      setTheme(Themes.DARK);
    };

    const rendered = renderer.create((
      <ThemeProvider>
        <ChildComponent />
      </ThemeProvider>
    ));

    renderer.act(() => {
      rendered.update((
        <ThemeProvider>
          <ChildComponent setThemeCb={themeSetter} />
        </ThemeProvider>
      ));
    });

    const { root } = rendered;
    expect(root).toBeDefined();
    expect(root.findByType('div').props['data-theme']).toEqual(Themes.LIGHT);
    expect(setItem).toHaveBeenCalledWith(expect.any(String), Themes.LIGHT);

    renderer.act(() => {
      root.findByType('div').props.onClick();
    });
    expect(root.findByType('div').props['data-theme']).toEqual(Themes.DARK);
    expect(setItem).toHaveBeenCalledWith(expect.any(String), Themes.DARK);
  });
});
