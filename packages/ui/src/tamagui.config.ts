import { createTamagui } from 'tamagui';
import { createInterFont } from '@tamagui/font-inter';

import { config } from '@tamagui/config/v2';

const headingFont = createInterFont()
const bodyFont = createInterFont()

// const config = createTamagui({
//   fonts: {
//     heading: headingFont,
//     body: bodyFont,
//   },
//   themes: {
//     light: {
//       background: 'white',
//       foreground: 'black',
//     },
//     dark: {
//       background: 'black',
//       foreground: 'white',
//     },
//   }
// })

//export type AppConfig = typeof tamaguiConfig;

const tamaguiConfig = createTamagui(config)

type Conf = typeof tamaguiConfig;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}

export default tamaguiConfig;

