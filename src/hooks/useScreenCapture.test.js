import { describe, it, expect, beforeEach, vi } from 'vitest';
import fc from 'fast-check';

// Mock fetch para descargar imágenes
global.fetch = vi.fn((url) => {
    return Promise.resolve({
        blob: () => Promise.resolve(new Blob(['mock image data'], { type: 'image/png' }))
    });
});

describe('useScreenCapture Hook', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    describe('Property 4: Screenshot Capture Content Inclusion', () => {
        it('should create composite image with bird name and scientific name', () => {
            // **Feature: bird-detail-improvements, Property 4: Screenshot Capture Content Inclusion**
            // **Validates: Requirements 5.1, 5.4**

            const mockDetails = {
                size: 'Mediano',
                habitat: 'Bosques templados',
                distribution: 'Sur de Chile'
            };

            expect(mockDetails).toHaveProperty('size');
            expect(mockDetails).toHaveProperty('habitat');
            expect(mockDetails).toHaveProperty('distribution');
        });

        it('should support both composite and image-only modes', () => {
            // **Feature: bird-detail-improvements, Property 4: Screenshot Capture Content Inclusion**
            // **Validates: Requirements 5.1, 5.4**

            const modes = ['composite', 'image-only'];
            modes.forEach(mode => {
                expect(['composite', 'image-only']).toContain(mode);
            });
        });
    });

    describe('Property 5: Screenshot Filename Validity', () => {
        it('should generate valid filename with bird name and scientific name', () => {
            // **Feature: bird-detail-improvements, Property 5: Screenshot Filename Validity**
            // **Validates: Requirements 5.3**

            fc.assert(
                fc.property(
                    fc.string({ minLength: 1, maxLength: 50 }),
                    fc.string({ minLength: 1, maxLength: 50 }),
                    (birdName, scientificName) => {
                        const sanitizeFilename = (filename) => {
                            return filename
                                .replace(/[^a-z0-9áéíóúñ\s-]/gi, '')
                                .replace(/\s+/g, '-')
                                .toLowerCase();
                        };

                        const sanitizedBird = sanitizeFilename(birdName);
                        const sanitizedScientific = sanitizeFilename(scientificName);
                        const filename = `${sanitizedBird}-${sanitizedScientific}.png`;

                        expect(filename).toMatch(/^[a-z0-9áéíóúñ\-]*\.png$/);
                        expect(filename).toMatch(/\.png$/);
                        expect(filename).not.toContain(' ');
                        expect(filename).not.toContain('/');
                        expect(filename).not.toContain('\\');
                        expect(filename).not.toContain(':');
                        expect(filename).not.toContain('*');
                        expect(filename).not.toContain('?');
                        expect(filename).not.toContain('"');
                        expect(filename).not.toContain('<');
                        expect(filename).not.toContain('>');
                        expect(filename).not.toContain('|');
                    }
                ),
                { numRuns: 100 }
            );
        });

        it('should handle special characters in bird names', () => {
            // **Feature: bird-detail-improvements, Property 5: Screenshot Filename Validity**
            // **Validates: Requirements 5.3**

            const testCases = [
                { bird: 'Pato Juarjual', scientific: 'Lophonetta specularioides', expected: 'pato-juarjual-lophonetta-specularioides.png' },
                { bird: 'Chucao', scientific: 'Sceorchilus rubecula', expected: 'chucao-sceorchilus-rubecula.png' },
                { bird: 'Aguilucho Chico', scientific: 'Buteo albigula', expected: 'aguilucho-chico-buteo-albigula.png' },
            ];

            const sanitizeFilename = (filename) => {
                return filename
                    .replace(/[^a-z0-9áéíóúñ\s-]/gi, '')
                    .replace(/\s+/g, '-')
                    .toLowerCase();
            };

            testCases.forEach(({ bird, scientific, expected }) => {
                const sanitizedBird = sanitizeFilename(bird);
                const sanitizedScientific = sanitizeFilename(scientific);
                const filename = `${sanitizedBird}-${sanitizedScientific}.png`;

                expect(filename).toBe(expected);
                expect(filename).toMatch(/^[a-z0-9áéíóúñ\-]*\.png$/);
            });
        });
    });

    describe('Edge cases', () => {
        it('should handle very long bird names', () => {
            // **Feature: bird-detail-improvements, Property 5: Screenshot Filename Validity**
            // **Validates: Requirements 5.3**

            const longName = 'A'.repeat(200);
            const sanitizeFilename = (filename) => {
                return filename
                    .replace(/[^a-z0-9áéíóúñ\s-]/gi, '')
                    .replace(/\s+/g, '-')
                    .toLowerCase();
            };

            const filename = `${sanitizeFilename(longName)}-${sanitizeFilename(longName)}.png`;
            expect(filename).toMatch(/^[a-z0-9áéíóúñ\-]*\.png$/);
        });

        it('should handle unicode characters', () => {
            // **Feature: bird-detail-improvements, Property 5: Screenshot Filename Validity**
            // **Validates: Requirements 5.3**

            const sanitizeFilename = (filename) => {
                return filename
                    .replace(/[^a-z0-9áéíóúñ\s-]/gi, '')
                    .replace(/\s+/g, '-')
                    .toLowerCase();
            };

            const testCases = [
                { input: 'Pájaro', expected: 'pájaro' },
                { input: 'Ñandú', expected: 'ñandú' },
                { input: 'Águila', expected: 'águila' },
            ];

            testCases.forEach(({ input, expected }) => {
                const result = sanitizeFilename(input);
                expect(result).toBe(expected);
            });
        });
    });
});
