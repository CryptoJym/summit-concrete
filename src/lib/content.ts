// Summit Concrete – Soft Brutalism Content
// Utah concrete contractor – all page content

export const brand = {
    name: 'Summit Concrete',
    tagline: "Utah's Trusted Concrete Contractor",
    phone: '801-735-6867',
    email: 'info@summitconcreteutah.com',
    address: 'Orem, UT 84057',
    city: 'Orem, Utah',
    established: 'EST. 1985',
    region: 'Utah, Salt Lake, Wasatch, and Davis Counties',
    hours: {
          weekday: 'MON-FRI: 7:00 AM - 5:00 PM',
          saturday: 'SAT: By Appointment',
    },
};

export const navigation = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/quote', label: 'Request Bid' },
  ];

export const heroContent = {
    badge: `${brand.established} // ${brand.region}`,
    headlines: ['Heavy.', 'Permanent.', 'Precise.'],
    description:
          'Structural integrity for the modern world. We execute complex concrete pours with military precision. No fluff, just results.',
    cta: 'View Capabilities',
    liveFeed: {
          label: 'LIVE FEED: SITE A-4',
          camera: {
                  iso: '800',
                  shutter: '1/200',
                  aperture: 'f/4.0',
                  temp: '104°F',
          },
    },
    heroImage:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuC9qxaAokrC9GPM7FPa2pIQNbZt88JzV4aiMGjt_ChNEsicfo1gibvC2O1CakZPEp0E_zxkT_Ezxmwvwzlgie6a1YWw7cUszKHkSPqFNbWrbA8wdQ6cuEbGyql_U7zKL_soZIqZFA6mqH74WfMgoYlnnFr_KelmAMlEVacBQ231XO5nupMNibyFycZgCWoX83aOLsNQDNxnXqzK9GbvbuImlHsWsdMieeOFDoY4I0K67Eful2YyL_Z3V7vsx7uRM4tuS3qIEzi_NXk',
    heroImageAlt:
          'High contrast black and white photo of heavy industrial concrete pouring machinery on a construction site',
};

export const tickerMetrics = [
    'YARDS POURED: 1,240,500',
    'SAFETY INCIDENTS: 0 (450 DAYS)',
    'ACTIVE RIGS: 14',
    'CREW DEPLOYED: 85',
    'PSI RATING: 5000+',
  ];

export const statsGrid = [
  {
        label: 'METRIC_01',
        value: '450',
        description: 'Days Incident Free',
        type: 'metric' as const,
  },
  {
        label: 'METRIC_02',
        value: '99.8%',
        description: 'On-Time Completion',
        type: 'metric' as const,
  },
  {
        label: 'METRIC_03',
        value: '1.2M',
        description: 'Cubic Yards Poured',
        type: 'metric' as const,
  },
  {
        label: 'ACTION',
        value: 'START A PROJECT',
        description: 'Get a Quote Today',
        type: 'action' as const,
        href: '/contact',
  },
  ];

