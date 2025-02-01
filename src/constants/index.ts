import { QuoteFormData } from '@/components/QuoteModal';

export const menuItems = [
  {
    label: 'Services',
    href: '#services',
  },
  {
    label: 'Why Us?',
    href: '#why-us',
  },
  {
    label: 'About Us',
    href: '#about',
  },
  {
    label: 'Availability',
    href: '#availability',
  },
];

export const services = [
  {
    id: 1,
    title: 'Chemical Liquids',
    description:
      'Safe handling and transport of specialized chemicals, adhering to strict safety and compliance standards.',
    icon: '/assets/services/chemical-icon.png',
  },
  {
    id: 2,
    title: 'Food-Grade Liquids',
    description:
      'Ensuring clean and secure delivery of food-grade liquids with industry-leading hygiene protocols.',
    icon: '/assets/services/food-grade-icon.png',
  },
  {
    id: 3,
    title: 'Petroleum Fluids',
    description:
      'Reliable transport solutions for petroleum-based products with a focus on safety and efficiency.',
    icon: '/assets/services/petroleum-icon.png',
  },
  {
    id: 4,
    title: 'Industrial Fluids',
    description:
      'Specialized transport for a wide range of industrial liquids, prioritizing safety and efficiency.',
    icon: '/assets/services/industrial-icon.png',
  },
];

export const whyUs = [
  {
    id: 1,
    title: 'Safety First',
    description:
      'We follow strict safety standards to ensure your well-being and proper handling of every job.',
    image: '/assets/whyus/whyus1.png',
    alt: 'Safety worker image',
    tags: [
      {
        text: 'Certified Safe',
        bgColor: 'bg-green-200',
        textColor: 'text-green-800',
      },
      {
        text: 'On-Time Delivery',
        bgColor: 'bg-yellow-200',
        textColor: 'text-yellow-800',
      },
    ],
  },
  {
    id: 2,
    title: 'Modern Fleet',
    description:
      'Our state-of-the-art fleet uses new technologies for maximum safety and efficiency in every journey.',
    image: '/assets/whyus/whyus2.png',
    alt: 'Modern truck image',
    tags: [
      {
        text: 'Tech-Driven',
        bgColor: 'bg-blue-200',
        textColor: 'text-blue-800',
      },
      {
        text: 'Fully Insured',
        bgColor: 'bg-pink-200',
        textColor: 'text-pink-800',
      },
    ],
  },
  {
    id: 3,
    title: 'Customer-Focused',
    description:
      'As a family-run business, we value every client, offering service that fits your specific needs.',
    image: '/assets/whyus/whyus3.png',
    alt: 'Customer service image',
    tags: [
      {
        text: 'Community Trusted',
        bgColor: 'bg-purple-200',
        textColor: 'text-purple-800',
      },
      {
        text: 'Personal Touch',
        bgColor: 'bg-orange-200',
        textColor: 'text-orange-800',
      },
    ],
  },
];

export const testimonials = [
  {
    name: 'Melissa Ackerman',
    company: 'Auto Matrix',
    quote:
      "Xphub's service has been our go-to for liquid bulk transport for years. Their commitment to safety and reliability is unmatched",
    rating: '4.8',
    image: '/assets/start-point.png',
  },

  {
    name: 'Steve Williamns',
    company: 'Auto Matrix',
    quote:
      "Xphub's service has been our go-to for liquid bulk transport for years. Their commitment to safety and reliability is unmatched",
    rating: '4.8',
    image: '/assets/start-point.png',
  },
  {
    name: 'John Doe',
    company: 'Auto Matrix',
    quote:
      "Xphub's service has been our go-to for liquid bulk transport for years. Their commitment to safety and reliability is unmatched",
    rating: '4.8',
    image: '/assets/start-point.png',
  },

  {
    name: 'John Doe',
    company: 'Auto Matrix',
    quote:
      "Xphub's service has been our go-to for liquid bulk transport for years. Their commitment to safety and reliability is unmatched",
    rating: '4.8',
    image: '/assets/start-point.png',
  },
];

type FormField = {
  name: keyof QuoteFormData;
  label: string;
  placeholder: string;
  type: string;
  required: string;
  pattern?: { value: RegExp; message: string };
  note?: string;
};

export const formFields: FormField[][] = [
  [
    {
      name: 'companyName',
      label: 'Company Name',
      placeholder: 'Name of your company',
      type: 'text',
      required: 'Company name is required',
    },
    {
      name: 'contactName',
      label: 'Contact Name',
      placeholder: 'Name of the contact person',
      type: 'text',
      required: 'Contact name is required',
    },
  ],
  [
    {
      name: 'email',
      label: 'Email Address',
      placeholder: 'Enter your email address',
      type: 'email',
      required: 'Email is required',

      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: 'Invalid email address',
      },
    },
    {
      name: 'phone',
      label: 'Phone Number',
      placeholder: 'Enter your phone number',
      type: 'tel',
      required: 'Phone number is required',
    },
  ],
  [
    {
      name: 'commodityType',
      label: 'Commodity Type',
      placeholder: 'Type of goods being transported',
      type: 'text',
      required: 'Commodity type is required',
      note: '* Note: We transport non-hazardous commodity only',
    },
  ],
  [
    {
      name: 'pickupLocation',
      label: 'Pickup Location (City, State)',
      placeholder: 'City, State (e.g., Dallas, TX)',
      type: 'text',
      required: 'Pickup location is required',
      pattern: {
        value: /^[A-Za-z\s]+,\s*[A-Z]{2}$/i,
        message: 'Please enter in format: City, ST (e.g., Houston, TX)',
      },
    },
    {
      name: 'deliveryLocation',
      label: 'Delivery Location (City, State)',
      placeholder: 'City, State (e.g., Dallas, TX)',
      type: 'text',
      required: 'Delivery location is required',

      pattern: {
        value: /^[A-Za-z\s]+,\s*[A-Z]{2}$/i,
        message: 'Please enter in format: City, ST (e.g., Houston, TX)',
      },
    },
  ],
];
