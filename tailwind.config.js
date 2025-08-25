module.exports = {
  theme: {
    extend: {
      keyframes: {
        scrollRight: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        scrollLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "scroll-right": "scrollRight 20s linear infinite",
        "scroll-left": "scrollLeft 20s linear infinite",
      },
    },
  },
};
