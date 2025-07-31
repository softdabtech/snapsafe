// Mock data for SnapSafe landing page

export const mockData = {
  navigation: [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '#features' },
    { name: 'Corporate License', href: '#corporate' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' }
  ],

  features: [
    {
      id: 1,
      title: 'Offline Security',
      description: 'No external connections — works entirely offline for maximum privacy and security.',
      icon: 'Shield'
    },
    {
      id: 2,
      title: 'Editing Tools',
      description: 'Blur sensitive information, add annotations, crop, and resize with professional tools.',
      icon: 'Edit'
    },
    {
      id: 3,
      title: 'Hotkeys',
      description: 'Customizable shortcuts for quick access to capture and editing tools.',
      icon: 'Keyboard'
    },
    {
      id: 4,
      title: 'File Formats',
      description: 'Save screenshots in PNG, JPG, HEIC, or export as PDF with one click.',
      icon: 'FileImage'
    },
    {
      id: 5,
      title: 'Cross-Platform',
      description: 'Available for Windows, macOS, and Linux with consistent experience.',
      icon: 'Monitor'
    },
    {
      id: 6,
      title: 'Local Storage',
      description: 'All data stored locally on your device, ensuring complete data sovereignty.',
      icon: 'HardDrive'
    }
  ],

  faqData: [
    {
      id: 1,
      question: 'How does SnapSafe ensure my data is secure?',
      answer: 'SnapSafe operates entirely offline, with no external connections. All screenshots and data are stored locally on your device, ensuring maximum privacy and security.'
    },
    {
      id: 2,
      question: 'Can I customize hotkeys for capturing and editing?',
      answer: 'Yes, SnapSafe allows you to fully customize hotkeys for quick access to screen capture, editing tools, and saving options. You can set up shortcuts that match your workflow.'
    },
    {
      id: 3,
      question: 'Does SnapSafe support video recording?',
      answer: 'Video recording is not available in the current version but will be introduced in future updates. Currently, we focus on providing the best screenshot experience.'
    },
    {
      id: 4,
      question: 'What file formats does SnapSafe support?',
      answer: 'SnapSafe supports saving screenshots in PNG, JPG, HEIC, and exporting them as PDF. You can choose the format that best suits your needs.'
    },
    {
      id: 5,
      question: 'Is SnapSafe suitable for corporate environments?',
      answer: 'Absolutely. SnapSafe offers corporate licenses with support for mass deployment and centralized management, perfect for teams and organizations.'
    },
    {
      id: 6,
      question: 'What platforms does SnapSafe support?',
      answer: 'SnapSafe is available for Windows, macOS, and Linux. We ensure consistent functionality and user experience across all platforms.'
    }
  ],

  corporateFeatures: [
    'Mass deployment support',
    'Centralized management',
    'Volume licensing discounts',
    'Priority technical support',
    'Custom branding options',
    'Advanced security compliance'
  ]
};