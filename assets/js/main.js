// Puttur Home Care - Clean Interactive JavaScript & Dual Language Engine (EN/KN)

const translations = {
  en: {
    // Top Bar
    topArea: "Puttur • Darbe • Bolwar • Kabaka • Uppinangady • Sullia • Vitla",
    topHours: "7:00 AM – 8:00 PM (All Days)",
    
    // Header Nav
    navServices: "Services",
    navPricing: "Rate Card",
    navCalculator: "Cost Calculator",
    navProcess: "7-Step Method",
    navBeforeAfter: "Before & After",
    navFaqs: "FAQs",
    navContact: "Contact",
    btnCall: "Call Us",
    btnWhatsApp: "WhatsApp Booking",
    
    // Hero
    heroBadge: "Professional Water Tank & Deep Cleaning in Puttur",
    liveBookingText: "Taking Doorstep Bookings in Puttur Today",
    heroTitle: "Pure Drinking Water & Spotless Clean Homes",
    heroSubtitle: "Mechanized 150-bar high pressure jet tank cleaning, underground sump desiltation, interlock paver washing, and deep house sanitization across Puttur with eco-friendly solutions.",
    stat1Count: "500+",
    stat1Label: "Tanks Cleaned in Puttur",
    stat2Count: "4.9 ★",
    stat2Label: "Google Verified Rating",
    stat3Count: "100%",
    stat3Label: "Food-Grade Safe Cleaning",
    quickOverhead: "Overhead Tank ₹800",
    quickSump: "Underground Sump ₹1,200",
    quickInterlock: "Interlock Wash ₹999",
    feature1Title: "100% Food-Grade Safe",
    feature1Desc: "Eco-friendly sanitizers",
    feature2Title: "150-Bar Jet Wash",
    feature2Desc: "Deep sludge removal",
    feature3Title: "Trained Uniform Team",
    feature3Desc: "Prompt doorstep service",
    heroBtnWhatsApp: "Book on WhatsApp",
    heroBtnCalc: "Calculate Price",
    heroCardLabel: "Overhead Tank Cleaning (500L)",
    heroCardPrice: "Starts at ₹800",
    heroCardBtn: "Book Slot",
    
    // Services Section
    servicesTag: "OUR SERVICES",
    servicesTitle: "Professional Cleaning & Hygiene Services",
    servicesSubtitle: "Specialized doorstep services across Puttur with modern mechanized equipment.",
    
    s1Title: "Overhead Water Tank Cleaning",
    s1Desc: "Mechanized 7-stage cleaning for Sintex and PVC tanks (500L to 3000L+). Removes mud, algae, sludge, and harmful bacteria using 150-bar pressure jets and eco-safe anti-bacterial scrubbing.",
    s1Price: "₹800 / 500L",
    
    s2Title: "Underground Sump Cleaning",
    s2Desc: "Underground concrete sumps accumulate borewell sand, silt, and heavy mud. We thoroughly dewater, vacuum extract sediments, jet spray walls, and sanitize.",
    s2Price: "₹1,200 / Sump",
    
    s3Title: "Interlock & Paver Jet Wash",
    s3Desc: "Strips slippery monsoon green moss, black fungus, and ground grime from compound driveways and paver blocks with heavy-duty high-pressure washing.",
    s3Price: "₹999 / Area",
    
    s4Title: "Deep House Cleaning",
    s4Desc: "Comprehensive full-home cleaning for villas and apartments. Perfect for pre-festival cleaning, post-construction dust removal, or move-in preparation.",
    s4Price: "Custom Quote",
    
    s5Title: "Floor & Tile Acid Wash",
    s5Desc: "Removes hard borewell water scaling, yellow stains, calcium marks, and dirty grout on bathroom tiles and floorings.",
    s5Price: "₹499 / Bath",
    
    s6Title: "House Painting & Waterproofing",
    s6Desc: "Interior and exterior painting services with weather-shield protective coatings built to endure heavy coastal rains and dampness.",
    s6Price: "Free Consultation",

    btnCalcPrice: "Calculate Price",
    btnInquire: "Inquire Now",
    btnCallPainter: "Call Painter",

    // Pricing Section
    pricingTag: "OFFICIAL RATE CARD",
    pricingTitle: "Sintex Water Tank Cleaning Rates",
    pricingSubtitle: "Fixed standardized rates for overhead tanks in Puttur. Zero hidden charges.",
    thCapacity: "Tank Capacity",
    thInclusions: "Inclusions",
    thCharges: "Fixed Charges",
    tInclusionText: "Dewatering, 150-bar jet & safe sanitize",
    tScrubText: "Deep scrub & mechanized jet wash",
    tMultiText: "Complete multi-layer pressure clean",
    qrTitle: "Direct Contact & Instagram QR",
    qrDesc: "Scan with Instagram or WhatsApp to book directly.",

    // Calculator Section
    calcTag: "INSTANT QUOTE",
    calcTitle: "Instant Service Cost Calculator",
    calcSubtitle: "Select your tank size and add-ons for an immediate transparent estimate.",
    calcStep1: "1. Select Tank Capacity:",
    calcStep2: "2. Optional Add-on Services:",
    calcSump: "Underground Sump Cleaning",
    calcInterlock: "Compound Interlock Jet Wash",
    calcFloor: "Floor Machine Deep Scrub",
    calcTile: "Bathroom Tiles Acid Wash (₹499/each)",
    calcSummaryTitle: "Quote Summary",
    calcSubtotal: "Subtotal:",
    calcComboSave: "10% Combo Savings:",
    calcTotal: "Total Estimate:",
    calcBtnWhatsApp: "Book on WhatsApp (+91 7204616137)",

    // Before After Section
    baTag: "VISUAL PROOF",
    baTitle: "Before & After Results",
    baSubtitle: "See the clear difference our mechanized cleaning delivers.",
    baTabTank: "Water Tank Cleaning",
    baTabInterlock: "Interlock Paver Wash",
    baTabTiles: "Bathroom Tiles Acid Wash",
    baLabelBefore: "BEFORE (Dirty / Algae)",
    baLabelAfter: "AFTER (100% Sanitized)",

    // 7-Step Method
    stepTag: "7-STEP PROTOCOL",
    stepTitle: "Scientific 7-Step Cleaning Process",
    stepSubtitle: "Our comprehensive mechanized method ensures hospital-grade hygiene for drinking water.",
    step1Title: "Mechanized Dewatering",
    step1Desc: "Fast draining of dirty bottom water using submersible pumps without terrace mess.",
    step2Title: "150-Bar Pressure Jet",
    step2Desc: "Blasts off stubborn mineral calcification, algae, and slime from interior walls.",
    step3Title: "Sludge Vacuum Extraction",
    step3Desc: "Industrial vacuum suction removes heavy mud, sand, and decayed silt particles.",
    step4Title: "Anti-Bacterial Scrub",
    step4Desc: "100% food-grade, chemical-safe solution scrubbed into all corners and joints.",
    step5Title: "Safe Sterilization",
    step5Desc: "Eliminates microscopic bacteria (E. coli, coliform) and hidden fungal spores.",
    step6Title: "Final Freshwater Rinse",
    step6Desc: "Complete freshwater wash ensuring zero remaining residue and crystal clarity.",
    step7Title: "100% Safe Drinking Water",
    step7Desc: "Your tank is pure, sanitized, and odorless. Safe for your family's cooking, bathing, and drinking.",

    // FAQs
    faqTag: "FAQS",
    faqTitle: "Frequently Asked Questions",
    faq1Q: "How long does it take to clean a 1000L Sintex tank?",
    faq1A: "A standard 1000L tank takes approximately 45 to 60 minutes using our mechanized dewatering and 150-bar pressure jet system.",
    faq2Q: "Do I need to empty the tank before you arrive?",
    faq2A: "No, our team brings high-speed submersible pumps to dewater the tank. However, using normal water beforehand helps prevent water wastage.",
    faq3Q: "Do you use harsh chemical bleaches in drinking tanks?",
    faq3A: "No. We only use 100% food-grade anti-bacterial agents that are non-toxic, odorless, and completely safe for drinking water.",
    faq4Q: "Which areas in and around Puttur do you cover?",
    faq4A: "We provide prompt doorstep service across Puttur City, Darbe, Bolwar, Kabaka, Kombettu, Sampya, Uppinangady, Vitla, Sullia, Bellare, and surrounding DK regions.",

    // Navigation
    navReviews: "Reviews",

    // Reviews & Social Proof
    reviewsTag: "CUSTOMER REVIEWS",
    reviewsTitle: "Trusted by Over 500+ Homes in Puttur",
    reviewsSubtitle: "See what our satisfied customers across Puttur and DK have to say about our cleaning quality.",
    review1Text: "Got our 2000L Sintex tank cleaned in Darbe. The 150-bar jet machine removed all green slime and sludge within 45 mins. Water is crystal clear now!",
    review1Author: "Prashanth Shetty",
    review1Loc: "Darbe, Puttur",
    review2Text: "Very professional team. They cleaned our underground borewell sump and interlock driveway in Bolwar. Super neat work and on-time arrival.",
    review2Author: "Dr. Rajesh Kumar",
    review2Loc: "Bolwar, Puttur",
    review3Text: "Affordable fixed price without any hidden charges. The food-grade sanitizer left zero bad chemical smell in our drinking water tank.",
    review3Author: "Fathima Banu",
    review3Loc: "Kabaka, Puttur",
    review4Text: "Excellent bathroom tiles acid wash and tank sanitization before our house warming function in Kombettu. Highly recommended!",
    review4Author: "Santhosh Gowda",
    review4Loc: "Kombettu, Puttur",
    areaTag: "SERVICE COVERAGE",
    areaTitle: "Doorstep Cleaning Across Puttur & Surrounding Regions",
    areaSubtitle: "We arrive at your doorstep equipped with submersible pumps, jet washers, and trained personnel.",

    // Contact
    contactTag: "CONTACT",
    contactTitle: "Book Your Doorstep Cleaning Today",
    contactSubtitle: "Call our direct phone line or message us on WhatsApp for fast doorstep service in Puttur.",
    formTitle: "Quick Slot Booking Form",
    formSubtitle: "Fill in details to send directly to our WhatsApp booking number.",
    formName: "Full Name *",
    formPhone: "Phone / WhatsApp Number *",
    formService: "Service Required *",
    formLocation: "Location / Area in Puttur *",
    formDate: "Preferred Date",
    formNotes: "Notes",
    formBtn: "Submit to WhatsApp (+91 7204616137)",
    footerCopy: "© 2026 Puttur Home Care. All rights reserved. • Contact: 7204616137",

    // Marketing & Urgency Elements
    promoAlert: "🔥 PUTTUR MONSOON / FESTIVE SPECIAL: Flat ₹100 OFF on Tank + Sump Combo! Code: PUTTUR100",
    promoCountdownLabel: "Offer ends in:",
    promoClaimBtn: "Claim ₹100 OFF",
    
    // Health Risks & PAS
    healthTag: "HEALTH WARNING",
    healthTitle: "Is Your Water Tank Secretly Making Your Family Sick?",
    healthSubtitle: "Over 80% of waterborne illnesses in Puttur homes originate from uncleaned overhead tanks accumulating invisible bacteria, moss, and toxic sludge.",
    healthRisk1Title: "Slime & Bacterial Sludge",
    healthRisk1Desc: "Stagnant sludge breeds dangerous E. Coli and Coliform bacteria, leading to stomach flu, food poisoning, and recurring viral infections.",
    healthRisk2Title: "Severe Hair Fall & Skin Rashes",
    healthRisk2Desc: "Borewell mineral calcification and fungal spores in water irritate scalp hair roots, causing accelerated hair loss and chronic skin allergies.",
    healthRisk3Title: "Hidden Dead Pests & Toxins",
    healthRisk3Desc: "Loose tank lids allow dead lizards, insects, and bird droppings to decompose silently at the tank base, turning tap water toxic.",

    // Comparison Matrix
    compareTag: "SMART COMPARISON",
    compareTitle: "Ordinary Broom Cleaner vs Puttur Home Care",
    compareSubtitle: "Why risking your tank with manual bucket-and-broom cleaning costs more in the long run.",
    compareCol1: "Service Feature",
    compareCol2: "Ordinary Local Cleaner",
    compareCol3: "Puttur Home Care (150-Bar)",
    compRow1: "Cleaning Technology",
    compRow1Bad: "Manual bucket, broom & caustic chemical bleach",
    compRow1Good: "Mechanized 150-Bar German Jet + Sludge Vacuum Extractor",
    compRow2: "Safety for Drinking",
    compRow2Bad: "Toxic chemical odor lingering for days",
    compRow2Good: "100% Eco-Friendly Food-Grade Non-toxic Sanitizer",
    compRow3: "Corner Sludge & Algae",
    compRow3Bad: "Leaves 40% hidden mud & scratches plastic",
    compRow3Good: "100% Pore-deep high-pressure sterilization",
    compRow4: "Water Wastage & Mess",
    compRow4Bad: "Floods terrace, 3-4 hours manual struggle",
    compRow4Good: "Fast 45-min neat automated drainage pump",
    compRow5: "Hygiene Guarantee",
    compRow5Bad: "No guarantee, no customer accountability",
    compRow5Good: "100% Cleanliness Guarantee or Free Re-clean",

    // Interactive Coupon Voucher
    couponTag: "EXCLUSIVE LOCAL OFFER",
    couponTitle: "Unlock Your ₹100 Doorstep Voucher",
    couponSubtitle: "Click below to reveal today's verified discount code for Puttur residents.",
    couponClickToReveal: "🎁 Tap to Reveal Coupon Code",
    couponRevealedMsg: "🎉 Code PUTTUR100 Applied! Flat ₹100 OFF on your booking.",
    couponClaimBtn: "Claim ₹100 OFF via WhatsApp",

    // Annual Maintenance (AMC) Packages
    amcTag: "ANNUAL SAVINGS",
    amcTitle: "Yearly Family Water Health Shield (AMC)",
    amcSubtitle: "Keep your family's water pure 365 days a year with scheduled automated cleanings & heavy discounts.",
    amcPlan1Title: "Standard Shield (Overhead Tank)",
    amcPlan1Price: "₹1,499 / Year",
    amcPlan1Save: "Save ₹500/yr",
    amcPlan1F1: "2 Deep Tank Cleanings per year (Every 6 months)",
    amcPlan1F2: "Free pipe airlock & sediment inspection",
    amcPlan1F3: "Priority doorstep slot within 24 hours",
    amcPlan1Btn: "Choose Standard Shield",
    amcPlan2Title: "Total Home Protection (Tank + Sump + Interlock)",
    amcPlan2Price: "₹2,799 / Year",
    amcPlan2Save: "Save ₹1,100/yr (Best Value)",
    amcPlan2F1: "2 Overhead Tanks + 2 Sump Cleanings/year",
    amcPlan2F2: "1 Free Compound Interlock Jet Wash (Worth ₹999)",
    amcPlan2F3: "15% discount on all home cleaning services",
    amcPlan2Btn: "Choose Total Protection",

    // Neighbor & Community Group Discount
    neighborTag: "COMMUNITY BONUS",
    neighborTitle: "Book with Your Neighbor & Both Save ₹150!",
    neighborSubtitle: "When 2 or more homes in the same street or apartment book together, our team passes fuel savings directly to you.",
    neighborBtn: "Book Group Cleaning on WhatsApp",

    // Triple Zero-Risk Guarantees
    guaranteeTag: "100% PEACE OF MIND",
    guaranteeTitle: "Our Triple Zero-Risk Guarantee",
    g1Title: "100% Satisfaction or Free Re-Clean",
    g1Desc: "If you find any residue or dirt left, our technician will re-clean your tank on the spot for free.",
    g2Title: "100% Food-Grade Safe",
    g2Desc: "Zero harsh bleaching odors. Safe for newborn baby baths, cooking, and direct drinking.",
    g3Title: "Pay After Full Inspection",
    g3Desc: "Zero advance deposit required. Inspect your shining clean tank with your own eyes, then pay via UPI or cash."
  },
  
  kn: {
    // Top Bar
    topArea: "ಪುತ್ತೂರು • ದರ್ಬೆ • ಬೊಳುವಾರು • ಕಬಕ • ಉಪ್ಪಿನಂಗಡಿ • ಸುಳ್ಯ • ವಿಟ್ಲ",
    topHours: "ಬೆಳಿಗ್ಗೆ 7:00 – ರಾತ್ರಿ 8:00 (ಎಲ್ಲಾ ದಿನಗಳು)",
    
    // Header Nav
    navServices: "ಸೇವೆಗಳು",
    navPricing: "ದರಪಟ್ಟಿ",
    navCalculator: "ದರ ಲೆಕ್ಕಾಚಾರ",
    navProcess: "7-ಹಂತದ ವಿಧಾನ",
    navBeforeAfter: "ಮೊದಲು ಮತ್ತು ನಂತರ",
    navFaqs: "ಪ್ರಶ್ನೋತ್ತರಗಳು",
    navContact: "ಸಂಪರ್ಕಿಸಿ",
    btnCall: "ಕರೆ ಮಾಡಿ",
    btnWhatsApp: "ವಾಟ್ಸಾಪ್ ಬುಕಿಂಗ್",
    
    // Hero
    heroBadge: "ಪುತ್ತೂರಿನಲ್ಲಿ ವೃತ್ತಿಪರ ವಾಟರ್ ಟ್ಯಾಂಕ್ & ಹೋಮ್ ಕ್ಲೀನಿಂಗ್ ಸೇವೆ",
    liveBookingText: "ಪುತ್ತೂರಿನಲ್ಲಿ ಇಂದೇ ಸೇವೆಗೆ ಬುಕಿಂಗ್ ಲಭ್ಯವಿದೆ",
    heroTitle: "ಶುದ್ಧ ಕುಡಿಯುವ ನೀರು & ಸಂಪೂರ್ಣ ಸ್ವಚ್ಛ ಮನೆ",
    heroSubtitle: "150-ಬಾರ್ ಹೈ-ಪ್ರೆಶರ್ ಜೆಟ್ ವಾಟರ್ ಟ್ಯಾಂಕ್ ಕ್ಲೀನಿಂಗ್, ಅಂಡರ್‌ಗ್ರೌಂಡ್ ಸಂಪ್ ಕ್ಲೀನಿಂಗ್, ಇಂಟರ್‌ಲಾಕ್ ವಾಶ್ ಮತ್ತು ಮನೆ ಡೀಪ್ ಕ್ಲೀನಿಂಗ್ ಸೇವೆಗಳು.",
    stat1Count: "500+",
    stat1Label: "ಪುತ್ತೂರಿನಲ್ಲಿ ಟ್ಯಾಂಕ್ ಕ್ಲೀನ್",
    stat2Count: "4.9 ★",
    stat2Label: "ಗೂಗಲ್ ವೆರಿಫೈಡ್ ರೇಟಿಂಗ್",
    stat3Count: "100%",
    stat3Label: "ಆಹಾರ ಸುರಕ್ಷಿತ ಕ್ಲೀನಿಂಗ್",
    quickOverhead: "ಓವರ್‌ಹೆಡ್ ಟ್ಯಾಂಕ್ ₹800",
    quickSump: "ಅಂಡರ್‌ಗ್ರೌಂಡ್ ಸಂಪ್ ₹1,200",
    quickInterlock: "ಇಂಟರ್‌ಲಾಕ್ ವಾಶ್ ₹999",
    feature1Title: "100% ಸುರಕ್ಷಿತ",
    feature1Desc: "ಫುಡ್-ಗ್ರೇಡ್ ಸುರಕ್ಷಿತ ಕ್ಲೀನರ್ಸ್",
    feature2Title: "150-ಬಾರ್ ಜೆಟ್ ವಾಶ್",
    feature2Desc: "ಸಂಪೂರ್ಣ ಪಾಚಿ & ಕೆಸರು ನಿವಾರಣೆ",
    feature3Title: "ತರಬೇತಿ ಪಡೆದ ಸಿಬ್ಬಂದಿ",
    feature3Desc: "ತ್ವರಿತ ಡೋರ್‌ಸ್ಟೆಪ್ ಸೇವೆ",
    heroBtnWhatsApp: "ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಬುಕ್ ಮಾಡಿ",
    heroBtnCalc: "ದರ ಲೆಕ್ಕ ಹಾಕಿ",
    heroCardLabel: "ಓವರ್‌ಹೆಡ್ ಟ್ಯಾಂಕ್ ಕ್ಲೀನಿಂಗ್ (500L)",
    heroCardPrice: "ಕೇವಲ ₹800 ರಿಂದ ಆರಂಭ",
    heroCardBtn: "ಬುಕ್ ಮಾಡಿ",
    
    // Services Section
    servicesTag: "ನಮ್ಮ ಸೇವೆಗಳು",
    servicesTitle: "ವೃತ್ತಿಪರ ಕ್ಲೀನಿಂಗ್ & ನೈರ್ಮಲ್ಯ ಸೇವೆಗಳು",
    servicesSubtitle: "ಆಧುನಿಕ ಯಂತ್ರೋಪಕರಣಗಳೊಂದಿಗೆ ಪುತ್ತೂರಿನಾದ್ಯಂತ ಮನೆ ಬಾಗಿಲಿಗೆ ಸೇವೆ.",
    
    s1Title: "ಓವರ್‌ಹೆಡ್ ವಾಟರ್ ಟ್ಯಾಂಕ್ ಕ್ಲೀನಿಂಗ್",
    s1Desc: "ಸಿಂಟೆಕ್ಸ್ & ಪಿವಿಸಿ ಟ್ಯಾಂಕ್‌ಗಳ 7-ಹಂತದ ಯಾಂತ್ರಿಕ ಕ್ಲೀನಿಂಗ್ (500L ನಿಂದ 3000L+). 150-ಬಾರ್ ಹೈ-ಪ್ರೆಶರ್ ಜೆಟ್‌ನಿಂದ ಕಲ್ಮಶ, ಪಾಚಿ ಹಾಗೂ ಬ್ಯಾಕ್ಟೀರಿಯಾಗಳ ಸಂಪೂರ್ಣ ನಿವಾರಣೆ.",
    s1Price: "₹800 / 500L",
    
    s2Title: "ಅಂಡರ್‌ಗ್ರೌಂಡ್ ಸಂಪ್ ಕ್ಲೀನಿಂಗ್",
    s2Desc: "ನೆಲದಡಿಯ ಸಂಪ್‌ಗಳಲ್ಲಿ ಜಮೆಯಾಗುವ ಬೋರ್‌ವೆಲ್ ಮರಳು, ಹೂಳು ಮತ್ತು ಕೆಸರನ್ನು ಪಂಪ್ ಹಾಗೂ ವ್ಯಾಕ್ಯೂಮ್ ಮೂಲಕ ಸ್ವಚ್ಛಗೊಳಿಸಿ ಸ್ಯಾನಿಟೈಸ್ ಮಾಡುತ್ತೇವೆ.",
    s2Price: "₹1,200 / ಸಂಪ್",
    
    s3Title: "ಇಂಟರ್‌ಲಾಕ್ & ಪೇವರ್ ವಾಶ್",
    s3Desc: "ಮಳೆಯಿಂದ ಉಂಟಾಗುವ ಜಾರುವ ಪಾಚಿ, ಕಪ್ಪು ಶಿಲೀಂಧ್ರ ಹಾಗೂ ಕೊಳೆಯನ್ನು ಹೈ-ಪ್ರೆಶರ್ ವಾಷರ್ ಮೂಲಕ ಸಂಪೂರ್ಣ ತೊಳೆದು ಹೊಸದರಂತೆ ಮಾಡುತ್ತೇವೆ.",
    s3Price: "₹999 / ಜಾಗ",
    
    s4Title: "ಮನೆ ಡೀಪ್ ಕ್ಲೀನಿಂಗ್",
    s4Desc: "ವಿಲ್ಲಾ ಹಾಗೂ ಮನೆಗಳಿಗೆ ಹಬ್ಬದ ಮುನ್ನ, ಗೃಹಪ್ರವೇಶ ಅಥವಾ ಮನೆ ಬದಲಾವಣೆ ಸಮಯದ ಸಂಪೂರ್ಣ ಆಳವಾದ ಶುಚಿಗೊಳಿಸುವಿಕೆ ಸೇವೆ.",
    s4Price: "ಪರಿಶೀಲಿಸಿ ದರ",
    
    s5Title: "ಟೈಲ್ಸ್ & ಬಾತ್‌ರೂಮ್ ಆಸಿಡ್ ವಾಶ್",
    s5Desc: "ಬೋರ್‌ವೆಲ್ ನೀರಿನಿಂದ ಉಂಟಾಗುವ ಗಟ್ಟಿ ಹಳದಿ ಕಲೆಗಳು, ಉಪ್ಪಿನ ಕಲೆಗಳು ಮತ್ತು ಟೈಲ್ಸ್ ಕಲೆಗಳ ಸುರಕ್ಷಿತ ಕ್ಲೀನಿಂಗ್.",
    s5Price: "₹499 / ಬಾತ್‌ರೂಮ್",
    
    s6Title: "ಮನೆ ಪೇಂಟಿಂಗ್ & ವಾಟರ್‌ಪ್ರೂಫಿಂಗ್",
    s6Desc: "ಕರಾವಳಿಯ ಮಳೆಗೆ ತಡೆದುಕೊಳ್ಳುವ ಗುಣಮಟ್ಟದ ಒಳಾಂಗಣ ಮತ್ತು ಹೊರಾಂಗಣ ಪೇಂಟಿಂಗ್ ಹಾಗೂ ತೇವಾಂಶ ತಡೆಗಟ್ಟುವ ವಾಟರ್‌ಪ್ರೂಫಿಂಗ್.",
    s6Price: "ಉಚಿತ ಸಲಹೆ",

    btnCalcPrice: "ದರ ಲೆಕ್ಕ ಹಾಕಿ",
    btnInquire: "ವಿಚಾರಿಸಿ",
    btnCallPainter: "ಪೇಂಟರ್‌ಗೆ ಕರೆ ಮಾಡಿ",

    // Pricing Section
    pricingTag: "ಅಧಿಕೃತ ದರಪಟ್ಟಿ",
    pricingTitle: "ಸಿಂಟೆಕ್ಸ್ ವಾಟರ್ ಟ್ಯಾಂಕ್ ಕ್ಲೀನಿಂಗ್ ದರಗಳು",
    pricingSubtitle: "ಪುತ್ತೂರಿನಲ್ಲಿ ವಾಟರ್ ಟ್ಯಾಂಕ್‌ಗಳಿಗೆ ನಿಗದಿತ ಪ್ರಮಾಣಿತ ದರಗಳು. ಯಾವುದೇ ಹೆಚ್ಚುವರಿ ಗುಪ್ತ ಶುಲ್ಕವಿಲ್ಲ.",
    thCapacity: "ಟ್ಯಾಂಕ್ ಸಾಮರ್ಥ್ಯ",
    thInclusions: "ಒಳಗೊಂಡಿರುವ ಸೇವೆ",
    thCharges: "ನಿಗದಿತ ಶುಲ್ಕ",
    tInclusionText: "ಡೀವ್ಯಾಟರಿಂಗ್, 150-ಬಾರ್ ಜೆಟ್ & ಸುರಕ್ಷಿತ ಸ್ಯಾನಿಟೈಸ್",
    tScrubText: "ಡೀಪ್ ಸ್ಕ್ರಬ್ & ಯಾಂತ್ರಿಕ ಜೆಟ್ ವಾಶ್",
    tMultiText: "ಸಂಪೂರ್ಣ ಹೈ-ಪ್ರೆಶರ್ ಡೀಪ್ ಕ್ಲೀನ್",
    qrTitle: "ನೇರ ಸಂಪರ್ಕ & ಇನ್‌ಸ್ಟಾಗ್ರಾಮ್ QR",
    qrDesc: "ಇನ್‌ಸ್ಟಾಗ್ರಾಮ್ ಅಥವಾ ವಾಟ್ಸಾಪ್ ಮೂಲಕ ನೇರವಾಗಿ ಬುಕ್ ಮಾಡಲು ಸ್ಕ್ಯಾನ್ ಮಾಡಿ.",

    // Calculator Section
    calcTag: "ತ್ವರಿತ ದರಪಟ್ಟಿ",
    calcTitle: "ತ್ವರಿತ ಸೇವಾ ದರ ಕ್ಯಾಲ್ಕುಲೇಟರ್",
    calcSubtitle: "ನಿಮ್ಮ ಟ್ಯಾಂಕ್ ಸಾಮರ್ಥ್ಯ ಮತ್ತು ಹೆಚ್ಚುವರಿ ಸೇವೆಗಳನ್ನು ಆರಿಸಿ ತಕ್ಷಣವೇ ಅಂದಾಜು ದರ ತಿಳಿಯಿರಿ.",
    calcStep1: "1. ಟ್ಯಾಂಕ್ ಸಾಮರ್ಥ್ಯ ಆಯ್ಕೆಮಾಡಿ:",
    calcStep2: "2. ಹೆಚ್ಚುವರಿ ಸೇವೆಗಳು (ಆಯ್ಕೆ):",
    calcSump: "ಅಂಡರ್‌ಗ್ರೌಂಡ್ ಸಂಪ್ ಕ್ಲೀನಿಂಗ್",
    calcInterlock: "ಕಾಂಪೌಂಡ್ ಇಂಟರ್‌ಲಾಕ್ ಜೆಟ್ ವಾಶ್",
    calcFloor: "ಮನೆ ಫ್ಲೋರ್ ಮೆಷಿನ್ ಸ್ಕ್ರಬ್",
    calcTile: "ಬಾತ್‌ರೂಮ್ ಟೈಲ್ಸ್ ಆಸಿಡ್ ವಾಶ್ (₹499/ಒಂದಕ್ಕೆ)",
    calcSummaryTitle: "ದರ ಸಾರಾಂಶ",
    calcSubtotal: "ಒಟ್ಟು ಮೊತ್ತ:",
    calcComboSave: "10% ಕಾಂಬೊ ರಿಯಾಯಿತಿ:",
    calcTotal: "ಅಂತಿಮ ಅಂದಾಜು ದರ:",
    calcBtnWhatsApp: "ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಬುಕ್ ಮಾಡಿ (+91 7204616137)",

    // Before After Section
    baTag: "ಸ್ಪಷ್ಟ ಫಲಿತಾಂಶ",
    baTitle: "ಸ್ವಚ್ಛತೆಯ ಮೊದಲು ಮತ್ತು ನಂತರ",
    baSubtitle: "ನಮ್ಮ ಹೈ-ಪ್ರೆಶರ್ ಮೆಷಿನ್ ಕ್ಲೀನಿಂಗ್ ನೀಡುವ ಸ್ಪಷ್ಟ ವ್ಯತ್ಯಾಸವನ್ನು ನೋಡಿ.",
    baTabTank: "ವಾಟರ್ ಟ್ಯಾಂಕ್ ಕ್ಲೀನಿಂಗ್",
    baTabInterlock: "ಇಂಟರ್‌ಲಾಕ್ ಪೇವರ್ ವಾಶ್",
    baTabTiles: "ಬಾತ್‌ರೂಮ್ ಟೈಲ್ಸ್ ವಾಶ್",
    baLabelBefore: "ಮೊದಲು (ಕೊಳಕು / ಪಾಚಿ)",
    baLabelAfter: "ನಂತರ (100% ಶುದ್ಧ)",

    // 7-Step Method
    stepTag: "7-ಹಂತದ ವಿಧಾನ",
    stepTitle: "ವೈಜ್ಞಾನಿಕ 7-ಹಂತದ ಶುದ್ಧೀಕರಣ ವಿಧಾನ",
    stepSubtitle: "ನಾವು ಕೇವಲ ಸೋಪ್ ನೀರಿನಿಂದ ತೊಳೆಯುವುದಿಲ್ಲ - ಆಸ್ಪತ್ರೆ ದರ್ಜೆಯ ಶುದ್ಧತೆಗೆ 7 ಹಂತಗಳನ್ನು ಅನುಸರಿಸುತ್ತೇವೆ.",
    step1Title: "ಯಾಂತ್ರಿಕ ನೀರು ಖಾಲಿ ಮಾಡುವುದು",
    step1Desc: "ಸಬ್‌ಮರ್ಸಿಬಲ್ ಪಂಪ್ ಬಳಸಿ ಉಳಿದ ಕೊಳಕು ನೀರನ್ನು ಟೆರೇಸ್‌ನಲ್ಲಿ ಗಲೀಜು ಮಾಡದೆ ಖಾಲಿ ಮಾಡುವುದು.",
    step2Title: "150-ಬಾರ್ ಹೈ ಪ್ರೆಶರ್ ಜೆಟ್",
    step2Desc: "ಟ್ಯಾಂಕ್ ಗೋಡೆಗಳಲ್ಲಿ ಅಂಟಿಕೊಂಡಿರುವ ಗಟ್ಟಿ ಉಪ್ಪಿನ ಪದರ ಹಾಗೂ ಹಸಿರು ಪಾಚಿಯನ್ನು ಜೆಟ್ ಮೂಲಕ ತೆಗೆಯುವುದು.",
    step3Title: "ಕೆಸರು & ಹೂಳು ವ್ಯಾಕ್ಯೂಮ್",
    step3Desc: "ಟ್ಯಾಂಕ್ ತಳದಲ್ಲಿ ಕುಳಿತಿರುವ ಮಣ್ಣು ಮತ್ತು ಮರಳಿನ ಕಣಗಳನ್ನು ವ್ಯಾಕ್ಯೂಮ್ ಮೂಲಕ ಹೀರಿ ತೆಗೆಯುವುದು.",
    step4Title: "ಆಂಟಿ-ಬ್ಯಾಕ್ಟೀರಿಯಲ್ ಸ್ಕ್ರಬ್",
    step4Desc: "100% ಆಹಾರ ಸುರಕ್ಷಿತ ಹಾಗೂ ರಾಸಾಯನಿಕ ರಹಿತ ದ್ರಾವಣದಿಂದ ಎಲ್ಲಾ ಮೂಲೆಗಳನ್ನು ಕೈಯಾರೆ ಉಜ್ಜುವುದು.",
    step5Title: "ಸುರಕ್ಷಿತ ಸೋಂಕು ನಿವಾರಣೆ",
    step5Desc: "ಕಣ್ಣಿಗೆ ಕಾಣದ ಅಪಾಯಕಾರಿ ಬ್ಯಾಕ್ಟೀರಿಯಾಗಳು (E. coli, coliform) ಮತ್ತು ಶಿಲೀಂಧ್ರಗಳನ್ನು ನಾಶಪಡಿಸುವುದು.",
    step6Title: "ಶುದ್ಧ ನೀರಿನಿಂದ ಅಂತಿಮ ವಾಶ್",
    step6Desc: "ಶುದ್ಧ ನೀರಿನಿಂದ ಸಂಪೂರ್ಣವಾಗಿ ತೊಳೆದು ಯಾವುದೇ ಕಲ್ಮಶ ಉಳಿಯದಂತೆ ಮಾಡುವುದು.",
    step7Title: "100% ಕುಡಿಯಲು ಸುರಕ್ಷಿತ ನೀರು",
    step7Desc: "ನಿಮ್ಮ ವಾಟರ್ ಟ್ಯಾಂಕ್ ಈಗ ವಾಸನೆ ರಹಿತವಾಗಿದ್ದು, ಕುಡಿಯಲು ಮತ್ತು ಅಡುಗೆಗೆ 100% ಸುರಕ್ಷಿತವಾಗಿದೆ.",

    // FAQs
    faqTag: "ಪ್ರಶ್ನೋತ್ತರಗಳು",
    faqTitle: "ಸಾಮಾನ್ಯವಾಗಿ ಕೇಳಲಾಗುವ ಪ್ರಶ್ನೆಗಳು",
    faq1Q: "1000L ಸಿಂಟೆಕ್ಸ್ ಟ್ಯಾಂಕ್ ಕ್ಲೀನ್ ಮಾಡಲು ಎಷ್ಟು ಸಮಯ ಬೇಕು?",
    faq1A: "ನಮ್ಮ 150-ಬಾರ್ ಪ್ರೆಶರ್ ಮೆಷಿನ್ ಬಳಸಿ 45 ರಿಂದ 60 ನಿಮಿಷಗಳಲ್ಲಿ ಸಂಪೂರ್ಣ ಕ್ಲೀನಿಂಗ್ ಮುಗಿಯುತ್ತದೆ.",
    faq2Q: "ನೀವು ಬರುವ ಮುನ್ನ ನಾವು ಟ್ಯಾಂಕ್ ಖಾಲಿ ಮಾಡಬೇಕೇ?",
    faq2A: "ಅಗತ್ಯವಿಲ್ಲ, ನಮ್ಮ ಬಳಿ ಪಂಪ್‌ಗಳಿವೆ. ಆದರೆ ನೀರು ವ್ಯರ್ಥವಾಗದಂತೆ ಮೊದಲೇ ಬಳಸುವುದು ಉತ್ತಮ.",
    faq3Q: "ಕುಡಿಯುವ ನೀರಿನ ಟ್ಯಾಂಕ್‌ಗೆ ಹಾನಿಕಾರಕ ರಾಸಾಯನಿಕಗಳನ್ನು ಬಳಸುತ್ತೀರಾ?",
    faq3A: "ಖಂಡಿತ ಇಲ್ಲ. ನಾವು ಕೇವಲ 100% ಫುಡ್-ಗ್ರೇಡ್ ಮತ್ತು ಕುಡಿಯುವ ನೀರಿಗೆ ಸುರಕ್ಷಿತವಾದ ದ್ರಾವಣಗಳನ್ನು ಬಳಸುತ್ತೇವೆ.",
    faq4Q: "ಪುತ್ತೂರಿನ ಯಾವೆಲ್ಲಾ ಪ್ರದೇಶಗಳಲ್ಲಿ ಸೇವೆ ನೀಡುತ್ತೀರಿ?",
    faq4A: "ಪುತ್ತೂರು ನಗರ, ದರ್ಬೆ, ಬೊಳುವಾರು, ಕಬಕ, ಕೊಂಬೆಟ್ಟು, ಸಂಪ್ಯ, ಉಪ್ಪಿನಂಗಡಿ, ವಿಟ್ಲ, ಸುಳ್ಯ, ಬೆಳ್ಳಾರೆ ಹಾಗೂ ಸುತ್ತಮುತ್ತಲಿನ ಪ್ರದೇಶಗಳಲ್ಲಿ ಡೋರ್‌ಸ್ಟೆಪ್ ಸೇವೆ ನೀಡುತ್ತೇವೆ.",

    // Navigation
    navReviews: "ಗ್ರಾಹಕರ ವಿಮರ್ಶೆ",

    // Reviews & Social Proof
    reviewsTag: "ಗ್ರಾಹಕರ ಅಭಿಪ್ರಾಯ",
    reviewsTitle: "ಪುತ್ತೂರಿನ 500+ ಮನೆಗಳ ವಿಶ್ವಾಸಾರ್ಹ ಸೇವೆ",
    reviewsSubtitle: "ನಮ್ಮ ಯಾಂತ್ರಿಕ ಕ್ಲೀನಿಂಗ್ ಸೇವೆಯ ಬಗ್ಗೆ ಪುತ್ತೂರಿನ ಗ್ರಾಹಕರು ಏನು ಹೇಳುತ್ತಾರೆ ತಿಳಿಯಿರಿ.",
    review1Text: "ದರ್ಬೆಯಲ್ಲಿ ನಮ್ಮ 2000L ಸಿಂಟೆಕ್ಸ್ ಟ್ಯಾಂಕ್ ಕ್ಲೀನ್ ಮಾಡಿಸಿದೆವು. 150-ಬಾರ್ ಜೆಟ್ ಮೆಷಿನ್‌ನಿಂದ ಕೇವಲ 45 ನಿಮಿಷಗಳಲ್ಲಿ ಪಾಚಿ ಸಂಪೂರ್ಣ ಮಾಯವಾಯಿತು. ನೀರು ಈಗ ಸ್ಪಟಿಕದಂತೆ ಶುದ್ಧವಾಗಿದೆ!",
    review1Author: "ಪ್ರಶಾಂತ್ ಶೆಟ್ಟಿ",
    review1Loc: "ದರ್ಬೆ, ಪುತ್ತೂರು",
    review2Text: "ತುಂಬಾ ವೃತ್ತಿಪರ ತಂಡ. ಬೊಳುವಾರಿನಲ್ಲಿ ನಮ್ಮ ಅಂಡರ್‌ಗ್ರೌಂಡ್ ಸಂಪ್ ಮತ್ತು ಇಂಟರ್‌ಲಾಕ್ ಕ್ಲೀನಿಂಗ್ ಮಾಡಿಸಿದರು. ನಿಗದಿತ ಸಮಯಕ್ಕೆ ಬಂದು ಅಚ್ಚುಕಟ್ಟಾಗಿ ಕೆಲಸ ಮಾಡಿದರು.",
    review2Author: "ಡಾ. ರಾಜೇಶ್ ಕುಮಾರ್",
    review2Loc: "ಬೊಳುವಾರು, ಪುತ್ತೂರು",
    review3Text: "ಯಾವುದೇ ಗುಪ್ತ ಶುಲ್ಕವಿಲ್ಲದ ನಿಗದಿತ ದರ. ಫುಡ್-ಗ್ರೇಡ್ ಸ್ಯಾನಿಟೈಸರ್ ಬಳಸಿದ್ದರಿಂದ ಕುಡಿಯುವ ನೀರಿನಲ್ಲಿ ಯಾವುದೇ ರಾಸಾಯನಿಕ ವಾಸನೆ ಉಳಿಯಲಿಲ್ಲ.",
    review3Author: "ಫಾತಿಮಾ ಬಾನು",
    review3Loc: "ಕಬಕ, ಪುತ್ತೂರು",
    review4Text: "ಕೊಂಬೆಟ್ಟಿನಲ್ಲಿ ನಮ್ಮ ಗೃಹಪ್ರವೇಶಕ್ಕೆ ಮುನ್ನ ಬಾತ್‌ರೂಮ್ ಟೈಲ್ಸ್ ಆಸಿಡ್ ವಾಶ್ ಮತ್ತು ಟ್ಯಾಂಕ್ ಕ್ಲೀನಿಂಗ್ ಮಾಡಿಸಿದ್ದೆವು. ಅತ್ಯುತ್ತಮ ಕೆಲಸ!",
    review4Author: "ಸಂತೋಷ್ ಗೌಡ",
    review4Loc: "ಕೊಂಬೆಟ್ಟು, ಪುತ್ತೂರು",
    areaTag: "ಸೇವಾ ವ್ಯಾಪ್ತಿ",
    areaTitle: "ಪುತ್ತೂರು ಮತ್ತು ಸುತ್ತಮುತ್ತಲಿನ ಮನೆ ಬಾಗಿಲಿಗೆ ಸೇವೆ",
    areaSubtitle: "ಸಬ್‌ಮರ್ಸಿಬಲ್ ಪಂಪ್, ಹೈ-ಪ್ರೆಶರ್ ಜೆಟ್ ಮತ್ತು ಅನುಭವಿ ಸಿಬ್ಬಂದಿಯೊಂದಿಗೆ ನಿಮ್ಮ ಮನೆ ಬಾಗಿಲಿಗೆ ಬರುತ್ತೇವೆ.",

    // Contact
    contactTag: "ಸಂಪರ್ಕಿಸಿ",
    contactTitle: "ಇಂದೇ ನಿಮ್ಮ ಮನೆ ಬಾಗಿಲಿಗೆ ಸೇವೆ ಬುಕ್ ಮಾಡಿ",
    contactSubtitle: "ಪುತ್ತೂರಿನಲ್ಲಿ ತ್ವರಿತ ಸೇವೆಗಾಗಿ ನೇರವಾಗಿ ಕರೆ ಮಾಡಿ ಅಥವಾ ವಾಟ್ಸಾಪ್ ಸಂದೇಶ ಕಳುಹಿಸಿ.",
    formTitle: "ತ್ವರಿತ ಬುಕಿಂಗ್ ಫಾರ್ಮ್",
    formSubtitle: "ವಿವರಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ ನೇರವಾಗಿ ವಾಟ್ಸಾಪ್‌ಗೆ ಕಳುಹಿಸಿ.",
    formName: "ಪೂರ್ಣ ಹೆಸರು *",
    formPhone: "ಫೋನ್ / ವಾಟ್ಸಾಪ್ ನಂಬರ್ *",
    formService: "ಬೇಕಾದ ಸೇವೆ *",
    formLocation: "ಪುತ್ತೂರಿನಲ್ಲಿ ನಿಮ್ಮ ಸ್ಥಳ / ಏರಿಯಾ *",
    formDate: "ಬೇಕಾದ ದಿನಾಂಕ",
    formNotes: "ವಿಶೇಷ ಸೂಚನೆಗಳು",
    formBtn: "ವಾಟ್ಸಾಪ್‌ಗೆ ಸಲ್ಲಿಸಿ (+91 7204616137)",
    footerCopy: "© 2026 ಪುತ್ತೂರು ಹೋಮ್ ಕೇರ್. ಸರ್ವ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ. • ಸಂಪರ್ಕ: 7204616137",

    // Marketing & Urgency Elements
    promoAlert: "🔥 ಪುತ್ತೂರು ಹಬ್ಬದ ಸ್ಪೆಷಲ್ ಆಫರ್: ಟ್ಯಾಂಕ್ + ಸಂಪ್ ಕಾಂಬೊಗೆ ಫ್ಲಾಟ್ ₹100 ರಿಯಾಯಿತಿ! ಕೋಡ್: PUTTUR100",
    promoCountdownLabel: "ಆಫರ್ ಮುಕ್ತಾಯಕ್ಕೆ ಉಳಿದ ಸಮಯ:",
    promoClaimBtn: "₹100 ರಿಯಾಯಿತಿ ಪಡೆಯಿರಿ",

    // Health Risks & PAS
    healthTag: "ಆರೋಗ್ಯ ಎಚ್ಚರಿಕೆ",
    healthTitle: "ನಿಮ್ಮ ನೀರಿನ ಟ್ಯಾಂಕ್ ನಿಮ್ಮ ಕುಟುಂಬದ ಆರೋಗ್ಯಕ್ಕೆ ಕಂಟಕವಾಗಿದೆಯೇ?",
    healthSubtitle: "ಪುತ್ತೂರಿನ ಮನೆಗಳಲ್ಲಿ 80% ಕ್ಕೂ ಹೆಚ್ಚು ನೀರಿನ ರೋಗಗಳು ಸ್ವಚ್ಛಗೊಳಿಸದ ಟ್ಯಾಂಕ್‌ಗಳಲ್ಲಿ ಬೆಳೆಯುವ ಕಣ್ಣಿಗೆ ಕಾಣದ ಬ್ಯಾಕ್ಟೀರಿಯಾ ಮತ್ತು ಪಾಚಿಯಿಂದ ಬರುತ್ತವೆ.",
    healthRisk1Title: "ಪಾಚಿ & ಬ್ಯಾಕ್ಟೀರಿಯಾ ಹೂಳು",
    healthRisk1Desc: "ನಿಂತ ಕೊಳಕು ನೀರಿನಲ್ಲಿ ಅಪಾಯಕಾರಿ E. Coli ಹಾಗೂ ಬ್ಯಾಕ್ಟೀರಿಯಾಗಳು ಬೆಳೆದು ಹೊಟ್ಟೆನೋವು, ಜ್ವರ ಹಾಗೂ ಸೋಂಕುಗಳಿಗೆ ಕಾರಣವಾಗುತ್ತವೆ.",
    healthRisk2Title: "ಕೂದಲು ಉದುರುವಿಕೆ & ಚರ್ಮದ ತುರಿಕೆ",
    healthRisk2Desc: "ಬೋರ್‌ವೆಲ್ ನೀರಿನ ಗಟ್ಟಿ ಉಪ್ಪು ಮತ್ತು ಶಿಲೀಂಧ್ರ ಕಣಗಳು ತಲೆಯ ನೆತ್ತಿಯನ್ನು ಹಾಳುಮಾಡಿ ಕೂದಲು ಉದುರುವಿಕೆ ಹಾಗೂ ಚರ್ಮದ ಅಲರ್ಜಿಗೆ ಕಾರಣವಾಗುತ್ತವೆ.",
    healthRisk3Title: "ಸತ್ತ ಕೀಟಗಳು & ಹಲ್ಲಿಯ ಕಲ್ಮಶ",
    healthRisk3Desc: "ಟ್ಯಾಂಕ್ ಮುಚ್ಚಳ ಸರಿಯಿಲ್ಲದಿದ್ದಾಗ ಸತ್ತ ಹಲ್ಲಿಗಳು, ಕೀಟಗಳು ಮತ್ತು ಹಕ್ಕಿ ಹಿಕ್ಕೆಗಳು ತಳದಲ್ಲಿ ಕೊಳೆತು ನೀರನ್ನು ಸಂಪೂರ್ಣ ವಿಷಕಾರಿಯಾಗಿಸುತ್ತವೆ.",

    // Comparison Matrix
    compareTag: "ಸ್ಮಾರ್ಟ್ ಹೋಲಿಕೆ",
    compareTitle: "ಸಾಮಾನ್ಯ ಕ್ಲೀನರ್ vs ಪುತ್ತೂರು ಹೋಮ್ ಕೇರ್",
    compareSubtitle: "ಸಾಮಾನ್ಯ ಕಸಪೊರಕೆ ಕ್ಲೀನಿಂಗ್‌ಗಿಂತ ನಮ್ಮ 150-ಬಾರ್ ಯಾಂತ್ರಿಕ ಕ್ಲೀನಿಂಗ್ ಹೇಗೆ ಉತ್ತಮ ತಿಳಿಯಿರಿ.",
    compareCol1: "ಕ್ಲೀನಿಂಗ್ ವೈಶಿಷ್ಟ್ಯ",
    compareCol2: "ಸಾಮಾನ್ಯ ಕ್ಲೀನರ್",
    compareCol3: "ಪುತ್ತೂರು ಹೋಮ್ ಕೇರ್ (150-ಬಾರ್)",
    compRow1: "ಕ್ಲೀನಿಂಗ್ ತಂತ್ರಜ್ಞಾನ",
    compRow1Bad: "ಕೈಯಿಂದ ಕಸಪೊರಕೆ & ಹಾನಿಕಾರಕ ಬ್ಲೀಚಿಂಗ್ ಪೌಡರ್",
    compRow1Good: "150-ಬಾರ್ ಹೈ-ಪ್ರೆಶರ್ ಜೆಟ್ + ಯಾಂತ್ರಿಕ ಸ್ಲಡ್ಜ್ ವ್ಯಾಕ್ಯೂಮ್",
    compRow2: "ಕುಡಿಯುವ ನೀರಿನ ಸುರಕ್ಷತೆ",
    compRow2Bad: "ಹಾನಿಕಾರಕ ರಾಸಾಯನಿಕ ವಾಸನೆ ದಿನಗಟ್ಟಲೆ ಇರುತ್ತದೆ",
    compRow2Good: "100% ಆಹಾರ ಸುರಕ್ಷಿತ, ವಾಸನೆ ರಹಿತ ಫುಡ್-ಗ್ರೇಡ್ ದ್ರಾವಣ",
    compRow3: "ಮೂಲೆಗಳಲ್ಲಿನ ಪಾಚಿ & ಕೆಸರು",
    compRow3Bad: "40% ಕೊಳಕು ಉಳಿಯುತ್ತದೆ, ಟ್ಯಾಂಕ್ ಪ್ಲಾಸ್ಟಿಕ್ ಹಾಳಾಗುತ್ತದೆ",
    compRow3Good: "100% ಆಳವಾದ ಶುಚಿಗೊಳಿಸುವಿಕೆ & ಪಾಚಿ ಮುಕ್ತಿ",
    compRow4: "ನೀರು ವ್ಯರ್ಥ & ಟೆರೇಸ್ ಗಲೀಜು",
    compRow4Bad: "ಟೆರೇಸ್ ತುಂಬಾ ಗಲೀಜು ನೀರು, 3-4 ಗಂಟೆ ಸಮಯ ವ್ಯರ್ಥ",
    compRow4Good: "ಕೇವಲ 45 ನಿಮಿಷ, ಪಂಪ್ ಮೂಲಕ ಅಚ್ಚುಕಟ್ಟು ಡ್ರೈನೇಜ್",
    compRow5: "ಖಾತರಿ ಮತ್ತು ಗ್ಯಾರಂಟಿ",
    compRow5Bad: "ಯಾವುದೇ ಖಾತರಿ ಇಲ್ಲ, ಜವಾಬ್ದಾರಿ ಇರುವುದಿಲ್ಲ",
    compRow5Good: "100% ತೃಪ್ತಿ ಗ್ಯಾರಂಟಿ ಅಥವಾ ಉಚಿತ ಮರು-ಕ್ಲೀನಿಂಗ್",

    // Interactive Coupon Voucher
    couponTag: "ವಿಶೇಷ ಪುತ್ತೂರು ಆಫರ್",
    couponTitle: "ನಿಮ್ಮ ₹100 ರಿಯಾಯಿತಿ ವೋಚರ್ ಪಡೆಯಿರಿ",
    couponSubtitle: "ಪುತ್ತೂರಿನ ನಿವಾಸಿಗಳಿಗಾಗಿ ಇಂದಿನ ವಿಶೇಷ ರಿಯಾಯಿತಿ ಕೂಪನ್ ಕೋಡ್ ಪಡೆಯಲು ಕ್ಲಿಕ್ ಮಾಡಿ.",
    couponClickToReveal: "🎁 ಕೂಪನ್ ಕೋಡ್ ನೋಡಲು ಕ್ಲಿಕ್ ಮಾಡಿ",
    couponRevealedMsg: "🎉 ಕೋಡ್ PUTTUR100 ಸಕ್ರಿಯವಾಗಿದೆ! ನಿಮ್ಮ ಬುಕಿಂಗ್‌ಗೆ ₹100 ರಿಯಾಯಿತಿ.",
    couponClaimBtn: "ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ₹100 ರಿಯಾಯಿತಿ ಪಡೆಯಿರಿ",

    // Annual Maintenance (AMC) Packages
    amcTag: "ವಾರ್ಷಿಕ ಉಳಿತಾಯ ಪ್ಯಾಕೇಜ್",
    amcTitle: "ವಾರ್ಷಿಕ ಕೌಟುಂಬಿಕ ವಾಟರ್ ಶೀಲ್ಡ್ (AMC)",
    amcSubtitle: "ವರ್ಷಪೂರ್ತಿ ಶುದ್ಧ ನೀರಿಗಾಗಿ ನಿಗದಿತ ಮುಂಗಡ ಕ್ಲೀನಿಂಗ್ ಪ್ಯಾಕೇಜ್ ಮೂಲಕ ₹500 ಕ್ಕೂ ಹೆಚ್ಚು ಉಳಿಸಿ.",
    amcPlan1Title: "ಸ್ಟ್ಯಾಂಡರ್ಡ್ ಶೀಲ್ಡ್ (ಓವರ್‌ಹೆಡ್ ಟ್ಯಾಂಕ್)",
    amcPlan1Price: "₹1,499 / ವರ್ಷಕ್ಕೆ",
    amcPlan1Save: "₹500 ಉಳಿತಾಯ",
    amcPlan1F1: "ವರ್ಷಕ್ಕೆ 2 ಬಾರಿ ಸಂಪೂರ್ಣ ಟ್ಯಾಂಕ್ ಕ್ಲೀನಿಂಗ್ (ಪ್ರತಿ 6 ತಿಂಗಳಿಗೊಮ್ಮೆ)",
    amcPlan1F2: "ಉಚಿತ ಪೈಪ್‌ಲೈನ್ ಮತ್ತು ಕಲ್ಮಶ ತಪಾಸಣೆ",
    amcPlan1F3: "24 ಗಂಟೆಯೊಳಗೆ ಆದ್ಯತೆಯ ಡೋರ್‌ಸ್ಟೆಪ್ ಸೇವೆ",
    amcPlan1Btn: "ಸ್ಟ್ಯಾಂಡರ್ಡ್ ಶೀಲ್ಡ್ ಆಯ್ಕೆಮಾಡಿ",
    amcPlan2Title: "ಟೋಟಲ್ ಹೋಮ್ ಶೀಲ್ಡ್ (ಟ್ಯಾಂಕ್ + ಸಂಪ್ + ಇಂಟರ್‌ಲಾಕ್)",
    amcPlan2Price: "₹2,799 / ವರ್ಷಕ್ಕೆ",
    amcPlan2Save: "₹1,100 ಉಳಿತಾಯ (ಬೆಸ್ಟ್ ವ್ಯಾಲ್ಯೂ)",
    amcPlan2F1: "ವರ್ಷಕ್ಕೆ 2 ಟ್ಯಾಂಕ್ + 2 ಅಂಡರ್‌ಗ್ರೌಂಡ್ ಸಂಪ್ ಕ್ಲೀನಿಂಗ್",
    amcPlan2F2: "1 ಬಾರಿ ಕಾಂಪೌಂಡ್ ಇಂಟರ್‌ಲಾಕ್ ವಾಶ್ ಉಚಿತ (ಮೌಲ್ಯ ₹999)",
    amcPlan2F3: "ಎಲ್ಲಾ ಗೃಹ ಸೇವೆಗಳಿಗೆ 15% ಹೆಚ್ಚುವರಿ ರಿಯಾಯಿತಿ",
    amcPlan2Btn: "ಟೋಟಲ್ ಶೀಲ್ಡ್ ಆಯ್ಕೆಮಾಡಿ",

    // Neighbor & Community Group Discount
    neighborTag: "ನೆರೆಹೊರೆಯವರ ಬೋನಸ್",
    neighborTitle: "ನಿಮ್ಮ ನೆರೆಹೊರೆಯವರೊಂದಿಗೆ ಬುಕ್ ಮಾಡಿ, ಇಬ್ಬರೂ ₹150 ಉಳಿಸಿ!",
    neighborSubtitle: "ಒಂದೇ ರಸ್ತೆ ಅಥವಾ ಅಪಾರ್ಟ್‌ಮೆಂಟ್‌ನಲ್ಲಿ 2 ಅಥವಾ ಹೆಚ್ಚು ಮನೆಗಳು ಒಟ್ಟಿಗೆ ಬುಕ್ ಮಾಡಿದಾಗ ಇಬ್ಬರಿಗೂ ತಲಾ ₹150 ವಿಶೇಷ ರಿಯಾಯಿತಿ.",
    neighborBtn: "ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಗ್ರೂಪ್ ಬುಕ್ ಮಾಡಿ",

    // Triple Zero-Risk Guarantees
    guaranteeTag: "100% ವಿಶ್ವಾಸಾರ್ಹ ಭರವಸೆ",
    guaranteeTitle: "ನಮ್ಮ ತ್ರಿವಳಿ ರಿಸ್ಕ್-ಫ್ರೀ ಗ್ಯಾರಂಟಿ",
    g1Title: "100% ತೃಪ್ತಿ ಅಥವಾ ಉಚಿತ ಮರು-ಕ್ಲೀನಿಂಗ್",
    g1Desc: "ಸ್ವಚ್ಛತೆಯಲ್ಲಿ ಯಾವುದೇ ಕೊಳಕು ಉಳಿದಿದ್ದರೆ ಸ್ಥಳದಲ್ಲೇ ಉಚಿತವಾಗಿ ಮತ್ತೊಮ್ಮೆ ಕ್ಲೀನ್ ಮಾಡಿಕೊಡುತ್ತೇವೆ.",
    g2Title: "100% ಫುಡ್-ಗ್ರೇಡ್ ಸುರಕ್ಷಿತ",
    g2Desc: "ಯಾವುದೇ ರಾಸಾಯನಿಕ ವಾಸನೆ ಇರುವುದಿಲ್ಲ. ಹಸುಗೂಸಿನ ಸ್ನಾನ, ಅಡುಗೆ ಮತ್ತು ಕುಡಿಯಲು 100% ಸುರಕ್ಷಿತ.",
    g3Title: "ಪರಿಶೀಲಿಸಿದ ನಂತರವೇ ಪಾವತಿ",
    g3Desc: "ಯಾವುದೇ ಮುಂಗಡ ಹಣ ನೀಡಬೇಕಿಲ್ಲ. ನಿಮ್ಮ ಕಣ್ಣಾರೆ ಸ್ವಚ್ಛತೆಯನ್ನು ನೋಡಿ ತೃಪ್ತರಾದ ನಂತರವಷ್ಟೇ ಹಣ ಪಾವತಿಸಿ."
  }
};

