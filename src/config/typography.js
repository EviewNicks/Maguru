// /config/typography.js
export default {
  fontFamily: {
    inter: ['Inter', 'sans-serif'],
    playfair: ['Playfair Display', 'serif'],
    fira: ['Fira Code', 'monospace'],
  },
  fontSize: {
    'hd-3xl': {
      DEFAULT: ['3rem', '3.6rem'], // Default (120%)
      sm: ['2.25rem', '3rem'], // Small screens
      md: ['3rem', '3.6rem'], // Medium screens (default)
      lg: ['3.25rem', '3.9rem'], // Large screens
      xl: ['3.5rem', '4.1rem'], // Extra large screens
      '2xl': ['4rem', '4.8rem'], // 2XL screens
    },
    'hd-2xl': {
      DEFAULT: ['2rem', '2.625rem'], // Default (131.25%)
      sm: ['1.75rem', '2.5rem'], // Small screens
      md: ['2rem', '2.625rem'], // Medium screens (default)
      lg: ['2.25rem', '2.875rem'], // Large screens
      xl: ['2.5rem', '3rem'], // Extra large screens
      '2xl': ['2.75rem', '3.25rem'], // 2XL screens
    },
    'hd-xl': {
      DEFAULT: ['1.5rem', '2rem'], // Default (133.333%)
      sm: ['1.25rem', '1.75rem'], // Small screens
      md: ['1.5rem', '2rem'], // Medium screens (default)
      lg: ['1.75rem', '2.25rem'], // Large screens
      xl: ['2rem', '2.5rem'], // Extra large screens
      '2xl': ['2.25rem', '2.75rem'], // 2XL screens
    },
    'hd-lg': {
      DEFAULT: ['1.25rem', '1.75rem'], // Default (140%)
      sm: ['1rem', '1.5rem'], // Small screens
      md: ['1.25rem', '1.75rem'], // Medium screens (default)
      lg: ['1.5rem', '2rem'], // Large screens
      xl: ['1.75rem', '2.25rem'], // Extra large screens
      '2xl': ['2rem', '2.5rem'], // 2XL screens
    },
    'hd-md': {
      DEFAULT: ['1rem', '1.5rem'], // Default (150%)
      sm: ['0.875rem', '1.375rem'], // Small screens
      md: ['1rem', '1.5rem'], // Medium screens (default)
      lg: ['1.125rem', '1.625rem'], // Large screens
      xl: ['1.25rem', '1.75rem'], // Extra large screens
      '2xl': ['1.5rem', '2rem'], // 2XL screens
    },
    'hd-sm': {
      DEFAULT: ['0.875rem', '1.25rem'], // Default (142.857%)
      sm: ['0.75rem', '1.125rem'], // Small screens
      md: ['0.875rem', '1.25rem'], // Medium screens (default)
      lg: ['1rem', '1.375rem'], // Large screens
      xl: ['1.125rem', '1.5rem'], // Extra large screens
      '2xl': ['1.25rem', '1.625rem'], // 2XL screens
    },

    'bd-lg': {
      DEFAULT: ['1.125rem', '1.75rem'], // Default (155.556%)
      sm: ['1rem', '1.625rem'], // Small screens
      md: ['1.125rem', '1.75rem'], // Medium screens (default)
      lg: ['1.25rem', '1.875rem'], // Large screens
      xl: ['1.375rem', '2rem'], // Extra large screens
      '2xl': ['1.5rem', '2.25rem'], // 2XL screens
    },
    'bd-md': {
      DEFAULT: ['1rem', '1.625rem'], // Default (162.5%)
      sm: ['0.875rem', '1.375rem'], // Small screens
      md: ['1rem', '1.625rem'], // Medium screens (default)
      lg: ['1.125rem', '1.75rem'], // Large screens
      xl: ['1.25rem', '1.875rem'], // Extra large screens
      '2xl': ['1.375rem', '2rem'], // 2XL screens
    },
    'bd-sm': {
      DEFAULT: ['0.875rem', '1.375rem'], // Default (157.143%)
      sm: ['0.75rem', '1.125rem'], // Small screens
      md: ['0.875rem', '1.375rem'], // Medium screens (default)
      lg: ['1rem', '1.5rem'], // Large screens
      xl: ['1.125rem', '1.625rem'], // Extra large screens
      '2xl': ['1.25rem', '1.75rem'], // 2XL screens
    },

    // SubText
    'stx-md': {
      DEFAULT: ['0.875rem', '1.375rem'], // Default (157.143%)
      sm: ['0.75rem', '1.125rem'], // Small screens
      md: ['0.875rem', '1.375rem'], // Medium screens (default)
      lg: ['1rem', '1.5rem'], // Large screens
      xl: ['1.125rem', '1.625rem'], // Extra large screens
      '2xl': ['1.25rem', '1.75rem'], // 2XL screens
    },
    'stx-sm': {
      DEFAULT: ['0.75rem', '1.125rem'], // Default (150%)
      sm: ['0.625rem', '1rem'], // Small screens
      md: ['0.75rem', '1.125rem'], // Medium screens (default)
      lg: ['0.875rem', '1.25rem'], // Large screens
      xl: ['1rem', '1.375rem'], // Extra large screens
      '2xl': ['1.125rem', '1.5rem'], // 2XL screens
    },

    // Caption
    'cp-md': {
      DEFAULT: ['0.75rem', '1.125rem'], // Default (150%)
      sm: ['0.625rem', '1rem'], // Small screens
      md: ['0.75rem', '1.125rem'], // Medium screens (default)
      lg: ['0.875rem', '1.375rem'], // Large screens
      xl: ['1rem', '1.5rem'], // Extra large screens
      '2xl': ['1.125rem', '1.625rem'], // 2XL screens
    },
    'cp-sm': {
      DEFAULT: ['0.625rem', '1rem'], // Default (160%)
      sm: ['0.5rem', '0.875rem'], // Small screens
      md: ['0.625rem', '1rem'], // Medium screens (default)
      lg: ['0.75rem', '1.125rem'], // Large screens
      xl: ['0.875rem', '1.375rem'], // Extra large screens
      '2xl': ['1rem', '1.5rem'], // 2XL screens
    },

    // Overline
    overline: {
      DEFAULT: ['0.625rem', '1rem'], // Default (160%)
      sm: ['0.5rem', '0.875rem'], // Small screens
      md: ['0.625rem', '1rem'], // Medium screens (default)
      lg: ['0.75rem', '1.125rem'], // Large screens
      xl: ['0.875rem', '1.375rem'], // Extra large screens
      '2xl': ['1rem', '1.5rem'], // 2XL screens
    },

    // Interactive
    'int-default': {
      DEFAULT: ['1rem', '1.5rem'], // Default (150%)
      sm: ['0.875rem', '1.375rem'], // Small screens
      md: ['1rem', '1.5rem'], // Medium screens (default)
      lg: ['1.125rem', '1.625rem'], // Large screens
      xl: ['1.25rem', '1.75rem'], // Extra large screens
      '2xl': ['1.375rem', '1.875rem'], // 2XL screens
    },
    'int-hover': {
      DEFAULT: ['1rem', '1.5rem'], // Default (150%)
      sm: ['0.875rem', '1.375rem'], // Small screens
      md: ['1rem', '1.5rem'], // Medium screens (default)
      lg: ['1.125rem', '1.625rem'], // Large screens
      xl: ['1.25rem', '1.75rem'], // Extra large screens
      '2xl': ['1.375rem', '1.875rem'], // 2XL screens
    },
    'int-disabled': {
      DEFAULT: ['1rem', '1.5rem'], // Default (150%)
      sm: ['0.875rem', '1.375rem'], // Small screens
      md: ['1rem', '1.5rem'], // Medium screens (default)
      lg: ['1.125rem', '1.625rem'], // Large screens
      xl: ['1.25rem', '1.75rem'], // Extra large screens
      '2xl': ['1.375rem', '1.875rem'], // 2XL screens
    },

    // Placeholder
    'ph-md': {
      DEFAULT: ['0.875rem', '1.25rem'], // Default (142.857%)
      sm: ['0.75rem', '1.125rem'], // Small screens
      md: ['0.875rem', '1.25rem'], // Medium screens (default)
      lg: ['1rem', '1.375rem'], // Large screens
      xl: ['1.125rem', '1.5rem'], // Extra large screens
      '2xl': ['1.25rem', '1.625rem'], // 2XL screens
    },
    'ph-sm': {
      DEFAULT: ['0.75rem', '1.125rem'], // Default (150%)
      sm: ['0.625rem', '1rem'], // Small screens
      md: ['0.75rem', '1.125rem'], // Medium screens (default)
      lg: ['0.875rem', '1.25rem'], // Large screens
      xl: ['1rem', '1.375rem'], // Extra large screens
      '2xl': ['1.125rem', '1.5rem'], // 2XL screens
    },

    // Footer
    footer: {
      DEFAULT: ['0.75rem', '1.125rem'], // Default (150%)
      sm: ['0.625rem', '1rem'], // Small screens
      md: ['0.75rem', '1.125rem'], // Medium screens (default)
      lg: ['0.875rem', '1.25rem'], // Large screens
      xl: ['1rem', '1.375rem'], // Extra large screens
      '2xl': ['1.125rem', '1.5rem'], // 2XL screens
    },

    // Code
    'code-snippet': {
      DEFAULT: ['0.875rem', '1.25rem'], // Default (142.857%)
      sm: ['0.75rem', '1.125rem'], // Small screens
      md: ['0.875rem', '1.25rem'], // Medium screens (default)
      lg: ['1rem', '1.375rem'], // Large screens
      xl: ['1.125rem', '1.5rem'], // Extra large screens
      '2xl': ['1.25rem', '1.625rem'], // 2XL screens
    },
    'code-block': {
      DEFAULT: ['1rem', '1.5rem'], // Default (150%)
      sm: ['0.875rem', '1.25rem'], // Small screens
      md: ['1rem', '1.5rem'], // Medium screens (default)
      lg: ['1.125rem', '1.625rem'], // Large screens
      xl: ['1.25rem', '1.75rem'], // Extra large screens
      '2xl': ['1.375rem', '1.875rem'], // 2XL screens
    },
  },

  fontWeight: {
    normal: 400,
    'medium-fira': 450, // Custom weight for Fira Code
    medium: 500,
    semibold: 600,
    bold: 700,
  },
};
