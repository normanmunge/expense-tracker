import { createTamagui, createTokens, createFont } from 'tamagui';
import { config } from '@tamagui/config/v2';
import { createInterFont } from '@tamagui/font-inter';
import { shorthands } from '@tamagui/shorthands';

const tokens = createTokens({
  ...config.tokens,
  color: {
    primary: '#FBFBFC',
    secondary: '#F5F5FD',
    accent: '#5350B2',
    background: '#FBFBFC',
    text: '#3F3F40',
    success: '#34C759',
    error: '#FF3B30',
    warning: '#FF9500',
    white: '#FFFFFF',
    gray100: '#F2F2F7',
    gray200: '#E5E5EA',
    gray300: '#D1D1D6',
    gray500: '#F3F3F3',
    gray900: '#888888',
    accent300: '#818CF8',
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

const poppinsFont = createFont({
  family: 'Poppins',
  size: {
    1: 12,
    2: 14,
    3: 16,
    4: 18,
    5: 20,
    6: 24,
    7: 28,
    8: 32,
    9: 36,
    10: 40,
    11: 48,
    12: 56,
    13: 64,
    14: 72,
  },lineHeight: {
    1: 16, 
    2: 20,
    3: 24,
    4: 28,
    5: 30,
    6: 36,
    7: 40,
    8: 44,
    9: 52,
    10: 56,
    11: 64,
    12: 72,
    13: 80,
    14: 88,
  },
  weight: {
    4: '400',
    5: '500',
    6: '600',
    7: '700',
  },
  letterSpacing: {
    4: 0,
    5: 0,
    6: -1,
    7: -1,
    8: -2,
    9: -3,
    10: -4,
  },
  face: {
    400: { normal: 'Poppins-Regular' },
    500: { normal: 'Poppins-Medium' },
    600: { normal: 'Poppins-SemiBold' },
    700: { normal: 'Poppins-Bold' },
  },
})

const interFont = createInterFont();

const tamaguiConfig = createTamagui({
  ...config,
  tokens,
  themes: {
    light: {
      background: tokens.color.background,
      color: tokens.color.text,
      primary: tokens.color.primary,
      secondary: tokens.color.secondary,
      gray900: tokens.color.gray900,
      accent: tokens.color.accent,
    },
    dark: {
      background: tokens.color.background,
      color: tokens.color.text,
      primary: tokens.color.primary,
      secondary: tokens.color.secondary,
      gray900: tokens.color.gray900,
      accent: tokens.color.accent,
    },
    light_Button: {
      background: tokens.color.accent,
      backgroundPress: tokens.color.accent + 'DD',
      color: tokens.color.text
    },
    dark_Button: {
      background: tokens.color.accent,
      backgroundPress: tokens.color.accent + 'DD',
      color: tokens.color.white
    },
    light_Text: {
      color: tokens.color.text
    },
    dark_Text: {
      color: tokens.color.text
    },
    light_Input: {
      color: tokens.color.text,
      borderColor: tokens.color.secondary,
      background: tokens.color.secondary,
    },
    dark_Input: {
      color: tokens.color.text,
      borderColor: tokens.color.secondary,
      background: tokens.color.secondary
    },
    light_SelectTrigger: {
      color: tokens.color.text,
      borderColor: tokens.color.secondary,
      background: tokens.color.secondary,
    },
    dark_SelectTrigger: {
      color: tokens.color.text,
      borderColor: tokens.color.secondary,
      background: tokens.color.secondary
    }
  },
  fonts: {
    heading: interFont,
    body: interFont,
    poppins: poppinsFont,
  },
  shorthands,
});

type Conf = typeof tamaguiConfig;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}

export type { Conf as AppConfig };
export { tamaguiConfig };