let currentLang = 'kn';

document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) window.lucide.createIcons();

  initLanguageSwitcher();
  initCalculator();
  initBeforeAfterSlider();
  initFaqAccordion();
  initMobileMenu();
  initBookingModal();
  initCountdownTimer();
  initCouponUnlocker();
  initSocialProofToast();
});

/* ==========================================================================
   Language Switcher (Default: Kannada, with instant English switch)
   ========================================================================== */
function initLanguageSwitcher() {
  const btnEn = document.getElementById("lang-btn-en");
  const btnKn = document.getElementById("lang-btn-kn");
  const mBtnEn = document.getElementById("m-lang-btn-en");
  const mBtnKn = document.getElementById("m-lang-btn-kn");

  function setLanguage(lang) {
    currentLang = lang;
    try {
      localStorage.setItem('phc_lang', lang);
    } catch (e) {}
    
    document.documentElement.lang = lang;
    const t = translations[lang] || translations.kn;

    // Update buttons
    [btnEn, mBtnEn].forEach(b => {
      if (!b) return;
      if (lang === 'en') {
        b.className = "px-2.5 py-1 rounded-md text-xs font-bold bg-sky-600 text-white shadow-sm transition";
      } else {
        b.className = "px-2.5 py-1 rounded-md text-xs font-bold text-slate-300 hover:text-white transition";
      }
    });

    [btnKn, mBtnKn].forEach(b => {
      if (!b) return;
      if (lang === 'kn') {
        b.className = "px-2.5 py-1 rounded-md text-xs font-bold bg-emerald-600 text-white shadow-sm transition font-kannada";
      } else {
        b.className = "px-2.5 py-1 rounded-md text-xs font-bold text-slate-300 hover:text-white transition font-kannada";
      }
    });

    // Translate elements with data-i18n attribute
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (t[key]) el.textContent = t[key];
    });

    // Re-calculate to update summary text
    calculateTotal();
    
    if (window.lucide) window.lucide.createIcons();
  }

  if (btnEn) btnEn.addEventListener("click", () => setLanguage('en'));
  if (btnKn) btnKn.addEventListener("click", () => setLanguage('kn'));
  if (mBtnEn) mBtnEn.addEventListener("click", () => setLanguage('en'));
  if (mBtnKn) mBtnKn.addEventListener("click", () => setLanguage('kn'));

  // Default to Kannada first (or user preference if previously chosen)
  const initialLang = localStorage.getItem('phc_lang') || 'kn';
  setLanguage(initialLang);
}

