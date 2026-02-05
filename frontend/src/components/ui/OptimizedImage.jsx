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
    return (
        <img
            src={src}
            alt={alt}
            className={className}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
        />
    );
};

export default OptimizedImage;
