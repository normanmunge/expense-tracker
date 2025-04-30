import { createTamagui, createTokens } from 'tamagui';
import { config } from '@tamagui/config/v2';
import { createInterFont } from '@tamagui/font-inter';
import { shorthands } from '@tamagui/shorthands';

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
    //...config.tokens.space,
    // true: 1,
    sm: 15,
    md: 20, 
    lg: 25,
    true: 15
  },
  size: {
    //...config.tokens.size,
    // true: 1,
    sm: 38,
    md: 46,
    lg: 60,
    true: 38
  },
  radius: {
    //...config.tokens.radius,
    // true: 1,
    sm: 4,
    md: 8,
    lg: 12,
    true: 4
  },
  zIndex: {
    ...config.tokens.zIndex,
    true: 1,
  },
});

const interFont = createInterFont();

const tamaguiConfig = createTamagui({
  ...config,
  tokens,
  themes: {
    light: {
      background: tokens.color.background,
      color: tokens.color.background,
      primary: tokens.color.primary,
      secondary: tokens.color.secondary,
      gray900: tokens.color.gray900,
    },
    dark: {
      background: tokens.color.background,
      color: tokens.color.white,
      primary: tokens.color.primary,
      secondary: tokens.color.secondary,
      gray900: tokens.color.gray900,
    },
    light_Button: {
      background: tokens.color.background,
      backgroundPress: tokens.color.background,
      color: tokens.color.white
    },
    dark_Button: {
      background: tokens.color.white,
      backgroundPress: tokens.color.white,
      color: tokens.color.background
    },
    light_Text: {
      color: tokens.color.background
    },
    dark_Text: {
      color: tokens.color.white
    }
  },
  fonts: {
    heading: interFont,
    body: interFont,
  },
  shorthands,
});

type Conf = typeof tamaguiConfig;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}

export type { Conf as AppConfig };
export { tamaguiConfig };