/* ==========================================================================
   Pricing & Quote Calculator
   ========================================================================== */
const TANK_PRICING = {
  0: 0,
  500: 800,
  750: 900,
  1000: 1000,
  1500: 1300,
  2000: 1600,
  2500: 1800,
  3000: 2000
};

let currentTankCapacity = 1000;
let addonSump = false;
let addonInterlock = false;
let addonTileWash = 0;
let addonFloorScrub = false;

function initCalculator() {
  const capacityBtns = document.querySelectorAll(".calc-capacity-btn");
  const sumpToggle = document.getElementById("calc-addon-sump");
  const interlockToggle = document.getElementById("calc-addon-interlock");
  const floorToggle = document.getElementById("calc-addon-floor");
  const bathCountSelect = document.getElementById("calc-addon-bath");

  if (capacityBtns.length) {
    capacityBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        capacityBtns.forEach(b => {
          b.classList.remove("border-sky-600", "bg-sky-950", "text-sky-300", "ring-2", "ring-sky-500");
          b.classList.add("border-slate-700", "bg-slate-900", "text-slate-300");
        });
        
        btn.classList.remove("border-slate-700", "bg-slate-900", "text-slate-300");
        btn.classList.add("border-sky-600", "bg-sky-950", "text-sky-300", "ring-2", "ring-sky-500");
        
        currentTankCapacity = parseInt(btn.dataset.capacity, 10);
        calculateTotal();
      });
    });
  }

  if (sumpToggle) {
    sumpToggle.addEventListener("change", (e) => {
      addonSump = e.target.checked;
      calculateTotal();
    });
  }

  if (interlockToggle) {
    interlockToggle.addEventListener("change", (e) => {
      addonInterlock = e.target.checked;
      calculateTotal();
    });
  }

  if (floorToggle) {
    floorToggle.addEventListener("change", (e) => {
      addonFloorScrub = e.target.checked;
      calculateTotal();
    });
  }

  if (bathCountSelect) {
    bathCountSelect.addEventListener("change", (e) => {
      addonTileWash = parseInt(e.target.value, 10);
      calculateTotal();
    });
  }

  calculateTotal();
}

