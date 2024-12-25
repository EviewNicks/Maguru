import type { CustomFlowbiteTheme } from "flowbite-react";
import { Flowbite } from "flowbite-react";

const customThemeLightCard: CustomFlowbiteTheme = {
  card: {
    root: {
      base: 'bg-pink-400 shadow-lg hover:shadow-2xl transition-all duration-300', // Custom card style
    },
  },
};

const customThemeDarkCard: CustomFlowbiteTheme = {
  card: {
    root: {
      base: 'bg-red-800 shadow-lg hover:shadow-2xl transition-all duration-300', // Custom card style
    },
  },
};


export {customThemeLightCard, customThemeDarkCard};
