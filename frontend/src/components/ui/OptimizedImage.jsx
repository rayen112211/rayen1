import React from 'react';

/**
 * OptimizedImage Component
 * Handles lazy loading and provides a consistent interface for images
 */
const OptimizedImage = ({
    src,
    alt,
    className = "",
    priority = false
}) => {
    // Check if it's a PNG/JPG that could have a WebP version
    const isCachable = src && (src.endsWith('.png') || src.endsWith('.jpg') || src.endsWith('.jpeg'));
    const webpSrc = isCachable ? src.replace(/\.(png|jpg|jpeg)$/, '.webp') : null;

    return (
        <picture className={className}>
            {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
            <img
                src={src}
                alt={alt}
                className={className}
                loading={priority ? "eager" : "lazy"}
                decoding="async"
                fetchpriority={priority ? "high" : "low"}
            />
        </picture>
    );
};

export default OptimizedImage;
