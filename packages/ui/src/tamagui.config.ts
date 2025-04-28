import { createTamagui, createTokens } from 'tamagui';
import { config } from '@tamagui/config/v2';

const tokens = createTokens({
  ...config.tokens,
  color: {
    primary: '#0056B3',
    secondary: '#FFE81F',
    background: '#000000',
    text: '#3F3F3F',
    success: '#34C759',
    error: '#FF3B30',
    warning: '#FF9500',
    white: '#FFFFFF',
    gray100: '#F2F2F7',
    gray200: '#E5E5EA',
    gray300: '#D1D1D6',
    gray500: '#F3F3F3',
    gray900: '#888888',
  },
  space: {
    ...config.tokens.space,
    true: 1,
  },
  size: {
    ...config.tokens.size,
    true: 1,
  },
  radius: {
    ...config.tokens.radius,
    true: 1,
  },
  zIndex: {
    ...config.tokens.zIndex,
    true: 1,
  },
});

const tamaguiConfig = createTamagui({
  ...config,
  tokens,
  themes: {
    light: {
      background: 'color.$background',
      // color: '$background',
      // primary: '$secondary',
    },
    dark: {
      background: 'color.$background',
      // color: '$text',
      // primary: '$primary'
    },
  },
});

type Conf = typeof tamaguiConfig;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}

export default tamaguiConfig;