function calculateTotal() {
  const tankPrice = TANK_PRICING[currentTankCapacity] || 0;
  const sumpPrice = addonSump ? 1200 : 0;
  const interlockPrice = addonInterlock ? 999 : 0;
  const tileWashPrice = addonTileWash * 499;
  const floorPrice = addonFloorScrub ? 1499 : 0;

  const rawTotal = tankPrice + sumpPrice + interlockPrice + tileWashPrice + floorPrice;

  const hasAddons = (addonSump || addonInterlock || addonTileWash > 0 || addonFloorScrub);
  let discount = 0;
  if (tankPrice > 0 && hasAddons) {
    discount = Math.round(rawTotal * 0.10);
  }

  const finalTotal = rawTotal - discount;

  const rawTotalDisplay = document.getElementById("calc-subtotal-display");
  const discountDisplay = document.getElementById("calc-discount-display");
  const discountRow = document.getElementById("calc-discount-row");
  const finalTotalDisplay = document.getElementById("calc-total-display");
  const summaryList = document.getElementById("calc-summary-items");
  const bookBtn = document.getElementById("calc-whatsapp-btn");

  if (rawTotalDisplay) rawTotalDisplay.textContent = `₹${rawTotal.toLocaleString("en-IN")}`;
  if (finalTotalDisplay) finalTotalDisplay.textContent = `₹${finalTotal.toLocaleString("en-IN")}`;

  if (discountRow && discountDisplay) {
    if (discount > 0) {
      discountRow.classList.remove("hidden");
      discountDisplay.textContent = `- ₹${discount.toLocaleString("en-IN")} (10% ${currentLang === 'kn' ? 'ಉಳಿತಾಯ' : 'Saved'})`;
    } else {
      discountRow.classList.add("hidden");
    }
  }

  if (summaryList) {
    let items = [];
    if (currentLang === 'kn') {
      if (tankPrice > 0) items.push(`• ಓವರ್‌ಹೆಡ್ ಟ್ಯಾಂಕ್ (${currentTankCapacity}L): ₹${tankPrice}`);
      if (addonSump) items.push(`• ಅಂಡರ್‌ಗ್ರೌಂಡ್ ಸಂಪ್: ₹${sumpPrice}`);
      if (addonInterlock) items.push(`• ಇಂಟರ್‌ಲಾಕ್ ವಾಶ್: ₹${interlockPrice}`);
      if (addonTileWash > 0) items.push(`• ಬಾತ್‌ರೂಮ್ ಟೈಲ್ಸ್ (${addonTileWash} ಬಾತ್): ₹${tileWashPrice}`);
      if (addonFloorScrub) items.push(`• ಫ್ಲೋರ್ ಮೆಷಿನ್ ಸ್ಕ್ರಬ್: ₹${floorPrice}`);
      summaryList.innerHTML = items.length ? items.map(i => `<li class="text-xs text-slate-300 font-kannada">${i}</li>`).join("") : `<li class="text-xs text-slate-400 italic font-kannada">ಯಾವುದೇ ಸೇವೆ ಆಯ್ಕೆ ಮಾಡಿಲ್ಲ</li>`;
    } else {
      if (tankPrice > 0) items.push(`• Overhead Tank Clean (${currentTankCapacity}L): ₹${tankPrice}`);
      if (addonSump) items.push(`• Underground Sump Clean: ₹${sumpPrice}`);
      if (addonInterlock) items.push(`• Interlock Jet Wash: ₹${interlockPrice}`);
      if (addonTileWash > 0) items.push(`• Bathroom Tiles Wash (${addonTileWash} Bath): ₹${tileWashPrice}`);
      if (addonFloorScrub) items.push(`• Deep Floor Machine Scrub: ₹${floorPrice}`);
      summaryList.innerHTML = items.length ? items.map(i => `<li class="text-xs text-slate-300">${i}</li>`).join("") : `<li class="text-xs text-slate-400 italic">No services selected</li>`;
    }
  }

  if (bookBtn) {
    let serviceNames = [];
    if (tankPrice > 0) serviceNames.push(`- Overhead Tank (${currentTankCapacity}L - ₹${tankPrice})`);
    if (addonSump) serviceNames.push("- Underground Sump Clean (₹1,200)");
    if (addonInterlock) serviceNames.push("- Interlock Jet Wash (₹999)");
    if (addonTileWash > 0) serviceNames.push(`- Bathroom Tiles Acid Wash (${addonTileWash} bath - ₹${tileWashPrice})`);
    if (addonFloorScrub) serviceNames.push("- Deep Floor Machine Scrub (₹1,499)");

    const msg = `Hello Puttur Home Care! 👋
I calculated a quote on your website:

*Selected Services:*
${serviceNames.join('\n')}

*Total Estimate:* ₹${finalTotal.toLocaleString("en-IN")}${discount > 0 ? ' (Includes 10% Combo Discount)' : ''}
*Location:* Puttur

Please confirm availability for booking. Thank you!`;
    
    bookBtn.href = `https://wa.me/917204616137?text=${encodeURIComponent(msg)}`;
  }
}

