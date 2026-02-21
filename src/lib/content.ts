// Complete content for Concrete Lead Engine
// Contains all DIY playbook templates, scripts, and system content

export const brand = {
  name: 'Summit Concrete',
  tagline: 'Tear-out & Repour Done Right',
  phone: '(801) 555-0123',
  email: 'hello@summitconcrete.com',
  serviceArea: ['Utah County', 'Salt Lake', 'Davis', 'Summit County'],
  serviceAreas: [
    'Utah County',
    'Salt Lake County',
    'Davis County',
    'Summit County (Park City)',
  ],
  cities: {
    utahCounty: ['Orem', 'Provo', 'Lehi', 'American Fork', 'Pleasant Grove', 'Lindon', 'Saratoga Springs'],
    saltLake: ['Salt Lake City', 'Sandy', 'Draper', 'South Jordan', 'West Jordan'],
    davis: ['Bountiful', 'Farmington', 'Layton', 'Kaysville'],
    summit: ['Park City', 'Kimball Junction'],
  },
};


export const navigation = [
  { id: 'hero', label: 'Home' },
  { id: 'process', label: 'Process' },
  { id: 'proof', label: 'Our Work' },
];

export const heroContent = {
  headline: 'Stop Throwing Money at Ads That Don\'t Convert',
  subheadline: 'Build a Complete Lead Engine for Your Concrete Business',
  description: 'Your ads drive clicks. But prospects verify trust on Google Maps before they call. Without proof + reviews + fast response, you\'re burning budget.',
  diy: {
    cta: 'Get Free DIY Steps',
    badge: 'Free Playbook',
  },
  dfy: {
    cta: 'Get Done-For-You Install',
    badge: 'Full Service',
  },
};

export const systemStack = {
  headline: 'The Concrete Lead Engine',
  subheadline: 'A 4-Layer System That Converts Cold Traffic Into Booked Jobs',
  thesis: 'Concrete leads are two-step: Prospect sees ad → curiosity click. Then they verify trust on Maps/GBP + check photos + read reviews → THEN they call. If step 2 is weak, ads become expensive and low quality.',
  layers: [
    {
      id: 'acquisition',
      name: 'Acquisition Layer',
      icon: 'target',
      color: 'safety',
      description: 'Meta Ads + Lead Forms',
      details: 'Targeted Facebook/Instagram ads with instant forms and messenger campaigns that capture qualified leads in your service area.',
    },
    {
      id: 'conversion',
      name: 'Conversion Layer',
      icon: 'zap',
      color: 'safety',
      description: 'Intake + Response System',
      details: 'Fast response workflow, qualification scripts, missed-call texts, and lead tracking that turns inquiries into booked estimates.',
    },
    {
      id: 'proof',
      name: 'Proof Layer',
      icon: 'camera',
      color: 'sage',
      description: 'Photos + Videos + Content',
      details: 'Before/after galleries, process videos, and social proof that shows prospects exactly what they\'re getting.',
    },
    {
      id: 'trust',
      name: 'Trust Layer',
      icon: 'shield',
      color: 'sage',
      description: 'GBP + Reviews + Q&A',
      details: 'Optimized Google Business Profile with seeded Q&A, consistent reviews, and local authority signals.',
    },
  ],
};

export const processSteps = {
  headline: 'How We Replace Concrete Right',
  subheadline: 'Proper base prep. Clean forming. Durable finish.',
  steps: [
    {
      number: 1,
      title: 'Tear-Out & Haul',
      description: 'Remove old cracked/heaved concrete. Full demo and haul-away included in every replacement quote.',
      image: '/images/process/tearout.jpg',
    },
    {
      number: 2,
      title: 'Base Prep & Compaction',
      description: 'Proper depth, graded for drainage, mechanically compacted. This is why concrete fails or lasts.',
      image: '/images/process/base.jpg',
    },
    {
      number: 3,
      title: 'Form & Reinforce',
      description: 'Clean forms set to grade. Rebar or wire mesh when needed based on load and soil conditions.',
      image: '/images/process/form.jpg',
    },
    {
      number: 4,
      title: 'Pour & Finish',
      description: 'Pour day execution. Proper screeding, floating, and broom or smooth finish to spec.',
      image: '/images/process/pour.jpg',
    },
    {
      number: 5,
      title: 'Joint & Cure',
      description: 'Control joints cut correctly to prevent random cracking. Cure timeline communicated clearly.',
      image: '/images/process/cure.jpg',
    },
  ],
};

