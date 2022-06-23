import type { Config } from 'jest';

export default async (): Promise<Config> => {
    return {
        verbose: true,
        roots: ['<rootDir>/src'],
        testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
        testEnvironment: 'jsdom',
        collectCoverageFrom: [
            '**/*.{ts,tsx}',
            '!**/node_modules/**',
            '!src/main.tsx',
            '!src/**/*.d.ts',
        ],
        coverageThreshold: {
            global: {
                branches: 90,
                functions: 90,
                lines: 90,
                statements: 90,
            },
        },
    };
};

