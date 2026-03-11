// Font configuration using CSS variables
// Google Fonts are loaded via @import in globals.css or link tags
// This provides the CSS variable names for consistency

export const fontVariables = [
  "--font-display",
  "--font-script",
  "--font-body",
  "--font-mono",
] as const;

// Font class string to apply to html element
export const fontClassName = "";

// Individual font variable references for backwards compatibility
export const bebasNeue = { variable: "--font-display" };
export const caveat = { variable: "--font-script" };
export const outfit = { variable: "--font-body" };
export const jetbrainsMono = { variable: "--font-mono" };