export const proofGallery = {
  headline: 'Our Work Across Utah',
  subheadline: 'Before/after photos from real jobs in your area',
  categories: [
    { id: 'driveways', label: 'Driveways', count: 24 },
    { id: 'patios', label: 'Patios', count: 18 },
    { id: 'rvpads', label: 'RV Pads', count: 12 },
    { id: 'sidewalks', label: 'Sidewalks', count: 8 },
  ],
  cityAlbums: [
    { city: 'Orem', jobs: 15 },
    { city: 'Lehi', jobs: 12 },
    { city: 'Provo', jobs: 10 },
    { city: 'Sandy', jobs: 8 },
    { city: 'Park City', jobs: 6 },
  ],
};

export const pricingOptions = {
  headline: 'Two Ways to Build Your Lead Engine',
  diy: {
    name: 'DIY Playbook',
    price: 'Free',
    description: 'Complete step-by-step instructions to build your own lead engine',
    features: [
      'Full GBP setup checklist',
      'Review request templates & scripts',
      'Content capture SOP',
      'Lead intake scripts',
      'Meta ads blueprint',
      'Instant form setup guide',
      'Tracking spreadsheet template',
    ],
    cta: 'Get DIY Steps',
    badge: 'Self-Service',
  },
  dfy: {
    name: 'Done-For-You Install',
    price: 'Custom',
    description: 'We build and optimize your complete lead engine',
    features: [
      'Everything in DIY, installed for you',
      'GBP optimization & verification',
      'FB/IG page setup & starter content',
      'Review system implementation',
      'Meta ads campaign build & launch',
      'Lead tracking automation',
      'Weekly optimization & reporting',
      '30-day KPI targets',
    ],
    cta: 'Get Install Quote',
    badge: 'Full Service',
    stages: [
      {
        week: '1',
        name: 'Foundation Install',
        tasks: [
          'GBP claim/verify + optimize',
          'FB/IG profile setup',
          '9 starter posts published',
          'Intake system installed',
        ],
      },
      {
        week: '2-3',
        name: 'Reviews + Proof Sprint',
        tasks: [
          'Review link + QR built',
          'Request system installed',
          'Past customer outreach',
          'Proof library organized',
        ],
      },
      {
        week: '3-4',
        name: 'Ads Launch + Stabilize',
        tasks: [
          'Meta campaigns built',
          'Lead forms + automation',
          'Launch + daily monitoring',
          'Baseline KPIs established',
        ],
      },
      {
        week: 'Month 2+',
        name: 'Optimize + Scale',
        tasks: [
          'Weekly performance review',
          'Creative refresh cycle',
          'CPL optimization',
          'Scale winners, cut losers',
        ],
      },
    ],
  },
};

// ============================================================
// DIY PLAYBOOK - COMPLETE CONTENT
// ============================================================

