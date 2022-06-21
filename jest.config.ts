import type { Config } from "jest";

export default async (): Promise<Config> => {
  return {
    verbose: true,
    roots: ["<rootDir>/src"],
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    testEnvironment: "jsdom",
  };
};
