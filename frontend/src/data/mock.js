// Premium Portfolio Data
import { BarChart, Globe, Zap, Shield, Smartphone, Layout } from 'lucide-react';

export const developerInfo = {
  name: "Rayen Lazizi",
  title: "Full-Stack Partner for Business Growth",
  tagline: "I don't just write code. I build high-performance digital engines that scale your business.",
  bio: "Rayen Lazizi is a Full-Stack Engineer and Digital Consultant with a unique blend of technical expertise and business acumen. Currently pursuing a Computer Engineering degree at the University of Florence, he combines European engineering standards with the agility of startup culture. Rayen has delivered end-to-end digital solutions for startups in Tunisia and international clients, focusing not just on 'websites' but on digital platforms that drive revenue, automate workflows, and elevate brand authority.",
  email: "rayenazizi112211@gmail.com",
  whatsapp: "+48 662 250 830",
  location: "Based in Florence, Italy • Available Globally",
  socials: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/"
  }
};

export const services = [
  {
    id: 1,
    title: "Custom Business Platforms",
    description: "Move beyond generic templates. I build bespoke web applications tailored to your specific operational needs—whether it's a client portal, a booking system, or a complex dashboard.",
    icon: <Layout size={24} />,
    features: ["React/Next.js Architecture", "Scalable Database Design", "Secure User Authentication"]
  },
  {
    id: 2,
    title: "High-Conversion E-Commerce",
    description: "Launch an online store that actually sells. From product showcases to secure payment processing and inventory management, I build shopping experiences that customers trust.",
    icon: <Globe size={24} />,
    features: ["Stripe/PayPal Integration", "Cart & Checkout Optimization", "Admin Dashboard"]
  },
  {
    id: 3,
    title: "Professional SEO & Growth",
    description: "A beautiful website is useless if no one finds it. I implement professional Technical SEO to ensure your business ranks high on Google, driving consistent organic traffic and real customers without paid ads.",
    icon: <Zap size={24} />,
    features: ["Google Ranking Strategy", "Keyword Optimization", "Performance Tuning"]
  },
  {
    id: 4,
    title: "Workflow Automation",
    description: "Stop doing repetitive tasks. I integrate your website with tools like CRMs, email marketing platforms, and analytics to put your business on autopilot.",
    icon: <Shield size={24} />,
    features: ["API Integrations", "Automated Email Sequences", "Real-time Notifications"]
  }
];

export const caseStudy = {
  title: "Unyamee.shop – Sustainable Fashion Platform",
  industry: "Sustainable Fashion & Workshops",
  role: "Full-Stack Developer",
  challenge: "A sustainable fashion designer in Warsaw needed an online presence to showcase upcycled fashion pieces and manage workshop bookings. The platform needed to handle e-commerce for one-of-a-kind items while also allowing customers to book creative upcycling workshops.",
  solution: "Built a custom e-commerce platform with React and Python featuring product showcases for unique upcycled pieces, integrated Stripe payments, workshop booking system, and a custom admin dashboard for inventory and order management.",
  results: [
    "Streamlined Workshop Bookings",
    "Secure Online Payments",
    "Mobile-Optimized Shopping",
    "Automated Order Processing"
  ],
  image: "/assets/unya-mee-preview.png?v=2",
  link: "https://unyamee.shop"
};

export const pricing = [
  {
    id: 1,
    title: "The Foundation",
    type: "Essential Build",
    price: "Custom Quote",
    description: "The core investment. I design and build your custom platform from scratch. You own 100% of the code and assets forever.",
    features: [
      "Custom UI/UX Design",
      "Mobile Responsive Development",
      "SEO Infrastructure Setup",
      "Admin Panel Configuration",
      "One-time Payment"
    ],
    highlight: false
  },
  {
    id: 2,
    title: "Peace of Mind",
    type: "Optional Maintenance",
    price: "Starts at $50/mo",
    description: "Secure your investment. I handle hosting, updates, and technical issues so you never have to verify plugins or servers.",
    features: [
      "Premium High-Speed Hosting",
      "Domain Name Management",
      "Weekly Security Updates",
      "24/7 Uptime Monitoring",
      "Cancel Anytime"
    ],
    highlight: true,
    badge: "Recommended Add-on"
  }
];

export const faq = [
  {
    question: "Do I have to pay the monthly fee?",
    answer: "No, it is 100% optional. You can choose to pay only for the website build and manage the hosting yourself. However, for just $50/mo, I ensure your site stays fast, secure, and online without you lifting a finger."
  },
  {
    question: "How long does it take to build a website?",
    answer: "A standard business website typically takes 4-7 days. Complex platforms with custom features (like booking systems or e-commerce) usually take 1-3 weeks. I work efficiently to get you online fast without sacrificing quality."
  },
  {
    question: "Who owns the website?",
    answer: "You do. Once the one-time build fee is paid, you own 100% of the code, design, and content. No lock-in contracts."
  },
  {
    question: "Can you help me rank on Google?",
    answer: "Absolutely. My 'Professional SEO' service is built into the development process. I ensure your site is technically optimized for Google’s algorithms from day one."
  }
];
