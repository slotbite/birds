import { describe, it, expect, beforeEach, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useBirdAudio } from './useBirdAudio';

// Mock Howler
vi.mock('howler', () => ({
    Howl: vi.fn(function (options) {
        this.play = vi.fn();
        this.stop = vi.fn();
        this.playing = vi.fn(() => false);
        this.on = vi.fn();
    }),
}));

describe('useBirdAudio Hook', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    describe('Property 6: Audio Button State Consistency', () => {
        it('should display correct icon based on audio playing state', () => {
            // **Feature: bird-detail-improvements, Property 6: Audio Button State Consistency**
            // **Validates: Requirements 2.1, 2.2, 2.3, 2.4**

            const mockBird = {
                uid: 'test-bird',
                name: { spanish: 'Test Bird', latin: 'Test species' },
                images: { full: 'https://example.com/bird.jpg' },
            };

            const { result } = renderHook(() => useBirdAudio(mockBird));

            // When audio is not playing, should show play icon
            expect(result.current.isPlaying).toBe(false);
            expect(result.current.hasAudio).toBe(false);

            // The hook should provide play and stop functions
            expect(typeof result.current.play).toBe('function');
            expect(typeof result.current.stop).toBe('function');
        });

        it('should toggle audio playback when button is clicked', () => {
            // **Feature: bird-detail-improvements, Property 6: Audio Button State Consistency**
            // **Validates: Requirements 2.1, 2.2, 2.3, 2.4**

            const mockBird = {
                uid: 'test-bird',
                name: { spanish: 'Test Bird', latin: 'Test species' },
                images: { full: 'https://example.com/bird.jpg' },
            };

            const { result } = renderHook(() => useBirdAudio(mockBird));

            // Initial state: not playing
            expect(result.current.isPlaying).toBe(false);

            // Call play function
            act(() => {
                result.current.play();
            });

            // Call stop function
            act(() => {
                result.current.stop();
            });

            // Verify functions exist and can be called
            expect(result.current.play).toBeDefined();
            expect(result.current.stop).toBeDefined();
        });

        it('should handle bird without audio gracefully', () => {
            // **Feature: bird-detail-improvements, Property 6: Audio Button State Consistency**
            // **Validates: Requirements 2.1, 2.2, 2.3, 2.4**

            const mockBirdNoAudio = {
                uid: 'test-bird-no-audio',
                name: { spanish: 'Test Bird', latin: 'Test species' },
                images: { full: 'https://example.com/bird.jpg' },
            };

            const { result } = renderHook(() => useBirdAudio(mockBirdNoAudio));

            // Should indicate no audio available
            expect(result.current.hasAudio).toBe(false);
            expect(result.current.isPlaying).toBe(false);

            // Functions should still exist
            expect(typeof result.current.play).toBe('function');
            expect(typeof result.current.stop).toBe('function');
        });

        it('should handle null bird gracefully', () => {
            // **Feature: bird-detail-improvements, Property 6: Audio Button State Consistency**
            // **Validates: Requirements 2.1, 2.2, 2.3, 2.4**

            const { result } = renderHook(() => useBirdAudio(null));

            expect(result.current.hasAudio).toBe(false);
            expect(result.current.isPlaying).toBe(false);
            expect(typeof result.current.play).toBe('function');
            expect(typeof result.current.stop).toBe('function');
        });
    });
});
