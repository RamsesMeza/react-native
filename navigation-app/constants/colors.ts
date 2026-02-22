export enum Colors {
  primary = "primary",
  secondary = "secondary",
  success = "success",
  warning = "warning",

  error = "error",
  info = "info",
}

export const colors = {
  primary: {
    main: "#2563EB",
    light: "#60A5FA",
    dark: "#1E40AF",
    contrastText: "#FFFFFF",
  },
  secondary: {
    main: "#7C3AED",
    light: "#A78BFA",
    dark: "#5B21B6",
    contrastText: "#FFFFFF",
  },
  success: {
    main: "#16A34A",
    light: "#4ADE80",
    dark: "#166534",
    contrastText: "#FFFFFF",
  },
  warning: {
    main: "#F59E0B",
    light: "#FCD34D",
    dark: "#B45309",
    contrastText: "#000000",
  },
  error: {
    main: "#DC2626",
    light: "#F87171",
    dark: "#991B1B",
    contrastText: "#FFFFFF",
  },
  info: {
    main: "#0891B2",
    light: "#22D3EE",
    dark: "#0E7490",
    contrastText: "#FFFFFF",
  },
  neutral: {
    50: "#F9FAFB",
    100: "#F3F4F6",
    200: "#E5E7EB",
    300: "#D1D5DB",
    400: "#9CA3AF",
    500: "#6B7280",
    600: "#4B5563",
    700: "#374151",
    800: "#1F2937",
    900: "#111827",
  },
  background: {
    default: "#FFFFFF",
    paper: "#F9FAFB",
    dark: "#0B1220",
  },

  text: {
    primary: "#111827",
    secondary: "#4B5563",
    disabled: "#9CA3AF",
    inverse: "#FFFFFF",
  },

  border: {
    light: "#E5E7EB",
    main: "#D1D5DB",
    dark: "#9CA3AF",
  },

  action: {
    hover: "rgba(0,0,0,0.04)",
    selected: "rgba(37, 99, 235, 0.12)",
    disabled: "rgba(0,0,0,0.26)",
    disabledBackground: "rgba(0,0,0,0.12)",
  },
};

export const getColor = (color: Colors) => colors[color].main;