export const projects = [
  {
        id: '8842',
        title: 'AUSTIN CENTRAL LIBRARY',
        status: 'COMPLETE',
        location: 'SLC, UT',
        quantity: '40K SQFT',
        category: 'civil',
        aspect: '4/3' as const,
        image:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuAnnKijWUnv0XWl6x1NVWZ71I40YJVik-EEPidU5NtS0geRHRJiwR1z-sVhWDhdQBAQSTiivmejs6C91ePF8FzZbfKZjtZF6Vwr00YFFuei5x5EHaQjJkpG6pUcbM_ZsixlX_FA0Akqcz61--HR6yMFdhufBmTJIsEfGvv5nmCGjYSu1aHHBR-MS3fnfsFskxhwCCzUEwkjjfGGQXJxZVqp7OsADBXvxgMoqrCDETh681X6SlPH4u4vM9t7zhuOwcvwYT0F2f-MgpM',
        imageAlt: 'Large scale concrete foundation pour at industrial site',
        imageFilename: 'IMG_8842.RAW',
  },
  {
        id: '8843',
        title: 'METRO EXPANSION LINE B',
        status: 'IN_PROGRESS',
        location: 'PROVO, UT',
        quantity: '12K SQFT',
        category: 'civil',
        aspect: '3/4' as const,
        image:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuBACbmJz9gWleKj8FpHT9Or4DEvhKqi3jSCtrrz-yDellrY1BfGR9IwomP1HXDzmQ6vTdq4uZ9pzanHmjWK8EP0h-znyrbV9euqEUmMsCAFpAIDWYTd2iejKnVjhWxKbdQbJtQDbxJKPW7i92aZJQn2dkibRhqVydBAv0oCrXLS4AajGeFr8z2nNJw3-DdE0WGTGVaYtI0wAIaZLTanLtqgHJPNJkYnAJhjxrwULLnNB6zbnaUYmHNrdIa4TnRBmq1wh8YNCRqsUcU',
        imageAlt: 'Workers smoothing wet concrete surface with tools',
        imageFilename: 'IMG_8843.RAW',
  },
  {
        id: '8844',
        title: 'WASATCH MEDICAL TOWER',
        status: 'COMPLETE',
        location: 'SANDY, UT',
        quantity: '85K SQFT',
        category: 'highrise',
        aspect: 'square' as const,
        image:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuB1of6xeRnkbnPDSUvL0S4HdmKNUB2_u9IwWHonPC2n0mbTOYHFMKqxqhQgEcNRCnibfM2c5fU7gIlIY0eZkHzzBYHV2WkDtHSQE6zXx_3DyNHIbVz1wbuxntJyn957FDFAfWCMu0Eho9o47n0fOlRQdClrOUtHUGfvu4qNBWPQEe4gTlYloBg_pBmHYtgVQsQFyHL_ALwUXoiA9m7uT_SjTl6L3Q8RXlaK8jBkNhwgwzKNwGTpsANmc_SKLxlnw3i9eF6GMLGQLkY',
        imageAlt: 'Abstract close up of reinforced concrete rebar structure',
        imageFilename: 'IMG_8844.RAW',
  },
  {
        id: '8845',
        title: 'INTERSTATE 15 OVERPASS',
        status: 'COMPLETE',
        location: 'LEHI, UT',
        quantity: '150K SQFT',
        category: 'civil',
        aspect: '16/9' as const,
        image:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuAeHlM7yyBn1JAVmcngGoXB8C3mPkaavkl7h3onFlEctQBwdxtWDFmTiZCInHdGumCOVv9ghcOFfN2ygo3b4J1j8_8qfz512wp5LQd5JU8LR7k03DDh_kbhzvvDJfkCgzYbGnrmLm-HXa_j7z7C-jVYtitosGJDpwAQ_2_9XZ0PDymBps0ZsWS5JixKNmyneaedtYqG-tZJxKHQnfMNEe_gqXGtOi_Ct5jNJqEEYlPIFTIWL6man6O0KSR9f2ZMwbtNQhSN_Asq03c',
        imageAlt: 'Wide shot of highway bridge construction with concrete pillars',
        imageFilename: 'IMG_8845.RAW',
  },
  {
        id: '8846',
        title: 'LOGISTICS HUB ALPHA',
        status: 'PENDING_REVIEW',
        location: 'WEST JORDAN, UT',
        quantity: '220K SQFT',
        category: 'industrial',
        aspect: '4/5' as const,
        image:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuDaPGR5-74E92C4KqjrR8U1eJluohw3V6aiW12l97NSNeEtQHq1dYGd9cfMjaCzTXNqh-8xTH8dykKjm15BBYMcc-JoS1RJTocnbhiolO2EkTHPVUScVtRrSuaHONv9_NHLDa0oJ7cSuGCse1HsI9WNuzsd1jXg8h7LXQgBP8JUNFcKfsFOab9gkGxQZOTAQ3prN59Gw_e0D4kAcW38dUa8YqtAy-a4vc6XPSc3c66Ei2JWs85EzR7cXL0W4OTzMZQBRjdnns3vdB0',
        imageAlt:
                'Interior of large industrial warehouse with polished concrete floors',
        imageFilename: 'IMG_8846.RAW',
  },
  ];

export const projectFilters = [
  { id: 'all', label: 'ALL SITES', icon: 'check_circle' },
  { id: 'industrial', label: 'INDUSTRIAL', icon: 'factory' },
  { id: 'civil', label: 'CIVIL', icon: 'engineering' },
  { id: 'highrise', label: 'HIGH-RISE', icon: 'location_city' },
  { id: 'municipal', label: 'MUNICIPAL', icon: 'account_balance' },
  ];