/* ==========================================================================
   Before & After Visual Comparison with Rock-Solid Slider
   ========================================================================== */
function initBeforeAfterSlider() {
  const rangeInput = document.getElementById("ba-range-input");
  const afterClip = document.getElementById("ba-after-clip");
  const handle = document.getElementById("ba-slider-handle");
  const tabBtns = document.querySelectorAll(".ba-tab-btn");

  const comparisonData = {
    tank: {
      name: "Sintex Overhead Water Tank (1000L)",
      beforeImg: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=1000&q=80",
      afterImg: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=1000&q=80",
      beforeNotes: "Heavy green algae, rust, bacterial sludge & borewell silt",
      afterNotes: "100% sterile, odorless, crystal-clear water ready"
    },
    interlock: {
      name: "Compound Interlock & Paver Blocks",
      beforeImg: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
      afterImg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
      beforeNotes: "Slippery black fungus, monsoon moss & dirt stains",
      afterNotes: "150-Bar jet stripped to original bright ceramic color"
    },
    tiles: {
      name: "Bathroom Tiles & Acid Wash",
      beforeImg: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80",
      afterImg: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1000&q=80",
      beforeNotes: "Hard water yellow scaling & dirty calcified grout",
      afterNotes: "Safe acid dissolved scaling with brilliant gloss"
    }
  };

  function updateSlider(val) {
    if (afterClip) afterClip.style.width = `${val}%`;
    if (handle) handle.style.left = `${val}%`;
  }

  if (rangeInput) {
    rangeInput.addEventListener("input", (e) => {
      updateSlider(e.target.value);
    });
  }

  const beforeImg = document.getElementById("ba-before-img");
  const afterImg = document.getElementById("ba-after-img");
  const serviceBadge = document.getElementById("ba-service-badge");
  const beforeDesc = document.getElementById("ba-before-desc");
  const afterDesc = document.getElementById("ba-after-desc");

  if (tabBtns.length) {
    tabBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        tabBtns.forEach(b => {
          b.classList.remove("bg-sky-600", "text-white");
          b.classList.add("bg-slate-100", "text-slate-700");
        });
        btn.classList.add("bg-sky-600", "text-white");
        btn.classList.remove("bg-slate-100", "text-slate-700");

        const type = btn.dataset.type;
        const data = comparisonData[type];
        if (data) {
          if (serviceBadge) serviceBadge.textContent = data.name;
          if (beforeImg) beforeImg.src = data.beforeImg;
          if (afterImg) afterImg.src = data.afterImg;
          if (beforeDesc) beforeDesc.textContent = data.beforeNotes;
          if (afterDesc) afterDesc.textContent = data.afterNotes;
        }
      });
    });
  }
}

