import { useState, useCallback } from 'react';

export const useScreenCapture = () => {
    const [isCapturing, setIsCapturing] = useState(false);

    const sanitizeFilename = (filename) => {
        return filename
            .replace(/[^a-z0-9áéíóúñ\s-]/gi, '')
            .replace(/\s+/g, '-')
            .toLowerCase();
    };

    // Opción 1: Descargar imagen original del ave
    const downloadBirdImage = useCallback(async (imageUrl, birdName, scientificName) => {
        console.log('🖼️ [DOWNLOAD] Iniciando descarga de imagen...');
        console.log('🖼️ [DOWNLOAD] URL:', imageUrl);
        console.log('🖼️ [DOWNLOAD] Nombre:', birdName);

        setIsCapturing(true);
        try {
            const sanitizedSpanish = sanitizeFilename(birdName);
            const sanitizedLatin = sanitizeFilename(scientificName);
            const filename = `${sanitizedSpanish}-${sanitizedLatin}.png`;
            console.log('🖼️ [DOWNLOAD] Nombre de archivo:', filename);

            console.log('🖼️ [DOWNLOAD] Fetching imagen...');
            const response = await fetch(imageUrl);
            console.log('🖼️ [DOWNLOAD] Response status:', response.status);

            if (!response.ok) throw new Error(`Failed to fetch image: ${response.status}`);

            const blob = await response.blob();
            console.log('🖼️ [DOWNLOAD] Blob creado, tamaño:', blob.size, 'bytes');

            const url = URL.createObjectURL(blob);
            console.log('🖼️ [DOWNLOAD] Object URL creado:', url);

            const link = document.createElement('a');
            link.href = url;
            link.download = filename;
            link.style.display = 'none';
            document.body.appendChild(link);
            console.log('🖼️ [DOWNLOAD] Link creado y agregado al DOM');

            console.log('🖼️ [DOWNLOAD] Haciendo click en link...');
            link.click();
            console.log('🖼️ [DOWNLOAD] Click ejecutado');

            setTimeout(() => {
                document.body.removeChild(link);
                URL.revokeObjectURL(url);
                setIsCapturing(false);
                console.log('✅ [DOWNLOAD] Descarga completada');
            }, 100);
        } catch (error) {
            console.error('❌ [DOWNLOAD] Error:', error);
            setIsCapturing(false);
        }
    }, []);

    // Opción 2: Crear imagen compuesta con Canvas API nativa (sin oklab issues)
    const createCompositeImage = useCallback(async (imageUrl, birdName, scientificName, details) => {
        console.log('📋 [COMPOSITE] Iniciando creación de imagen compuesta...');
        console.log('📋 [COMPOSITE] URL:', imageUrl);
        console.log('📋 [COMPOSITE] Nombre:', birdName);

        setIsCapturing(true);
        try {
            // Crear canvas
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            // Dimensiones
            const width = 1080;
            const height = 1440;
            canvas.width = width;
            canvas.height = height;
            console.log('📋 [COMPOSITE] Canvas creado:', width, 'x', height);

            // Fondo negro
            ctx.fillStyle = '#000000';
            ctx.fillRect(0, 0, width, height);
            console.log('📋 [COMPOSITE] Fondo negro dibujado');

            // Cargar imagen del ave
            const img = new Image();
            img.crossOrigin = 'anonymous';

            console.log('📋 [COMPOSITE] Cargando imagen...');
            await new Promise((resolve, reject) => {
                img.onload = () => {
                    console.log('📋 [COMPOSITE] Imagen cargada:', img.width, 'x', img.height);
                    resolve();
                };
                img.onerror = () => {
                    console.error('📋 [COMPOSITE] Error cargando imagen');
                    reject(new Error('Failed to load image'));
                };
                img.src = imageUrl;
            });

            // Dibujar imagen del ave (60% del canvas)
            const imgHeight = height * 0.6;
            const imgWidth = (img.width / img.height) * imgHeight;
            const imgX = (width - imgWidth) / 2;
            ctx.drawImage(img, imgX, 40, imgWidth, imgHeight);

            // Sección de detalles (40% del canvas)
            const detailsY = height * 0.65;

            // Fondo para detalles con gradiente
            const gradient = ctx.createLinearGradient(0, detailsY, 0, height);
            gradient.addColorStop(0, '#1a1a1a');
            gradient.addColorStop(1, '#0a0a0a');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, detailsY, width, height - detailsY);

            // Línea separadora verde elegante
            ctx.strokeStyle = '#4ade80';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(60, detailsY);
            ctx.lineTo(width - 60, detailsY);
            ctx.stroke();

            // Texto - Nombre español (bold, tracking tight, grande)
            ctx.fillStyle = '#ffffff';
            ctx.font = '900 56px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
            ctx.textAlign = 'left';
            ctx.fillText(birdName, 60, detailsY + 90);

            // Texto - Nombre científico (italic, serif, verde)
            ctx.fillStyle = '#4ade80';
            ctx.font = 'italic 36px Georgia, "Times New Roman", serif';
            ctx.fillText(scientificName, 60, detailsY + 145);

            // Detalles adicionales con mejor tipografía
            let textY = detailsY + 210;

            if (details?.size) {
                // Label "TAMAÑO" en mayúsculas pequeñas
                ctx.fillStyle = '#4ade80';
                ctx.font = '700 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
                ctx.letterSpacing = '0.15em';
                ctx.fillText('TAMAÑO', 60, textY);

                // Valor del tamaño
                ctx.fillStyle = '#ffffff';
                ctx.font = '400 22px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
                ctx.fillText(details.size, 60, textY + 32);
                textY += 70;
            }

            if (details?.habitat) {
                // Label "HÁBITAT"
                ctx.fillStyle = '#4ade80';
                ctx.font = '700 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
                ctx.fillText('HÁBITAT', 60, textY);

                // Valor del hábitat (con line wrapping manual si es muy largo)
                ctx.fillStyle = '#e5e5e5';
                ctx.font = '300 20px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
                const habitatText = details.habitat.length > 80
                    ? details.habitat.substring(0, 80) + '...'
                    : details.habitat;
                ctx.fillText(habitatText, 60, textY + 32);
                textY += 70;
            }

            if (details?.distribution) {
                // Label "DISTRIBUCIÓN"
                ctx.fillStyle = '#4ade80';
                ctx.font = '700 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
                ctx.fillText('DISTRIBUCIÓN', 60, textY);

                // Valor de la distribución
                ctx.fillStyle = '#e5e5e5';
                ctx.font = '300 20px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
                const distText = details.distribution.length > 80
                    ? details.distribution.substring(0, 80) + '...'
                    : details.distribution;
                ctx.fillText(distText, 60, textY + 32);
                textY += 70;
            }

            // Pie de página más elegante
            ctx.fillStyle = '#666666';
            ctx.font = '400 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
            ctx.fillText('Aves de Chile · Guía de Avistamientos', 60, height - 40);

            // Convertir a blob y descargar
            console.log('📋 [COMPOSITE] Convirtiendo canvas a blob...');
            canvas.toBlob((blob) => {
                if (!blob) {
                    console.error('❌ [COMPOSITE] Error: No se pudo crear blob');
                    setIsCapturing(false);
                    return;
                }

                console.log('📋 [COMPOSITE] Blob creado, tamaño:', blob.size, 'bytes');

                const sanitizedSpanish = sanitizeFilename(birdName);
                const sanitizedLatin = sanitizeFilename(scientificName);
                const filename = `${sanitizedSpanish}-${sanitizedLatin}-detalle.png`;
                console.log('📋 [COMPOSITE] Nombre de archivo:', filename);

                const url = URL.createObjectURL(blob);
                console.log('📋 [COMPOSITE] Object URL creado:', url);

                const link = document.createElement('a');
                link.href = url;
                link.download = filename;
                link.style.display = 'none';
                document.body.appendChild(link);
                console.log('📋 [COMPOSITE] Link creado y agregado al DOM');

                setTimeout(() => {
                    console.log('📋 [COMPOSITE] Haciendo click en link...');
                    link.click();
                    console.log('📋 [COMPOSITE] Click ejecutado');

                    document.body.removeChild(link);
                    URL.revokeObjectURL(url);
                    setIsCapturing(false);
                    console.log('✅ [COMPOSITE] Imagen compuesta completada');
                }, 100);
            }, 'image/png', 1.0);
        } catch (error) {
            console.error('❌ [COMPOSITE] Error:', error);
            setIsCapturing(false);
        }
    }, []);

    // Función principal que decide qué hacer
    const captureScreenshot = useCallback(async (imageUrl, birdName, scientificName, details, mode = 'composite') => {
        console.log('🎬 [CAPTURE] Iniciando captura de screenshot');
        console.log('🎬 [CAPTURE] Modo:', mode);
        console.log('🎬 [CAPTURE] Parámetros:', { imageUrl, birdName, scientificName, details });

        if (mode === 'image-only') {
            console.log('🎬 [CAPTURE] Ejecutando: downloadBirdImage');
            await downloadBirdImage(imageUrl, birdName, scientificName);
        } else {
            console.log('🎬 [CAPTURE] Ejecutando: createCompositeImage');
            await createCompositeImage(imageUrl, birdName, scientificName, details);
        }
    }, [downloadBirdImage, createCompositeImage]);

    return { captureScreenshot, isCapturing };
};

export default useScreenCapture;