export const capabilities = [
  {
        number: '01',
        title: 'Commercial Foundations',
        specs: [
          { label: 'PSI Rating', value: '4,000 - 6,000 PSI' },
          { label: 'Rebar Grade', value: 'ASTM A615 Grade 60' },
          { label: 'Cure Time', value: '28 Days (Standard)' },
          { label: 'Tolerance', value: 'ACI 117 Class A' },
              ],
        note: 'High-sulfate resistance mix available for high-altitude regions (Type V Cement).',
        diagramLabel: 'FIG 1.1 - SECTION A',
  },
  {
        number: '02',
        title: 'Post-Tensioned Decks',
        specs: [
          { label: 'Cable Type', value: 'Unbonded Mono-Strand' },
          { label: 'Tension Strength', value: '270 ksi (Grade 270)' },
          { label: 'Span Ratio', value: 'L/45 max deflection' },
          { label: 'Anchor System', value: 'Encapsulated Cast Iron' },
              ],
        diagramLabel: 'FIG 2.4 - TENDON PROFILE',
  },
  {
        number: '03',
        title: 'Tilt-Wall Construction',
        specs: [
          { label: 'Panel Height', value: "Max 90' Unsupported" },
          { label: 'Lifting Insert', value: 'Burke 8-Ton System' },
              ],
        diagramLabel: 'FIG 3.2 - CRANE PICK',
  },
  {
        number: '04',
        title: 'Industrial Paving',
        specs: [
          { label: 'Flexural Strength', value: '650 PSI (MR)' },
          { label: 'Subgrade Modulus', value: 'k = 200 pci min' },
              ],
        diagramLabel: 'FIG 4.1 - DOWEL BAR',
  },
  ];

export const certifications = [
  { icon: 'verified_user', label: 'ISO 9001' },
  { icon: 'health_and_safety', label: 'OSHA 30' },
  { icon: 'engineering', label: 'ACI MEMBER' },
  { icon: 'foundation', label: 'CRSI CERT' },
  ];

export const crewMembers = [
  {
        name: "Mike 'Big Mike'",
        role: 'Master Finisher',
        location: 'Orem',
        image:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuCedD6qritU3jDbaMCxi3lJjWePCB1Qzz7gMcGzZLW0FxpDswshUSGRkbsFzAG4Y_28QtRxIsDkAu7vkzTA52jPPfU2BFMnVcCflKXf2e1XZyugIOs1w9nXtaYHBE9aDyDXQuLRdKHKix7Ks44lXyO6IyXioU4kzvvT_bbFczj48nX2PshD1MuC74wcO6FZqOVld7JEN8-hoQ6c6KQoLRHaBCXx1ujPUW65XZRto-VypItd57p9VudomDSToKlUT6FFuZLd2QaGVjE',
        imageAlt:
                'Portrait of a construction worker wearing a hard hat and safety glasses',
        quote:
                "Concrete waits for no one. You get it right the first time, or you tear it out. We get it right.",
        contentType: 'quote' as const,
  },
  {
        name: 'Sarah Jenkins',
        role: 'Formwork Specialist',
        location: 'Payson',
        image:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuC32D7VzErbcdwu4i01ZSV-MNKPC823kTfNDZRyHfSvyplFoeLFNboHar8GucVnykPWbhhY0r7qIkFzeWljWdtOvq0gQrJc3HOfDipFLbQX0Cx5aoVoekjy9E_kQM85fAgxZQYfSkExHeSrMhqjY8O1YYSqVMn2p_O8qGCGdXu0blyaqvAdfe2pD_OlevLTTfTxmX74-kMwdaIGa3gU0vmhEfR9J3Hfz7jRQQCs0WqkZazMQ2HuRSHQa8v-gh0Zk-oJQWwIvU2BfGE',
        imageAlt:
                'Portrait of a female construction specialist looking at blueprints',
        experience: '15+ Years',
        experienceDetail: 'on the Wasatch Front',
        contentType: 'experience' as const,
  },
  {
        name: "David 'D-Rock'",
        role: 'Site Foreman',
        location: 'SLC',
        image:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuCzWirg1Jq2qN3iXClWNRaZbeVH5eMJxMUVAzL2jayopBpwSm5b1qTcyI8afgJzhLFqArkIkQmihwwmHG8ldsqGJ4SEM2enMZ8yjK6jR009R9vmgUMUZ4DCurHp3dvPggtcjUUOjILTkZmPvkijPnnMI_7qFhay0NSGDnviYGDOrr0fnnX9720KDtVb8iLm3G3cQChAjcTg2EVC3j7dtbIdilHcVYvruogXyOoEBriYWkLx-TMDLQ9P0mgjiHircykQW7EiqOgs464',
        imageAlt:
                'Portrait of a construction foreman smiling with folded arms',
        quote:
                "Precision is the only standard. If it's not level within a millimeter, it's not finished.",
        contentType: 'quote' as const,
  },
  {
        name: 'Trevon James',
        role: 'Junior Apprentice',
        location: 'Provo',
        image:
                'https://lh3.googleusercontent.com/aida-public/AB6AXuAeyfeWAbxn4MMHgsSYLGVAIFCHnA7xswSDnaLSnER181nmyI8orPBDxA-b1k2oftlWYFqpCBcIj9X_AjRLC3YfEwwgwEElxkSDAYBeUv0J4b9R3T-3is2ZJb8XaTh57KrSvCbENrlTpeDPQ3lnaHdxQIPYUwKZOoGv8USyHlkt-goZOH_K_KDzR4cyAMYTHOe7vbsl3f4aMwct0FhgVSm-lSXQzcGDlZYBpRJ8mYqje8SQDekNx1LfRRBdxdPeSmdWG_n94oAOjPM',
        imageAlt:
                'Portrait of a young construction apprentice carrying equipment',
        experience: 'Next Gen',
        experienceDetail: 'Craftsman',
        contentType: 'experience' as const,
  },
  ];

