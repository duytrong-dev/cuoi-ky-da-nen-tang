/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from 'react-native';

const tintColorLight = '#4392F9';  // Primary blue
const tintColorDark = '#4392F9';   // Primary blue

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    // Main theme colors
    primary: '#4392F9',           // Xanh dương chính
    primaryLight: '#CFE2FC',      // Xanh dương nhạt (gradient from)
    primaryDark: '#4392F9',       // Xanh dương đậm (gradient to)
    secondary: '#F83758',         // Đỏ/hồng chính
    secondaryLight: '#F8BCC6',    // Đỏ/hồng nhạt (gradient from)
    secondaryDark: '#F83758',     // Đỏ/hồng đậm (gradient to)
    // Utility colors
    surface: '#F5F5F5',
    shoppeeColor: '#EE4D2D',
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    // Main theme colors
    primary: '#4392F9',           // Xanh dương chính
    primaryLight: '#CFE2FC',      // Xanh dương nhạt (gradient from)
    primaryDark: '#4392F9',       // Xanh dương đậm (gradient to)
    secondary: '#F83758',         // Đỏ/hồng chính
    secondaryLight: '#F8BCC6',    // Đỏ/hồng nhạt (gradient from)
    secondaryDark: '#F83758',     // Đỏ/hồng đậm (gradient to)
    // Utility colors
    surface: '#000000',
    shoppeeColor: '#EE4D2D',
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
