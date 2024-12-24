import type { CustomFlowbiteTheme } from "flowbite-react";

export const lightTheme: CustomFlowbiteTheme = {
  button: {
    color: {
      primary: "bg-green-500 hover:bg-blue-600 text-white",
    },
  },
  navbar: {
    root: {
      base: "bg-gray-100 text-black dark:bg-gray-900 dark:text-white", // Properti yang valid
    },
    brand: {
      base: "text-lg font-bold text-blue-500",
    },
    link: {
      base: "text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-500",
    },
    toggle: {
      base: "text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white",
    },
  },
};

export const darkTheme: CustomFlowbiteTheme = {
  button: {
    color: {
      primary: "bg-gray-700 hover:bg-gray-800 text-white",
    },
  },
  navbar: {
    root: {
      base: "bg-gray-100 text-black dark:bg-gray-900 dark:text-white", // Properti yang valid
    },
    brand: {
      base: "text-lg font-bold text-blue-500",
    },
    link: {
      base: "text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-500",
    },
    toggle: {
      base: "text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white",
    },
  },
};
