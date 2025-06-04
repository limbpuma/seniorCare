/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      // PHASE 3: Enhanced Design Token System
      colors: {
        // Base Colors
        black: "#161616",
        white: "#ffffff",
        
        // Primary Brand Colors (WCAG AA Compliant)
        primary: {
          50: "#f0f7ff",
          100: "#e0efff", 
          200: "#baddff",
          300: "#7cc0ff",
          400: "#369eff",
          500: "#0c82ff",
          600: "#0066cc",
          700: "#004499",
          800: "#083f73",
          900: "#084487",    // Main brand color
          950: "#002b5c"
        },
        
        // Secondary Colors
        secondary: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a"
        },
        
        // Accent Colors
        accent: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12"
        },
        
        // Semantic Colors
        success: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d"
        },
        warning: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309"
        },
        error: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c"
        },
        
        // Legacy Colors (Maintained for backward compatibility)
        "light-gray": "#666666",
        "gray-blue": "#4a5c6a",
        "soft-blue": "#3366aa",
        "deep-blue": "#084487",
        "soft-orange": "#E6A572",
        "soft-beige": "#f5e6d3",
        "primary-dark": "#004A61",
        
        // Semantic Text Colors
        "text-primary": "#161616",
        "text-secondary": "#666666",
        "text-muted": "#94a3b8",
        "text-inverse": "#ffffff",
        
        // UI Surface Colors
        "surface-primary": "#ffffff",
        "surface-secondary": "#f8fafc",
        "surface-tertiary": "#f1f5f9",
        "border-primary": "#e2e8f0",
        "border-secondary": "#cbd5e1",
        "border-focus": "#3b82f6"
      },
      
      // Enhanced Spacing System
      spacing: {
        // Micro spacing
        "0.5": "0.125rem",   // 2px
        "1.5": "0.375rem",   // 6px
        "2.5": "0.625rem",   // 10px
        "3.5": "0.875rem",   // 14px
        
        // Component spacing
        "18": "4.5rem",      // 72px
        "22": "5.5rem",      // 88px
        "26": "6.5rem",      // 104px
        "30": "7.5rem",      // 120px
        
        // Layout spacing
        "128": "32rem",      // 512px
        "144": "36rem",      // 576px
        "160": "40rem",      // 640px
        "176": "44rem",      // 704px
        "192": "48rem",      // 768px
        
        // Touch targets (minimum 44px for accessibility)
        "touch-sm": "2.75rem",   // 44px
        "touch-md": "3rem",      // 48px
        "touch-lg": "3.5rem",    // 56px
        "touch-xl": "4rem"       // 64px
      },
      
      // Enhanced Border Radius System
      borderRadius: {
        "xs": "0.125rem",    // 2px
        "sm": "0.25rem",     // 4px
        "default": "0.375rem", // 6px
        "md": "0.5rem",      // 8px
        "lg": "0.75rem",     // 12px
        "xl": "1rem",        // 16px
        "2xl": "1.5rem",     // 24px
        "3xl": "2rem"        // 32px
      },
      
      // Enhanced Shadow System
      boxShadow: {
        // Subtle shadows
        "xs": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        "sm": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        "md": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "lg": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        "xl": "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        
        // Focus shadows
        "focus": "0 0 0 3px rgba(59, 130, 246, 0.5)",
        "focus-primary": "0 0 0 3px rgba(8, 68, 135, 0.3)",
        
        // Component specific shadows
        "card": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "button": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        "dropdown": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        
        // Legacy shadows (maintained for compatibility)
        "soft": "0 4px 6px rgba(0, 0, 0, 0.1)",
        "medium": "0 5px 15px rgba(0, 0, 0, 0.15)",
        "hard": "0 10px 20px rgba(0, 0, 0, 0.2)",
        "custom-light": "0 4px 6px rgba(0, 0, 0, 0.1)",
        "custom-heavy": "0 8px 10px rgba(0, 0, 0, 0.15)"
      },
      
      // Enhanced Animation System
      transitionProperty: {
        "colors": "background-color, border-color, color, fill, stroke",
        "opacity": "opacity",
        "shadow": "box-shadow",
        "transform": "transform",
        "size": "width, height",
        "spacing": "margin, padding",
        "layout": "width, height, margin, padding, border"
      },
      
      transitionDuration: {
        "150": "150ms",
        "250": "250ms",
        "350": "350ms",
        "400": "400ms",
        "450": "450ms"
      },
      
      transitionTimingFunction: {
        "ease-in-out-soft": "cubic-bezier(0.4, 0, 0.2, 1)",
        "ease-bounce": "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
      },
      
      // Typography Enhancements
      letterSpacing: {
        "tighter": "-0.025em",
        "tight": "-0.0125em",
        "normal": "0em",
        "wide": "0.025em",
        "wider": "0.05em",
        "widest": "0.1em"
      },
      
      // Z-index System
      zIndex: {
        "auto": "auto",
        "0": "0",
        "10": "10",
        "20": "20",
        "30": "30",
        "40": "40",
        "50": "50",
        "tooltip": "1000",
        "modal": "1010",
        "popover": "1020",
        "dropdown": "1030",
        "sticky": "1040",
        "fixed": "1050",
        "overlay": "1060"
      }
    },
    fontFamily: {
      "ag-h1": ["Montserrat", "sans-serif"],
      "ag-h2": ["Montserrat", "sans-serif"],
      "ag-h3": ["Montserrat", "sans-serif"],
      "ag-h4": ["Montserrat", "sans-serif"],
      "ag-h5": ["Montserrat", "sans-serif"],
      "ag-h6": ["Montserrat", "sans-serif"],
      "ag-sub-heading": ["Montserrat", "sans-serif"],
      "ag-button-text": ["Montserrat", "sans-serif"],
      "ag-body-text": ["Montserrat", "sans-serif"],
      "ag-testimonial-text": ["Montserrat", "sans-serif"],
      "ag-list-text": ["Montserrat", "sans-serif"],
      "ag-404-text": ["Montserrat", "sans-serif"],
    },
    fontSize: {
      "ag-h1": ["128px", { fontWeight: "700", lineHeight: "auto" }], // Bold
      "ag-h2": ["64px", { fontWeight: "700", lineHeight: "74px" }], // Bold
      "ag-h3": ["48px", { fontWeight: "700", lineHeight: "58px" }], // Bold
      "ag-h4": ["36px", { fontWeight: "700", lineHeight: "46px" }], // Bold
      "ag-h5": ["24px", { fontWeight: "700", lineHeight: "34px" }], // Bold
      "ag-h6": ["28px", { fontWeight: "700", lineHeight: "28px" }], // Bold
      "ag-sub-heading": ["18px", { fontWeight: "500", lineHeight: "auto" }], // Medium
      "ag-button-text": ["16px", { fontWeight: "600", lineHeight: "auto" }], // Semibold
      "ag-body-text": ["16px", { fontWeight: "500", lineHeight: "26px" }], // Medium
      "ag-testimonial-text": [
        "21px",
        { fontWeight: "600", fontStyle: "italic", lineHeight: "31px" },
      ], // Semibold Italic
      "ag-list-text": ["16px", { fontWeight: "500", lineHeight: "46px" }], // Medium
      "ag-404-text": ["269px", { fontWeight: "700", lineHeight: "auto" }], // Bold
    },
  },

  plugins: [require("@tailwindcss/typography"), require("flowbite/plugin")],
};
