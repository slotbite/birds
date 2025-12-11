import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import ActionButtonsBar from './ActionButtonsBar';

describe('ActionButtonsBar Component', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    describe('Property 7: Action Buttons Horizontal Layout', () => {
        it('should display all three action buttons in horizontal row', () => {
            // **Feature: bird-detail-improvements, Property 7: Action Buttons Horizontal Layout**
            // **Validates: Requirements 3.1**

            const mockHandlers = {
                onLogbook: vi.fn(),
                onAddSighting: vi.fn(),
                onShare: vi.fn(),
            };

            render(
                <ActionButtonsBar
                    {...mockHandlers}
                    isCapturing={false}
                />
            );

            // Verify all three buttons are present
            expect(screen.getByText('Bitácora')).toBeInTheDocument();
            expect(screen.getByText('Avistamiento')).toBeInTheDocument();
            expect(screen.getByText('Compartir')).toBeInTheDocument();

            // Verify buttons are in a horizontal layout (flex container)
            const bitacoraButton = screen.getByText('Bitácora');
            const container = bitacoraButton.closest('div[class*="flex"]');
            expect(container).toBeTruthy();
            expect(container).toHaveClass('flex');
            expect(container).toHaveClass('gap-6');
        });

        it('should disable share button when capturing', () => {
            // **Feature: bird-detail-improvements, Property 7: Action Buttons Horizontal Layout**
            // **Validates: Requirements 3.1**

            const mockHandlers = {
                onLogbook: vi.fn(),
                onAddSighting: vi.fn(),
                onShare: vi.fn(),
            };

            const { rerender } = render(
                <ActionButtonsBar
                    {...mockHandlers}
                    isCapturing={false}
                />
            );

            // Share button should be enabled initially
            let shareButton = screen.getByTitle('Compartir');
            expect(shareButton).not.toBeDisabled();

            // Rerender with isCapturing=true
            rerender(
                <ActionButtonsBar
                    {...mockHandlers}
                    isCapturing={true}
                />
            );

            // Share button should be disabled when capturing
            shareButton = screen.getByTitle('Compartir');
            expect(shareButton).toBeDisabled();

            // Should show "Capturando" text
            expect(screen.getByText('Capturando')).toBeInTheDocument();
        });

        it('should call appropriate handlers when buttons are clicked', () => {
            // **Feature: bird-detail-improvements, Property 7: Action Buttons Horizontal Layout**
            // **Validates: Requirements 3.1**

            const mockHandlers = {
                onLogbook: vi.fn(),
                onAddSighting: vi.fn(),
                onShare: vi.fn(),
            };

            render(
                <ActionButtonsBar
                    {...mockHandlers}
                    isCapturing={false}
                />
            );

            // Click each button and verify handlers are called
            const bitacoraButton = screen.getByText('Bitácora');
            bitacoraButton.click();
            expect(mockHandlers.onLogbook).toHaveBeenCalled();

            const avistamientoButton = screen.getByText('Avistamiento');
            avistamientoButton.click();
            expect(mockHandlers.onAddSighting).toHaveBeenCalled();

            // Share button - creates composite image
            const shareButton = screen.getByText('Compartir');
            shareButton.click();
            expect(mockHandlers.onShare).toHaveBeenCalledWith('composite');
        });
    });
});