export const diyPlaybook = {
  title: 'The Complete Concrete Lead Engine Playbook',
  subtitle: 'Step-by-step instructions to build your own lead generation system',

  sections: [
    // D0 - SETUP DECISIONS
    {
      id: 'setup',
      title: 'D0: Setup Decisions',
      description: 'Lock in boundaries so the system doesn\'t attract bad leads',
      content: {
        requiredDecisions: [
          {
            field: 'Marketing Name',
            description: 'What shows on GBP + FB/IG + ads',
            example: '"Summit Concrete" (short brand) vs legal name',
          },
          {
            field: 'Core Services',
            description: 'Choose top 4-6 you want more of',
            options: [
              'Tear-out & replace driveway',
              'Tear-out & replace patio',
              'RV pad',
              'Sidewalk',
              'New slab (shop/garage)',
              'Stamped/exposed (only if you truly do it)',
            ],
          },
          {
            field: 'Service Area',
            description: 'Counties + key cities',
            example: 'Utah County, Salt Lake County, Davis County',
          },
          {
            field: 'Minimum Job Size',
            description: 'Set minimum ticket to filter small jobs',
            example: '$2,500 minimum or 200 sqft minimum',
          },
          {
            field: 'Primary Lead Method',
            description: 'How leads should contact you',
            options: ['Call', 'Text', 'Form', 'DM'],
          },
          {
            field: 'Lead Response Owner',
            description: 'Who answers and how fast',
            example: 'Owner answers within 5 minutes',
          },
        ],
        badLeadRules: [
          'Set minimum job size (or you\'ll get tiny patch jobs)',
          'Ask for photos immediately',
          'Ask for approximate size',
          'Ask timeline',
          'Enforce service area boundaries',
        ],
      },
    },

    // D1 - GBP SETUP
    {
      id: 'gbp',
      title: 'D1: Google Business Profile Setup',
      description: 'GBP is where people verify you after ads. Photos and reviews are the conversion engine.',
      content: {
        steps: [
          {
            id: 'claim',
            title: 'Create/Claim Profile',
            instructions: [
              'Use a Google account owned by the business/owner',
              'Go to business.google.com',
              'Search your business name',
              'If found: Claim it',
              'If not found: Create new listing',
            ],
          },
          {
            id: 'type',
            title: 'Business Type',
            instructions: [
              'If no storefront and don\'t want address shown:',
              'Choose "Service Area Business"',
              'Hide address (stored for verification but not displayed)',
            ],
          },
          {
            id: 'categories',
            title: 'Category Selection',
            primary: 'Concrete contractor',
            secondary: [
              'Concrete work',
              'Driveway contractor',
              'Patio contractor',
              'Masonry contractor (only if accurate)',
            ],
            rule: 'Don\'t add categories you don\'t want calls for',
          },
          {
            id: 'serviceArea',
            title: 'Service Area Setup',
            instructions: [
              'Add counties and top cities',
              'Keep it realistic to your actual coverage',
            ],
            utahExample: {
              'Utah County': ['Orem', 'Provo', 'Lehi', 'American Fork', 'Pleasant Grove', 'Lindon', 'Saratoga Springs'],
              'Salt Lake County': ['Salt Lake City', 'Sandy', 'Draper', 'South Jordan', 'West Jordan'],
              'Davis County': ['Bountiful', 'Farmington', 'Layton', 'Kaysville'],
              'Summit County': ['Park City', 'Kimball Junction'],
            },
          },
        ],
        descriptionTemplate: `[BUSINESS NAME] provides concrete tear-outs and new pours across [SERVICE AREA]. We specialize in driveway replacement, patios, RV pads, sidewalks, and slabs. Our process focuses on proper base prep, clean forming, reinforcement when needed, and a durable finish with correct jointing and curing. Free estimates. Fast response. Call or text [PHONE].`,
        servicesList: [
          {
            name: 'Driveway tear-out & replacement',
            description: 'Remove old slab, haul away, prep base, form, pour, finish, joint/cure',
          },
          {
            name: 'Patio tear-out & replacement',
            description: 'Full demo and repour with proper drainage consideration',
          },
          {
            name: 'RV pads (reinforced options)',
            description: 'Heavy-duty pads with reinforcement for RV/trailer weight',
          },
          {
            name: 'Sidewalks & walkways',
            description: 'New or replacement sidewalks with proper slope',
          },
          {
            name: 'New driveway pours',
            description: 'New construction driveways with full base prep',
          },
          {
            name: 'New patios / extensions',
            description: 'Expand outdoor living space with new concrete',
          },
          {
            name: 'Shop / garage slabs',
            description: 'Level, reinforced slabs for shop or garage use',
          },
          {
            name: 'Concrete demo & removal',
            description: 'As part of replacement projects, full demo included',
          },
        ],
        photoRequirements: {
          minimum: '20 photos + 3 videos',
          breakdown: [
            '6 "before" photos (cracks, heaving, slope/drainage issues)',
            '6 "during" photos (tear-out, base, compaction, forms, reinforcement)',
            '6 "after" photos (finished surface, joints, edges, broom finish)',
            '2 "crew/process" photos (tools, forms, screed—not faces)',
          ],
          videos: [
            'Tear-out clip (10-20 seconds)',
            'Pour clip (10-20 seconds)',
            'Finish clip (10-20 seconds)',
          ],
          rule: 'Real job photos beat stock. Always.',
        },
        qnaSeeds: [
          {
            question: 'Do you haul away old concrete?',
            answer: 'Yes—tear-out and haul-off included in all replacement quotes.',
          },
          {
            question: 'Do you do RV pads?',
            answer: 'Yes—RV pads available with reinforced options depending on load/soil.',
          },
          {
            question: 'Do you serve [City]?',
            answer: 'Yes—our service area includes [list your cities].',
          },
          {
            question: 'How soon can I drive on a new driveway?',
            answer: 'Typically [X] days for light use; full cure is longer. We\'ll advise based on conditions.',
          },
          {
            question: 'Do you offer free estimates?',
            answer: 'Yes—free estimates. Send photos for faster quoting.',
          },
          {
            question: 'What causes cracking/heaving?',
            answer: 'Often base prep, drainage, freeze-thaw, or improper joint spacing. We address all of these in our prep process.',
          },
        ],
        postingCadence: '1 GBP post per week (before/after + city + service). 1 new photo upload per week minimum.',
        qaChecklist: [
          'Profile verified ✅',
          'Service area correct ✅',
          'Categories accurate ✅',
          '8-12 services added ✅',
          '20+ photos uploaded ✅',
          '3+ videos uploaded ✅',
          'Q&A seeded (6-10) ✅',
          'Messaging enabled ✅',
          'First post published ✅',
        ],
      },
    },

    // D2 - REVIEWS SYSTEM
    {
      id: 'reviews',
      title: 'D2: Reviews System',
      description: 'Reviews convert second-touch prospects and drive Maps ranking',
      content: {
        setupSteps: [
          'In GBP, find "Get more reviews" → copy direct link',
          'Create a short link (bitly or branded short domain)',
          'Create a QR code pointing to the review link',
          'Print on invoice or a simple "Thanks" card',
        ],
        complianceRules: [
          'Ask ALL customers consistently (don\'t only ask "happy" ones)',
          'Don\'t offer rewards for reviews',
          'Don\'t pressure for 5 stars; ask for honest feedback',
        ],
        timing: {
          best: 'Immediately after final walkthrough when site is clean',
          secondBest: 'Evening of completion via text',
          followUps: ['2 days later', '7 days later'],
        },
        smsTemplates: [
          {
            id: 'same-day',
            label: 'Text #1 (Same Day)',
            template: `Hey [Name]—thanks again for having us out for your [driveway/patio/RV pad] in [City]. If you have 30 seconds, would you leave an honest Google review here? [LINK]

It helps a local crew a lot.`,
          },
          {
            id: 'two-days',
            label: 'Text #2 (2 Days Later)',
            template: `Hey [Name], quick follow-up—if you're willing, here's that review link again: [LINK]

If anything isn't perfect, reply here and we'll make it right.`,
          },
          {
            id: 'seven-days',
            label: 'Text #3 (7 Days Later)',
            template: `Last note—thanks again for choosing us. If you have a moment, reviews help us show up in Google when neighbors need concrete work: [LINK]`,
          },
        ],
        seoTip: 'Ask customers to mention their city and what you did (e.g., "driveway tear-out and replace in Orem")',
        replyTemplates: {
          fiveStar: `Thank you, [Name]! We appreciate you trusting us with your [job type] in [City]. Glad you're happy with the result—reach out anytime.`,
          neutral: `Thanks for the feedback, [Name]. We appreciate the opportunity and are always working to improve. If there's anything we can do, call/text us anytime.`,
          negative: `Hi [Name]—thank you for the feedback. We're sorry this wasn't the experience we aim for. Please call/text us at [phone] so we can understand what happened and make it right.`,
        },
        kpiTargets: [
          '10 review requests sent in first 2 weeks',
          '5-10 new reviews in first 30 days',
          '100% response rate to reviews',
        ],
      },
    },

    // D3 - SOCIAL PRESENCE
    {
      id: 'social',
      title: 'D3: Social Presence + Proof Content',
      description: 'When prospects click your FB/IG after seeing an ad, they need to see proof quickly',
      content: {
        accountSetup: {
          facebook: [
            'Business name matches GBP',
            'Phone number visible',
            'Service area in bio',
            '"Call Now" button configured',
          ],
          instagram: [
            'Matching name/handle',
            'Same phone number',
            'Bio: "Concrete tear-outs + new pours | Utah/SLC/Davis/Park City | Text for estimate"',
          ],
        },
        starterGrid: {
          description: 'Post these 9 before running ads',
          posts: [
            { type: 'Before/After', content: 'Driveway replacement' },
            { type: 'Before/After', content: 'Patio replacement' },
            { type: 'Before/After', content: 'RV pad' },
            { type: 'Process', content: 'Tear-out clip' },
            { type: 'Process', content: 'Base prep / compaction' },
            { type: 'Process', content: 'Pour/finish' },
            { type: 'Education', content: '"Why concrete cracks/heaves"' },
            { type: 'Education', content: '"Why base prep matters"' },
            { type: 'Education', content: '"Why joints/cure matter"' },
          ],
        },
        contentCaptureSOP: {
          photosPerJob: [
            'Before wide shot',
            'Before close-up of problem area',
            'During: tear-out in progress',
            'During: base/compaction/forms',
            'After wide shot',
            'After detail: joints/edges/finish',
          ],
          videosPerJob: [
            'Tear-out clip (action, 10-20s)',
            'Pour clip (chute/screed, 10-20s)',
            'Finish clip (broom/edge, 10-20s)',
          ],
          namingConvention: 'YYYY-MM-DD_City_Service_Type.jpg/mp4',
          storage: '/Company/Content/YEAR/MONTH/JobName_City/RAW and /SELECTS',
        },
        opusClipWorkflow: [
          'Record 1 longer "job walkthrough" video weekly (6-12 minutes)',
          'Upload to Opus Clip',
          'Generate 10-20 clips automatically',
          'Select best 8-12',
          'Edit titles: add city + job type + "tear-out + replace"',
          'Export: 6-10 short clips (15-45s), 2 medium clips (60-90s)',
        ],
        longVideoScript: {
          hook: '"This driveway failed because [heaving/cracking/drainage]. Here\'s how we replace it so it lasts." (10 seconds)',
          process: 'Tear-out and haul → Base depth + compaction → Forms + reinforcement → Pour day + finishing → Joints + cure timeline (60-120 seconds each)',
          cta: '"If you\'re in [County/City], text us photos and size for a fast estimate." (10 seconds)',
        },
        postingCadence: {
          igReels: '3/week',
          fbReels: '3/week (same content)',
          stories: '3-5/week (jobsite quick updates)',
          gbp: '1 post/week',
        },
        captionTemplate: `[CITY] Driveway tear-out + replace ✅
Removed the old slab, prepped/compacted base, formed and poured a clean broom finish with correct joints.
Want an estimate? Text photos + size. [PHONE]`,
      },
    },

    // D4 - LEAD INTAKE
    {
      id: 'intake',
      title: 'D4: Lead Intake + Response System',
      description: 'Turn leads into booked estimates fast and filter junk',
      content: {
        channels: {
          primary: ['Calls', 'Text', 'Instant form', 'DM'],
          secondary: 'Simple form that asks for photos',
        },
        qualificationFields: [
          'City',
          'Project type (driveway/patio/RV pad/sidewalk/new slab)',
          'New pour or replacement?',
          'Approx size (sqft or L×W)',
          'Photos (REQUIRED)',
          'Access constraints (tight access/slope/gate)',
          'Finish preference (broom/smooth/exposed/unsure)',
          'Timeline (ASAP / 2-4 weeks / 1-3 months)',
          'Minimum budget band (optional but recommended)',
        ],
        phoneScript: {
          open: '"Thanks for calling [BUSINESS]—this is [Name]. Are you looking for a tear-out and replacement, or a new pour?"',
          location: '"What city is the project in?"',
          scope: '"Is it a driveway, patio, RV pad, sidewalk, or slab?"',
          size: '"About how big? If you don\'t know square footage, rough length and width is perfect."',
          photos: '"The fastest way to quote is photos. Can you text 3-5 photos—wide, close-up, and any slope/drainage areas?"',
          timeline: '"When are you hoping to get it done?"',
          close: '"Great. Once I get photos and size, we can give you a rough range and schedule a time to come measure for a firm quote."',
        },
        missedCallText: '"Sorry we missed you—this is [BUSINESS]. If you text your city + a few photos + approximate size, we can give you a fast estimate."',
        responseTimeStandard: {
          goal: 'Reply under 5 minutes',
          hardMax: '30 minutes during business hours',
        },
        trackingSheet: {
          columns: [
            'Date',
            'Name',
            'Phone',
            'City',
            'Source (FB/IG/GBP)',
            'Job type',
            'Size',
            'Status',
            'Notes',
          ],
          statuses: ['New', 'Contacted', 'Photos Received', 'Estimate Set', 'Estimate Done', 'Won', 'Lost'],
        },
      },
    },

    // D5 - META ADS
    {
      id: 'meta-ads',
      title: 'D5: Meta Ads Blueprint',
      description: 'The complete Facebook/Instagram ads setup for concrete leads',
      content: {
        readinessChecklist: [
          'GBP exists and has 20+ photos ✅',
          'FB page exists and doesn\'t look empty (9 posts) ✅',
          'You have 6+ proof clips ready ✅',
          'Intake process + missed call text ready ✅',
        ],
        campaignStructure: {
          campaignA: {
            name: 'Leads (Instant Form)',
            objective: 'Leads',
            conversionLocation: 'Instant Forms',
            optimization: 'Maximize leads',
            budget: '$25-$75/day depending on capacity',
          },
          campaignB: {
            name: 'Messages',
            objective: 'Messages',
            destination: 'Instagram + Messenger',
            budget: '$15-$50/day',
          },
          campaignC: {
            name: 'Retargeting (Month 2)',
            audience: 'Video viewers (25%+) + IG engagers in last 30 days',
            budget: '$10-$25/day',
          },
        },
        geoStructure: [
          { name: 'Ad Set 1', area: 'Utah County cluster' },
          { name: 'Ad Set 2', area: 'Salt Lake County cluster' },
          { name: 'Ad Set 3', area: 'Davis County cluster' },
          { name: 'Ad Set 4', area: 'Summit/Park City cluster' },
        ],
        audienceTargeting: {
          approach: 'Start broad (Meta learns fast)',
          age: '28+ (homeowner skew)',
          exclude: 'Recent leads (if you have a list)',
          interests: 'Keep minimal unless volume is too low',
        },
        placements: 'Use Advantage+ placements initially. Refine later if junk placements appear.',
        creativeRequirements: [
          '2 before/after creatives',
          '2 process clips',
          '1 educational clip ("why it failed")',
          '1 "offer/fast estimate" clip',
        ],
        adCopyTemplates: [
          {
            label: 'Primary Text 1',
            copy: 'Cracked/heaved driveway? We remove the old slab and repour it right—base prep, clean forms, durable finish. Serving [County]. Send photos for a fast estimate.',
          },
          {
            label: 'Primary Text 2',
            copy: 'Tear-out + replace driveways, patios, RV pads. Fast response. Free estimate. Text photos + size.',
          },
        ],
        headlines: [
          'Driveway Tear-Out & Replace',
          'RV Pads + New Slabs',
          'Free Estimate — Fast Response',
        ],
        instantFormBuild: {
          formType: 'Higher Intent (filters junk when busy) or More Volume',
          introScreen: {
            title: 'Fast Concrete Estimate',
            bullets: [
              'Tear-outs + new pours',
              'Serving Utah / Salt Lake / Davis / Park City',
              'Send photos for fastest quote',
            ],
          },
          questions: [
            { field: 'Name', type: 'prefill' },
            { field: 'Phone', type: 'prefill' },
            { field: 'City', type: 'short answer' },
            { field: 'Project type', type: 'multiple choice', options: ['Driveway', 'Patio', 'RV Pad', 'Sidewalk', 'New Slab', 'Other'] },
            { field: 'New pour or replacement?', type: 'multiple choice', options: ['Tear-out & Replace', 'New Pour', 'Not sure'] },
            { field: 'Approx size', type: 'multiple choice', options: ['Under 200 sqft', '200-400 sqft', '400-600 sqft', '600+ sqft', 'Not sure'] },
            { field: 'Timeline', type: 'multiple choice', options: ['ASAP', '2-4 weeks', '1-3 months', 'Just pricing'] },
          ],
          thankYouScreen: {
            message: 'Text photos to [PHONE] for fastest quote.',
            button: 'Send Message',
          },
        },
        messageFlow: {
          autoReply: '"Thanks—what city is the project in? Please send 3-5 photos and approximate size."',
          followUp: '"Is this a tear-out/replace or a new pour? What\'s your timeline?"',
        },
        leadHandlingSOP: [
          'Every lead contacted within 5 minutes',
          'Photos requested immediately',
          'If no reply: follow up 2 hours later, then next morning',
        ],
        kpiTracking: [
          'Spend (weekly)',
          'Leads (weekly)',
          'CPL (cost per lead)',
          '% contacted',
          '% photos received',
          '% booked estimates',
          '% closed jobs',
          'Cost per booked estimate (most important)',
        ],
      },
    },
  ],
};