/* ==========================================================================
   FAQ Accordion
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const trigger = item.querySelector(".faq-trigger");
    const content = item.querySelector(".faq-content");
    const icon = item.querySelector(".faq-icon");

    if (trigger && content) {
      trigger.addEventListener("click", () => {
        const isOpen = !content.classList.contains("hidden");
        
        faqItems.forEach(i => {
          i.querySelector(".faq-content")?.classList.add("hidden");
          const ic = i.querySelector(".faq-icon");
          if (ic) ic.style.transform = "rotate(0deg)";
        });

        if (!isOpen) {
          content.classList.remove("hidden");
          if (icon) icon.style.transform = "rotate(180deg)";
        }
      });
    }
  });
}

/* ==========================================================================
   Mobile Menu
   ========================================================================== */
function initMobileMenu() {
  const openBtn = document.getElementById("mobile-menu-btn");
  const closeBtn = document.getElementById("mobile-menu-close");
  const drawer = document.getElementById("mobile-menu-drawer");
  const navLinks = document.querySelectorAll(".mobile-nav-link");

  if (openBtn && drawer) {
    openBtn.addEventListener("click", () => drawer.classList.remove("translate-x-full"));
  }

  if (closeBtn && drawer) {
    closeBtn.addEventListener("click", () => drawer.classList.add("translate-x-full"));
  }

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (drawer) drawer.classList.add("translate-x-full");
    });
  });
}

