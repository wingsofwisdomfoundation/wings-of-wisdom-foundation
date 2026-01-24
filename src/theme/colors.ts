/**
 * Theme Color Configuration
 * Central location for all project colors
 * Primary theme color: #2596BE (Steel Blue / Ocean Blue)
 * Color Palette: Blue monochromatic theme
 */

export const themeColors = {
    // Primary Color Palette - Steel Blue / Ocean Blue (#2596BE)
    primary: {
        main: '#2596BE',        // HSL: 199 65% 44% - Steel Blue / Ocean Blue
        light: '#38BDF8',       // HSL: 199 95% 60% - Sky Blue (Accent)
        lighter: '#7DD3FC',     // HSL: 199 95% 74% - Lighter Sky Blue
        dark: '#1E7A9F',        // HSL: 199 65% 37% - Darker Ocean Blue
        darker: '#175F80',      // HSL: 199 65% 30% - Deep Ocean Blue
    },

    // Background Colors
    background: {
        main: '#F5F9FC',        // HSL: 204 60% 98% - Alice White
        light: '#FFFFFF',       // HSL: 0 0% 100% - Pure White
        dark: '#E8F2F7',        // HSL: 204 40% 93% - Slightly darker Alice
    },

    // Text Colors
    text: {
        main: '#1F2933',        // HSL: 209 29% 15% - Gunmetal / Charcoal Navy
        light: '#52606D',       // HSL: 209 15% 37% - Medium Gray
        lighter: '#7B8794',     // HSL: 209 10% 53% - Light Gray
        dark: '#0F1419',        // HSL: 209 38% 8% - Very Dark
    },

    // Accent Color Palette - Sky Blue (#38BDF8)
    accent: {
        main: '#38BDF8',        // HSL: 199 95% 60% - Sky Blue
        light: '#7DD3FC',       // HSL: 199 95% 74% - Light Sky Blue
        dark: '#0EA5E9',        // HSL: 199 89% 48% - Darker Sky Blue
    },

    // Border/Muted - Light Blue Gray (#CBD5E1)
    border: {
        main: '#CBD5E1',        // HSL: 214 20% 84% - Light Blue Gray
        light: '#E2E8F0',       // HSL: 214 32% 91% - Lighter Blue Gray
        dark: '#94A3B8',        // HSL: 215 16% 65% - Darker Blue Gray
    },

    // Secondary Color Palette - Darker Blue (replaces orange)
    secondary: {
        main: '#1E7A9F',        // HSL: 199 65% 37% - Darker Ocean Blue
        light: '#2596BE',       // HSL: 199 65% 44% - Steel Blue
        dark: '#175F80',        // HSL: 199 65% 30% - Deep Ocean Blue
    },

    // Success - Light Blue (replaces green)
    success: {
        main: '#38BDF8',        // HSL: 199 95% 60% - Sky Blue
        light: '#7DD3FC',       // HSL: 199 95% 74% - Light Sky Blue
        dark: '#0EA5E9',        // HSL: 199 89% 48% - Darker Sky Blue
    },

    // Warning - Soft Gold Yellow (Blue-friendly, non-orange)
    warning: {
        main: '#14B8A6',        // HSL: 173 80% 40% - Teal
        light: '#5EEAD4',       // HSL: 170 76% 64% - Light Teal
        dark: '#0F766E',        // HSL: 174 79% 26% - Deep Teal
    },


    // Error/Destructive - Red (keeping for errors)
    error: {
        main: '#EF4444',        // HSL: 0 72% 60% - Red
        light: '#F87171',       // HSL: 0 72% 70% - Light Red
        dark: '#DC2626',        // HSL: 0 72% 50% - Dark Red
    },

    // Neutral Palette (based on the color scheme)
    neutral: {
        50: '#F5F9FC',          // HSL: 204 60% 98% - Alice White
        100: '#E8F2F7',         // HSL: 204 40% 93%
        200: '#E2E8F0',         // HSL: 214 32% 91%
        300: '#CBD5E1',         // HSL: 214 20% 84% - Light Blue Gray
        400: '#94A3B8',         // HSL: 215 16% 65%
        500: '#64748B',         // HSL: 215 16% 47%
        600: '#475569',         // HSL: 215 19% 35%
        700: '#334155',         // HSL: 217 25% 27%
        800: '#1E293B',         // HSL: 217 33% 17%
        900: '#1F2933',         // HSL: 209 29% 15% - Gunmetal / Charcoal Navy
    },

    // Gradients - All blue based
    gradients: {
        primary: 'linear-gradient(135deg, #2596BE 0%, #1E7A9F 100%)',
        primaryLight: 'linear-gradient(135deg, #38BDF8 0%, #2596BE 100%)',
        accent: 'linear-gradient(135deg, #7DD3FC 0%, #38BDF8 100%)',
        ocean: 'linear-gradient(135deg, #2596BE 0%, #38BDF8 50%, #7DD3FC 100%)',
        deep: 'linear-gradient(135deg, #175F80 0%, #2596BE 100%)',
    },
} as const;

export type ThemeColors = typeof themeColors;