// ============================================================
// DFY INSTALLATION STAGES (DETAILED)
// ============================================================

export const dfyStages = {
  requiredInputs: {
    access: [
      'Google account admin OR add Utlyze as GBP manager',
      'FB Page + Business Manager admin access OR permission to create',
      'IG access OR permission to create',
      '(Optional) Call tracking tool access',
    ],
    assets: [
      'Logo or approval for clean text logo',
      '30-50 job photos minimum',
      '5-10 job videos minimum',
      'Service list + service area confirmation',
      'Minimum job size / minimum ticket',
    ],
    operations: [
      'Lead response owner + SLA (response time standard)',
      'Estimate scheduling windows',
      'Capacity limits by week',
    ],
  },
  stages: [
    {
      id: 'stage1',
      week: 'Week 1',
      name: 'Foundation Install',
      tasks: [
        'GBP claim/create + verification workflow',
        'Service-area settings and category selection',
        'Populate services list (8-12 services)',
        'Write business description',
        'Upload starter proof assets (20+ photos, 3 videos)',
        'Seed Q&A (6-10 questions)',
        'Enable messaging',
        'Create FB Page + IG profile (or cleanup existing)',
        'Publish 9 starter posts (proof + process + education)',
        'Install intake system: missed call text, intake script, lead status sheet',
      ],
      qaTests: [
        'Search business name in Google: profile shows, phone correct',
        'Click call: correct number rings',
        'Send message: gets response template',
        'FB/IG: look populated, same branding, phone matches',
        'Intake sheet: can log leads quickly',
      ],
      kpis: [
        'GBP complete and verified',
        '20 photos uploaded',
        '9 posts live',
        'Response workflow tested end-to-end',
      ],
    },
    {
      id: 'stage2',
      week: 'Weeks 2-3',
      name: 'Reviews + Proof Sprint',
      tasks: [
        'Build review link + QR assets',
        'Install request system: same day ask, 2-day follow-up, 7-day follow-up',
        'If customer database exists: import into outreach sheet, segment by recency (last 6-18 months first)',
        'Begin weekly GBP posting cadence',
        'Create proof library by job type and city',
        'Create crew capture SOP card (printable checklist)',
      ],
      qaTests: [
        'Review link works correctly',
        'QR scans to correct link',
        'At least 10 review asks sent',
        'At least 1 GBP post published',
        'Proof library organized by type/city',
      ],
      kpis: [
        '10+ review asks sent',
        'Target: 5-10 new reviews in 30 days',
        'Proof library has 30 photos + 6 clips minimum',
      ],
    },
    {
      id: 'stage3',
      week: 'Weeks 3-4',
      name: 'Ads Launch + Stabilize',
      tasks: [
        'Meta Business Manager audit/setup',
        'Campaign A Leads (instant form) built with 2-4 ad sets by region',
        'Campaign B Messages built',
        'Creative rotation installed (minimum 6 creatives)',
        'Lead form qualification built',
        'Lead handling automation: Zapier → Google Sheet, auto text/email notification',
        'Launch and monitor daily for first 72 hours',
      ],
      qaTests: [
        'Submit test lead → arrives in sheet + notification',
        'DM test → auto reply triggers and conversation prompt works',
        'Ad preview looks correct on mobile',
      ],
      kpis: [
        'CPL baseline established by day 7-10',
        'Lead-to-contact rate tracked',
        'Booked estimate rate tracked',
      ],
    },
    {
      id: 'stage4',
      week: 'Month 2+',
      name: 'Optimize + Scale',
      cadence: {
        monday: 'Performance review + adjustments',
        midweek: 'Creative refresh + proof upload',
        friday: 'Lead quality review + ops check',
      },
      optimizationRules: [
        'If CPL is fine but bookings low → fix intake/response',
        'If bookings high but close rate low → fix offer, proof, estimate process',
        'If one county is outperforming → reallocate spend',
      ],
      kpis: [
        'Downtrend CPL over 30-60 days',
        'Trend up booked estimates',
        'Trend up GBP calls/messages',
      ],
    },
  ],
};

