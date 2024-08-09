const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        shape: "width, height, margin, padding, transform",
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(1, -0.1, 0, 1.1)",
      },
      animation: {
        "fade-in":
          "fade-in var(--tw-animate-duration, 0.7s) var(--tw-animate-easing, ease) var(--tw-animate-delay, 0s) var(--tw-animate-iteration, 1) var(--tw-animate-fill, both)",
        "fade-out":
          "fade-out var(--tw-animate-duration, 0.7s) var(--tw-animate-easing, ease) var(--tw-animate-delay, 0s) var(--tw-animate-iteration, 1) var(--tw-animate-fill, both)",
        "pop-up-in":
          "pop-up-in var(--tw-animate-duration, 0.7s) var(--tw-animate-easing, ease) var(--tw-animate-delay, 0s) var(--tw-animate-iteration, 1) var(--tw-animate-fill, both)",
        "pop-up-out":
          "pop-up-out var(--tw-animate-duration, 0.7s) var(--tw-animate-easing, ease) var(--tw-animate-delay, 0s) var(--tw-animate-iteration, 1) var(--tw-animate-fill, both)",
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "fade-out": {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
        "pop-up-in": {
          "0%": {
            transform: "translateY(50vh) scale(0.5)",
          },
          "100%": {
            transform: "translateY(0) scale(1)",
          },
        },
        "pop-up-out": {
          "0%": {
            transform: "translateY(0) scale(1)",
          },
          "100%": {
            transform: "translateY(50vh) scale(0.5)",
          },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "animate-ease": (value) => ({
            animationTimingFunction: value,
          }),
        },
        { values: theme("transitionTimingFunction") }
      );
    }),
  ],
};
