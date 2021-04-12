import * as React from 'react';

import { CreateUseEffect } from 'types';
import { getItem, setItem } from 'utils/storage';

export enum Themes {
  LIGHT = 'light',
  DARK = 'dark',
}

const THEME_STORAGE_KEY = 'theme';

type ProviderProps = {
  theme: Themes,
  setTheme: (theme: Themes) => void,
}

const ThemeContext = React.createContext<Partial<ProviderProps>>({
  theme: Themes.LIGHT,
});

type UseEffectArgs = {
  setTheme: (theme: Themes) => void,
};

export const createEffect: CreateUseEffect<UseEffectArgs> = (args) => [
  () => {
    const theme = getItem(THEME_STORAGE_KEY) === Themes.DARK ? Themes.DARK : Themes.LIGHT;
    if (theme === Themes.DARK) {
      document.documentElement.classList.add(Themes.DARK);
    } else {
      document.documentElement.classList.remove(Themes.DARK);
    }
    args.setTheme(theme);
    setItem(THEME_STORAGE_KEY, theme);
  },
  Object.values(args),
];

type Props = React.PropsWithChildren<unknown>;

const ThemeProvider: React.FC<Props> = ({ children }: Props) => {
  const [theme, setTheme] = React.useState(Themes.LIGHT);

  const onSetTheme = React.useCallback((newTheme: Themes) => {
    setTheme(newTheme);
    setItem(THEME_STORAGE_KEY, newTheme);
    document.documentElement.classList.add(newTheme);
  }, [setTheme]);

  const themeValue = React.useMemo(() => ({
    theme,
    setTheme: onSetTheme,
  }), [theme, onSetTheme]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(...createEffect({
    setTheme,
  }));

  return (
    <ThemeContext.Provider value={themeValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ProviderProps => {
  const themeContext = React.useContext(ThemeContext) as ProviderProps;
  return themeContext;
};

export default ThemeProvider;
