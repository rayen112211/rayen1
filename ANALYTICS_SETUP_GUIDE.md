# Google Analytics 4 & Search Console Setup Guide

## Part 1: Google Analytics 4 Setup

### Step 1: Create GA4 Property

1. Go to [Google Analytics](https://analytics.google.com/)
2. Click "Admin" (gear icon, bottom left)
3. Click "Create Property"
4. Enter property details:
   - Property name: "rayenlazizi.tech"
   - Time zone: Select your timezone
   - Currency: Select your currency
5. Click "Next" and fill out business information
6. Click "Create" and accept Terms of Service

### Step 2: Set Up Data Stream

1. After creating property, select "Web" platform
2. Enter website details:
   - Website URL: `https://rayenlazizi.tech`
   - Stream name: "rayenlazizi.tech - Production"
3. Click "Create stream"
4. **Copy your Measurement ID** (format: G-XXXXXXXXXX)

### Step 3: Install GA4 Tracking Code

Add this code to `frontend/public/index.html` in the `<head>` section:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-LXZVPJDMRJ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-LXZVPJDMRJ');
</script>
```

**ID is configured: G-LXZVPJDMRJ**

### Step 4: Configure Enhanced Measurement

In GA4 Data Stream settings:
1. Click on your web stream
2. Under "Enhanced measurement", ensure these are enabled:
   - ✅ Page views
   - ✅ Scrolls
   - ✅ Outbound clicks
   - ✅ Site search (if applicable)
   - ✅ Video engagement
   - ✅ File downloads

### Step 5: Set Up Conversion Goals

1. Go to "Admin" → "Events"
2. Click "Create event" for custom events
3. Mark important events as conversions:
   - form_submit (contact form submissions)
   - click_to_call
   - button_click (CTA clicks)

---

## Part 2: Google Search Console Setup

### Step 1: Add Property

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click "Add Property"
3. Choose "URL prefix" property type
4. Enter: `https://rayenlazizi.tech`
5. Click "Continue"

### Step 2: Verify Ownership

**Method 1: HTML Tag (Recommended for React apps)**
1. Select "HTML tag" verification method
2. Copy the meta tag provided
3. Add to `frontend/public/index.html` in `<head>`:
   ```html
   <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
   ```
4. Deploy your site
5. Click "Verify" in Search Console

**Method 2: DNS Record (Alternative)**
1. Select "Domain name provider" method
2. Follow instructions to add TXT record to your DNS
3. Wait for DNS propagation (can take up to 48 hours)
4. Click "Verify"

### Step 3: Submit Sitemap

1. After verification, go to "Sitemaps" in left sidebar
2. Enter sitemap URL: `https://rayenlazizi.tech/sitemap.xml`
3. Click "Submit"
4. Wait for Google to crawl (can take 1-7 days)

### Step 4: Request Indexing for Key Pages

1. Go to "URL Inspection" tool
2. Enter URL: `https://rayenlazizi.tech/`
3. Click "Request Indexing"
4. Repeat for key pages/sections

### Step 5: Monitor Performance

Check weekly:
- **Performance**: Impressions, clicks, average position for keywords
- **Coverage**: Ensure no errors, all pages indexed
- **Enhancements**: Core Web Vitals, mobile usability
- **Links**: Monitor backlinks

---

## Part 3: Bing Webmaster Tools (Optional but Recommended)

### Setup
1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Click "Add a site"
3. Enter: `https://rayenlazizi.tech`
4. Verify with same method as Google Search Console
5. Submit sitemap: `https://rayenlazizi.tech/sitemap.xml`

---

## Part 4: Core Web Vitals Monitoring

### Install web-vitals Library (Already in package.json)

Create a new file: `frontend/src/utils/webVitals.js`

```javascript
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

function sendToAnalytics({ name, delta, value, id }) {
  // Send to Google Analytics GA4
  if (window.gtag) {
    window.gtag('event', name, {
      event_category: 'Web Vitals',
      value: Math.round(name === 'CLS' ? delta * 1000 : delta),
      event_label: id,
      non_interaction: true,
    });
  }
}

export function initWebVitals() {
  getCLS(sendToAnalytics);
  getFID(sendToAnalytics);
  getFCP(sendToAnalytics);
  getLCP(sendToAnalytics);
  getTTFB(sendToAnalytics);
}
```

Then import and call in `frontend/src/index.js`:

```javascript
import { initWebVitals } from './utils/webVitals';

// After ReactDOM.render
initWebVitals();
```

---

## Part 5: Testing Your Setup

### Test GA4
1. Open your live website in a new incognito window
2. Navigate around the site
3. Go to GA4 → Reports → Realtime
4. You should see your visit in real-time

### Test Search Console
1. After 24-48 hours, check "Coverage" report
2. Verify your sitemap is being processed
3. Check for any crawl errors

---

## Key Metrics to Track Weekly

### Google Analytics 4
- [ ] Organic traffic (Users, Sessions)
- [ ] Bounce rate / Engagement rate
- [ ] Average session duration
- [ ] Traffic sources (Direct, Organic, Referral, Social)
- [ ] Conversion events (contact form submissions)
- [ ] Top landing pages

### Google Search Console
- [ ] Total impressions and clicks
- [ ] Average CTR (Click-through rate)
- [ ] Average position for target keywords:
  - "web developer"
  - "full-stack developer"
  - "[your city] web developer"
  - Long-tail keywords
- [ ] Coverage issues (errors, warnings)
- [ ] Core Web Vitals (LCP, INP, CLS)
- [ ] Mobile usability issues
- [ ] New backlinks

---

## Troubleshooting

### GA4 not showing data?
- Check Measurement ID is correct in code
- Ensure tracking code is in `<head>` before other scripts
- Disable ad blockers when testing
- Check browser console for errors
- Wait 24-48 hours for processing

### Search Console not indexing pages?
- Verify robots.txt allows crawling
- Check sitemap.xml is accessible and valid
- Use "Request Indexing" for important pages
- Ensure site has proper internal linking
- Check for `noindex` meta tags (should not have them)

### Low CTR in Search Console?
- Improve meta titles and descriptions
- Make them more compelling and keyword-rich
- Add power words: "Expert", "Professional", "Free Consultation"
- Include year: "2026" to show freshness

---

## Next Steps After Setup

1. **Week 1-2**: Monitor data, fix any issues
2. **Week 3-4**: Analyze which keywords are getting impressions
3. **Month 2+**: Optimize pages based on data
   - Improve CTR for high-impression, low-click queries
   - Create content for queries with high impressions
   - Target keywords where you're ranking 11-20 (page 2)