export const quoteFormFields = {
    heading: 'ESTIMATE PROTOCOL',
    sectionLabel: 'SECTION 04 // CONTACT',
    description:
          'SERIOUS INQUIRIES ONLY. WE BUILD STRUCTURES THAT OUTLAST THE OWNERS. COMPLETE THE FORM TO INITIATE THE BIDDING SEQUENCE.',
    submitLabel: 'INITIATE BID SEQUENCE',
    responseTime: 'Est. Response Time: 4 Hours',
    disclaimer: '*By clicking you agree to site safety protocols',
    encryptedBadge: 'ENCRYPTED CONNECTION // ID: 8842-X',
    projectTypes: [
      { value: 'industrial', label: 'INDUSTRIAL SLAB' },
      { value: 'highrise', label: 'HIGH-RISE STRUCTURAL' },
      { value: 'civil', label: 'CIVIL / MUNICIPAL' },
      { value: 'residential', label: 'RESIDENTIAL COMPLEX' },
        ],
};

export const successPage = {
    badge: 'Transmission Successful',
    heading: ['Inquiry', 'Received'],
    description:
          'Thank you for contacting Summit Concrete. Your project specifications have been securely transmitted to our estimation team in Utah.',
    primaryCta: 'Return to Portfolio',
    secondaryCta: 'Download Brochure',
    refId: '#SC-8921-X',
    priority: 'High',
    timeline: [
      {
              step: 1,
              title: 'Site Analysis',
              status: 'active' as const,
              icon: 'search',
              duration: 'Est. 24-48 Hours',
              description:
                        'Our team is currently reviewing your site specifications and satellite data to determine initial feasibility and resource allocation.',
      },
      {
              step: 2,
              title: 'Technical Estimate',
              status: 'pending' as const,
              description:
                        'A detailed breakdown of materials (concrete grade, reinforcement) and labor costs tailored to your structural requirements.',
      },
      {
              step: 3,
              title: 'Logistics & Scheduling',
              status: 'pending' as const,
              description:
                        'Finalizing the pour date, equipment delivery, and site preparation checklist.',
      },
        ],
};

export const crewPage = {
    badge: 'Elite & Local',
    heading: 'The Human',
    headingGradient: 'Factor',
    description:
          "We don't sub out the hard work. Meet the elite, local craftsmen building the Wasatch Front. No suits, just boots.",
    ctaHeading: 'Ready to break ground?',
    ctaDescription:
          'Work with the best on the Wasatch Front. Schedule a site visit today.',
    ctaButton: 'Request Bid',
};

export const capabilitiesPage = {
    badge: 'ISO 9001:2015 Compliant',
    heading: 'Technical',
    headingGradient: 'Capabilities',
    description:
          'Standardized execution protocols for industrial, civil, and high-rise applications. All services strictly adhere to ACI 318-19 Building Code Requirements.',
    docRef: 'DOC_REF: SC-2024-V2',
    lastUpdated: 'LAST_UPDATED: 02.23.26',
    marqueeText:
          'Systems Nominal // Zero Incidents: 450 Days // Active Sites: 14 // Weather Alert: SLC, UT - Cold Front // Queue Status: Open //',
    certTitle: 'Certified Execution',
};
