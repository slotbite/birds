import { useState, useEffect } from 'react';

/**
 * Extract dominant color from image and generate complementary palette
 * Similar to Spotify's album color extraction
 */
export const useImageColors = (imageUrl) => {
    const [colors, setColors] = useState({
        dominant: '#2d5016',
        vibrant: '#4a7c2c',
        muted: '#3d5f24',
        text: '#ffffff',
        textMuted: '#b8d4a8'
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!imageUrl) {
            setIsLoading(false);
            return;
        }

        const img = new Image();
        img.crossOrigin = 'Anonymous';

        img.onload = () => {
            try {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');

                // Resize for performance
                const size = 100;
                canvas.width = size;
                canvas.height = size;

                ctx.drawImage(img, 0, 0, size, size);
                const imageData = ctx.getImageData(0, 0, size, size);
                const pixels = imageData.data;

                // Extract colors with saturation weighting
                const colorMap = {};
                for (let i = 0; i < pixels.length; i += 4) {
                    const r = pixels[i];
                    const g = pixels[i + 1];
                    const b = pixels[i + 2];
                    const a = pixels[i + 3];

                    // Skip transparent pixels
                    if (a < 125) continue;

                    // Calculate saturation to filter out grays/whites
                    const max = Math.max(r, g, b);
                    const min = Math.min(r, g, b);
                    const saturation = max === 0 ? 0 : (max - min) / max;

                    // Skip very unsaturated colors (whites, grays, blacks)
                    if (saturation < 0.2) continue;

                    // Skip very bright colors (likely white backgrounds)
                    const brightness = (r + g + b) / 3;
                    if (brightness > 240) continue;

                    // Quantize colors to reduce variations
                    const qr = Math.round(r / 15) * 15;
                    const qg = Math.round(g / 15) * 15;
                    const qb = Math.round(b / 15) * 15;

                    const key = `${qr},${qg},${qb}`;
                    // Weight by saturation - prioritize vibrant colors
                    colorMap[key] = (colorMap[key] || 0) + (1 + saturation * 2);
                }

                // Find most common saturated colors
                const sortedColors = Object.entries(colorMap)
                    .sort((a, b) => b[1] - a[1])
                    .slice(0, 3)
                    .map(([color]) => color.split(',').map(Number));

                if (sortedColors.length === 0) {
                    setIsLoading(false);
                    return;
                }

                // Get dominant saturated color
                const [r, g, b] = sortedColors[0];

                // Calculate HSL for color manipulation
                const { h, s, l } = rgbToHsl(r, g, b);

                // Create pastel version for background (desaturate and lighten)
                const pastel = hslToRgb(h, Math.min(s * 0.4, 0.5), Math.min(l * 1.8, 0.85));

                // Create vibrant version (increase saturation)
                const vibrant = hslToRgb(h, Math.min(s * 1.2, 0.9), Math.max(l * 0.9, 0.4));

                // Create muted version
                const muted = hslToRgb(h, s * 0.6, l * 0.7);

                // Calculate complementary color for accents
                const complementary = hslToRgb((h + 0.5) % 1, Math.min(s * 1.1, 0.8), l);

                // Determine text color based on pastel background luminance
                const pastelLuminance = (0.299 * pastel[0] + 0.587 * pastel[1] + 0.114 * pastel[2]) / 255;
                const textColor = pastelLuminance > 0.6 ? '#1a1a1a' : '#ffffff';
                const textMuted = pastelLuminance > 0.6 ? '#4a4a4a' : '#d0d0d0';

                setColors({
                    dominant: rgbToHex(r, g, b),
                    pastel: rgbToHex(...pastel),
                    vibrant: rgbToHex(...vibrant),
                    muted: rgbToHex(...muted),
                    complementary: rgbToHex(...complementary),
                    text: textColor,
                    textMuted: textMuted,
                    isDark: pastelLuminance <= 0.6
                });

                setIsLoading(false);
            } catch (error) {
                console.error('Error extracting colors:', error);
                setIsLoading(false);
            }
        };

        img.onerror = () => {
            setIsLoading(false);
        };

        img.src = imageUrl;
    }, [imageUrl]);

    return { colors, isLoading };
};

// Helper functions
function rgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0;
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

        switch (max) {
            case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
            case g: h = ((b - r) / d + 2) / 6; break;
            case b: h = ((r - g) / d + 4) / 6; break;
        }
    }

    return { h, s, l };
}

function hslToRgb(h, s, l) {
    let r, g, b;

    if (s === 0) {
        r = g = b = l;
    } else {
        const hue2rgb = (p, q, t) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };

        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;

        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

function rgbToHex(r, g, b) {
    return '#' + [r, g, b].map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }).join('');
}