export const testimonials = [
  {
    name: 'Mike R.',
    role: 'Summit Concrete',
    location: 'Orem, UT',
    text: 'Went from 3-4 leads a week to 15+. The system just works.',
    rating: 5,
  },
  {
    name: 'Dave T.',
    role: 'Peak Concrete',
    location: 'Sandy, UT',
    text: 'Finally understand why my ads weren\'t converting. GBP was the missing piece.',
    rating: 5,
  },
  {
    name: 'Chris M.',
    role: 'Mountain West Concrete',
    location: 'Lehi, UT',
    text: 'DFY install saved me weeks of figuring it out. ROI in the first month.',
    rating: 5,
  },
];

export const faq = [
  {
    question: 'How long until I see results?',
    answer: 'Most clients see leads within the first week of ads going live. Consistent results build over 30-60 days as the system optimizes.',
  },
  {
    question: 'Do I need a website?',
    answer: 'No. The system uses GBP, Meta lead forms, and direct messaging. A website is optional (and we can discuss if/when it makes sense).',
  },
  {
    question: 'What\'s the minimum ad budget?',
    answer: 'We recommend starting at $50-100/day to get enough data for optimization. Smaller budgets work but take longer to stabilize.',
  },
  {
    question: 'What if I already have GBP/FB?',
    answer: 'Great—we audit and optimize what you have. The system builds on your existing presence, we just make it convert better.',
  },
  {
    question: 'Do you guarantee leads?',
    answer: 'We don\'t guarantee a specific number because that would mean sending you junk. We guarantee the system will be built correctly and optimized for quality.',
  },
];
