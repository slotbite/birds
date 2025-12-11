import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useFavorites } from './useFavorites';
import fc from 'fast-check';

describe('useFavorites Hook', () => {
    beforeEach(() => {
        localStorage.clear();
        vi.clearAllMocks();
    });

    afterEach(() => {
        localStorage.clear();
    });

    describe('Property 2: Favorite Status Persistence Round Trip', () => {
        it('should persist favorite status to local storage and restore on reload', () => {
            // **Feature: bird-detail-improvements, Property 2: Favorite Status Persistence Round Trip**
            // **Validates: Requirements 4.4, 4.5**

            fc.assert(
                fc.property(
                    fc.string({ minLength: 1, maxLength: 50 }),
                    (birdId) => {
                        localStorage.clear();

                        const { result: result1 } = renderHook(() => useFavorites(birdId));
                        expect(result1.current.isFavorite).toBe(false);

                        act(() => {
                            result1.current.toggleFavorite();
                        });
                        expect(result1.current.isFavorite).toBe(true);

                        const stored = JSON.parse(localStorage.getItem('bird_favorites') || '[]');
                        expect(stored).toContain(birdId);

                        const { result: result2 } = renderHook(() => useFavorites(birdId));
                        expect(result2.current.isFavorite).toBe(true);

                        act(() => {
                            result2.current.toggleFavorite();
                        });
                        expect(result2.current.isFavorite).toBe(false);

                        const storedAfter = JSON.parse(localStorage.getItem('bird_favorites') || '[]');
                        expect(storedAfter).not.toContain(birdId);

                        const { result: result3 } = renderHook(() => useFavorites(birdId));
                        expect(result3.current.isFavorite).toBe(false);
                    }
                ),
                { numRuns: 50 }
            );
        });
    });

    describe('Property 3: Favorite Status UI Reflection', () => {
        it('should display filled heart when favorite and empty heart when not', () => {
            // **Feature: bird-detail-improvements, Property 3: Favorite Status UI Reflection**
            // **Validates: Requirements 4.1, 4.2, 4.3**

            const birdId = 'test-bird-123';
            localStorage.clear();

            const { result } = renderHook(() => useFavorites(birdId));

            expect(result.current.isFavorite).toBe(false);

            act(() => {
                result.current.toggleFavorite();
            });
            expect(result.current.isFavorite).toBe(true);

            act(() => {
                result.current.toggleFavorite();
            });
            expect(result.current.isFavorite).toBe(false);
        });
    });

    describe('Edge cases', () => {
        it('should handle null or undefined bird ID gracefully', () => {
            // **Feature: bird-detail-improvements, Property 2: Favorite Status Persistence Round Trip**
            // **Validates: Requirements 4.4, 4.5**

            const { result } = renderHook(() => useFavorites(null));
            expect(result.current.isFavorite).toBe(false);

            act(() => {
                result.current.toggleFavorite();
            });
            expect(result.current.isFavorite).toBe(false);
        });

        it('should handle corrupted localStorage data gracefully', () => {
            // **Feature: bird-detail-improvements, Property 2: Favorite Status Persistence Round Trip**
            // **Validates: Requirements 4.4, 4.5**

            localStorage.setItem('bird_favorites', 'invalid json {]');

            const birdId = 'test-bird-456';
            const { result } = renderHook(() => useFavorites(birdId));

            expect(result.current.isFavorite).toBe(false);

            act(() => {
                result.current.toggleFavorite();
            });
            expect(result.current.isFavorite).toBe(true);
        });

        it('should handle multiple birds independently', () => {
            // **Feature: bird-detail-improvements, Property 2: Favorite Status Persistence Round Trip**
            // **Validates: Requirements 4.4, 4.5**

            localStorage.clear();

            const bird1 = 'bird-1';
            const bird2 = 'bird-2';

            const { result: result1 } = renderHook(() => useFavorites(bird1));
            const { result: result2 } = renderHook(() => useFavorites(bird2));

            act(() => {
                result1.current.toggleFavorite();
            });
            expect(result1.current.isFavorite).toBe(true);
            expect(result2.current.isFavorite).toBe(false);

            act(() => {
                result2.current.toggleFavorite();
            });
            expect(result1.current.isFavorite).toBe(true);
            expect(result2.current.isFavorite).toBe(true);

            act(() => {
                result1.current.toggleFavorite();
            });
            expect(result1.current.isFavorite).toBe(false);
            expect(result2.current.isFavorite).toBe(true);
        });
    });
});
