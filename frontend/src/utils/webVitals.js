import { onCLS, onFID, onLCP, onFCP, onTTFB } from 'web-vitals';

/**
 * Sends web vitals metrics to Google Analytics
 */
function sendToAnalytics({ name, delta, value, id }) {
    if (window.gtag) {
        window.gtag('event', name, {
            event_category: 'Web Vitals',
            event_label: id,
            value: Math.round(name === 'CLS' ? delta * 1000 : delta), // CLS is a score, not ms
            non_interaction: true,
        });
    }
}

export function initWebVitals() {
    onCLS(sendToAnalytics);
    onFID(sendToAnalytics);
    onLCP(sendToAnalytics);
    onFCP(sendToAnalytics);
    onTTFB(sendToAnalytics);
}