/* ==========================================================================
   Booking Modal
   ========================================================================== */
function initBookingModal() {
  const modal = document.getElementById("booking-modal");
  const closeBtns = document.querySelectorAll(".close-booking-modal-btn");
  const form = document.getElementById("quick-booking-form");

  closeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      if (modal) modal.classList.add("hidden");
    });
  });

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("book-name")?.value || "Customer";
      const phone = document.getElementById("book-phone")?.value || "";
      const location = document.getElementById("book-location")?.value || "Puttur";
      const service = document.getElementById("book-service")?.value || "Water Tank Cleaning";
      const date = document.getElementById("book-date")?.value || "As soon as possible";
      const notes = document.getElementById("book-notes")?.value || "None";

      const message = `Hello Puttur Home Care! 👋
I would like to book a service:

*Name:* ${name}
*Phone:* ${phone}
*Location:* ${location}
*Service:* ${service}
*Preferred Date:* ${date}
*Notes:* ${notes}

Please confirm availability. Thank you!`;

      const whatsappUrl = `https://wa.me/917204616137?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");

      if (modal) modal.classList.add("hidden");
    });
  }
}

/* ==========================================================================
   Urgency Countdown Timer (Ends tonight / resets smoothly)
   ========================================================================== */
function initCountdownTimer() {
  const hoursEl = document.getElementById("countdown-hours");
  const minsEl = document.getElementById("countdown-mins");
  const secsEl = document.getElementById("countdown-secs");

  if (!hoursEl || !minsEl || !secsEl) return;

  function updateTimer() {
    const now = new Date();
    // Countdown to midnight of current day
    const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
    const diff = Math.max(0, endOfDay - now);

    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / 1000 / 60) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    hoursEl.textContent = String(hours).padStart(2, "0");
    minsEl.textContent = String(mins).padStart(2, "0");
    secsEl.textContent = String(secs).padStart(2, "0");
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

/* ==========================================================================
   Interactive Discount Coupon Voucher (Reveal & Claim)
   ========================================================================== */
function initCouponUnlocker() {
  const revealBtn = document.getElementById("reveal-coupon-btn");
  const unrevealedState = document.getElementById("coupon-unrevealed");
  const revealedState = document.getElementById("coupon-revealed");
  const copyBtn = document.getElementById("copy-coupon-btn");

  if (revealBtn && unrevealedState && revealedState) {
    revealBtn.addEventListener("click", () => {
      unrevealedState.classList.add("hidden");
      revealedState.classList.remove("hidden");
      revealedState.classList.add("animate-fade-in");
      if (window.lucide) window.lucide.createIcons();
    });
  }

  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      const code = "PUTTUR100";
      navigator.clipboard?.writeText(code).then(() => {
        copyBtn.textContent = currentLang === "kn" ? "✓ ಕಾಪಿ ಆಯಿತು!" : "✓ Copied!";
        setTimeout(() => {
          copyBtn.textContent = currentLang === "kn" ? "ಕಾಪಿ ಮಾಡಿ" : "Copy Code";
        }, 2500);
      }).catch(() => {});
    });
  }
}

/* ==========================================================================
   Live Social Proof Activity Toast (Puttur Local Verified Bookings)
   ========================================================================== */
function initSocialProofToast() {
  const toast = document.getElementById("social-proof-toast");
  const toastText = document.getElementById("toast-user-text");
  const toastLoc = document.getElementById("toast-user-loc");
  const toastTime = document.getElementById("toast-user-time");
  const toastClose = document.getElementById("toast-close-btn");

  if (!toast) return;

  const bookings = [
    {
      en: "Prashanth S. booked 1000L Overhead Tank Cleaning",
      kn: "ಪ್ರಶಾಂತ್ ಶೆಟ್ಟಿ 1000L ಓವರ್‌ಹೆಡ್ ಟ್ಯಾಂಕ್ ಕ್ಲೀನಿಂಗ್ ಬುಕ್ ಮಾಡಿದರು",
      locEn: "📍 Darbe, Puttur",
      locKn: "📍 ದರ್ಬೆ, ಪುತ್ತೂರು",
      timeEn: "5 mins ago",
      timeKn: "5 ನಿಮಿಷಗಳ ಹಿಂದೆ"
    },
    {
      en: "Dr. Rajesh K. booked Underground Sump + Interlock Wash",
      kn: "ಡಾ. ರಾಜೇಶ್ ಸಂಪ್ + ಇಂಟರ್‌ಲಾಕ್ ಜೆಟ್ ವಾಶ್ ಬುಕ್ ಮಾಡಿದರು",
      locEn: "📍 Bolwar, Puttur",
      locKn: "📍 ಬೊಳುವಾರು, ಪುತ್ತೂರು",
      timeEn: "14 mins ago",
      timeKn: "14 ನಿಮಿಷಗಳ ಹಿಂದೆ"
    },
    {
      en: "Fathima B. unlocked ₹100 OFF Promo Coupon (PUTTUR100)",
      kn: "ಫಾತಿಮಾ ಬಾನು ₹100 ರಿಯಾಯಿತಿ ಕೂಪನ್ (PUTTUR100) ಪಡೆದುಕೊಂಡರು",
      locEn: "📍 Kabaka, Puttur",
      locKn: "📍 ಕಬಕ, ಪುತ್ತೂರು",
      timeEn: "22 mins ago",
      timeKn: "22 ನಿಮಿಷಗಳ ಹಿಂದೆ"
    },
    {
      en: "Santhosh G. booked Bathroom Tiles Acid Wash + Tank Clean",
      kn: "ಸಂತೋಷ್ ಗೌಡ ಬಾತ್‌ರೂಮ್ ಟೈಲ್ಸ್ ವಾಶ್ + ಟ್ಯಾಂಕ್ ಕ್ಲೀನಿಂಗ್ ಬುಕ್ ಮಾಡಿದರು",
      locEn: "📍 Kombettu, Puttur",
      locKn: "📍 ಕೊಂಬೆಟ್ಟು, ಪುತ್ತೂರು",
      timeEn: "38 mins ago",
      timeKn: "38 ನಿಮಿಷಗಳ ಹಿಂದೆ"
    },
    {
      en: "Naveen Rai booked Annual Family Water Shield (AMC)",
      kn: "ನವೀನ್ ರೈ ವಾರ್ಷಿಕ ವಾಟರ್ ಶೀಲ್ಡ್ (AMC) ಪ್ಯಾಕೇಜ್ ಬುಕ್ ಮಾಡಿದರು",
      locEn: "📍 Sampya, Puttur",
      locKn: "📍 ಸಂಪ್ಯ, ಪುತ್ತೂರು",
      timeEn: "49 mins ago",
      timeKn: "49 ನಿಮಿಷಗಳ ಹಿಂದೆ"
    }
  ];

  let currentIndex = 0;
  let toastTimer = null;
  let isPaused = false;

  function showToast() {
    if (isPaused) return;

    const item = bookings[currentIndex];
    const isKn = currentLang === "kn";

    if (toastText) toastText.textContent = isKn ? item.kn : item.en;
    if (toastLoc) toastLoc.textContent = isKn ? item.locKn : item.locEn;
    if (toastTime) toastTime.textContent = isKn ? item.timeKn : item.timeEn;

    toast.classList.add("toast-visible");

    setTimeout(() => {
      toast.classList.remove("toast-visible");
    }, 5500);

    currentIndex = (currentIndex + 1) % bookings.length;
  }

  // Initial toast after 4 seconds
  setTimeout(() => {
    showToast();
    toastTimer = setInterval(showToast, 14000);
  }, 4000);

  toast.addEventListener("mouseenter", () => { isPaused = true; });
  toast.addEventListener("mouseleave", () => { isPaused = false; });

  if (toastClose) {
    toastClose.addEventListener("click", () => {
      toast.classList.remove("toast-visible");
      clearInterval(toastTimer);
    });
  }
}
