// All page copy lives here. Text comes from https://hikeassociate.com/ unless a
// comment says otherwise, so content updates never require touching components.
import {
  Award,
  BadgeCheck,
  BarChart3,
  Building2,
  CalendarClock,
  ChartNoAxesCombined,
  Clock,
  ClipboardList,
  FileSearch,
  FileText,
  Gavel,
  Handshake,
  Headphones,
  HeartHandshake,
  Landmark,
  LayoutGrid,
  MessageSquareText,
  Percent,
  Scale,
  Settings2,
  ShieldAlert,
  ShieldCheck,
  Target,
  TrendingUp,
  UserRound,
  Users,
  Wallet,
  type LucideIcon,
} from 'lucide-react'
import type { PhotoName } from './photos'

export interface CoreService {
  id: string
  icon: LucideIcon
  image: PhotoName
  title: string
  points: string[]
}

export interface SettlementOption {
  icon: LucideIcon
  image: PhotoName
  title: string
  text: string
}

export interface Testimonial {
  quote: string
  author: string
}

export interface LoginLink {
  href: string
  label: string
  icon: LucideIcon
  tone: 'admin' | 'employee'
}

export const company = {
  name: 'Hike Associate',
  legalName: 'Hike Associate Pvt. Ltd.',
  phoneDisplay: '+91 78358 25502',
  phoneHref: 'tel:+917835825502',
  email: 'backend@hikeassociate.com',
  address: 'Dwarka, Near by Metro Station',
  postalAddress: { street: 'Near by Metro Station', locality: 'Dwarka', region: 'New Delhi', country: 'IN' },
  tagline: 'We specialize in bank recovery solutions and customer support services.',
}

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/for-businesses', label: 'For Businesses' },
  { href: '/for-individuals', label: 'For Individuals' },
  { href: '/contact', label: 'Contact' },
]

// The staff portal, hosted separately from this site.
export const loginLinks: LoginLink[] = [
  { href: 'https://hrms.hikeassociate.com/admin/login', label: 'Admin Login', icon: ShieldCheck, tone: 'admin' },
  { href: 'https://hrms.hikeassociate.com/login', label: 'Employee Login', icon: UserRound, tone: 'employee' },
]

export const hero = {
  // Eyebrow and headline are from the approved design; supporting copy is from the site.
  eyebrow: ['Debt Recovery', 'Customer Support', 'Financial Stability'],
  titleLines: ['Building Trust.', 'Recovering Value.'],
  text: 'We specialize in debt and asset recovery, offering efficient and reliable solutions for individuals and businesses.',
  trust: [
    { icon: Landmark, label: 'Trusted by Financial Institutions' },
    { icon: ShieldCheck, label: 'Ethical & Compliant' },
    { icon: Headphones, label: '24/7 Customer Support' },
  ],
  floating: [
    { icon: ChartNoAxesCombined, title: 'Proven Strategies', text: 'Maximize recoveries' },
    { icon: Handshake, title: 'Lasting Trust', text: 'Built with integrity' },
    { icon: Users, title: 'Customer First', text: 'Personalized solutions' },
  ],
}

// The live site's own counters are published as 0, so these use only figures its text supports, plus the years of
// experience supplied by the company.
export const stats = [
  { icon: Landmark, value: 4, suffix: '+', label: 'Years of Experience' },
  { icon: Clock, value: 24, suffix: '/7', label: 'Customer Support' },
  { icon: Users, value: 3, suffix: '', label: 'Founding Partners' },
  { icon: LayoutGrid, value: 6, suffix: '', label: 'Core Service Lines' },
]

export const homeServices = [
  {
    icon: Landmark,
    title: 'Debt Recovery',
    text: 'Strategic debt recovery with a professional and ethical approach.',
    href: '/services#bank-recovery',
  },
  {
    icon: FileText,
    title: 'One-Time Settlement',
    text: 'A single payment to close the account.',
    href: '/for-individuals#settlement-options',
  },
  {
    icon: Handshake,
    title: 'Negotiated Settlements',
    text: 'Tailored solutions based on financial circumstances.',
    href: '/for-individuals#settlement-options',
  },
  {
    icon: Headphones,
    title: 'Customer Support',
    text: 'Round-the-clock voice and non-voice support for prompt, reliable assistance.',
    href: '/services#customer-support',
  },
  {
    icon: Building2,
    title: 'Business Process Outsourcing',
    text: 'Customer service outsourcing to reduce operational costs.',
    href: '/services#bpo',
  },
  {
    icon: Settings2,
    title: 'Customized Solutions',
    text: 'A unique settlement plan that works for both the client and the creditor.',
    href: '/for-individuals#settlement-options',
  },
]

export const coreServices: CoreService[] = [
  {
    id: 'bank-recovery',
    icon: Landmark,
    image: 'phone-pay',
    title: 'Bank Recovery & Debt Collection',
    points: [
      'Strategic debt recovery with a professional and ethical approach.',
      'Legal and compliance-driven collection methods.',
      'Customer-friendly negotiation to ensure smooth settlements.',
    ],
  },
  {
    id: 'customer-support',
    icon: Headphones,
    image: 'agreement',
    title: 'Voice & Non-Voice Customer Support',
    points: [
      '24/7 inbound & outbound call support to handle customer queries.',
      'Email & chat assistance for seamless communication.',
      'Issue resolution & follow-up support to improve customer satisfaction.',
      'Multi-language support to cater to diverse customer bases.',
    ],
  },
  {
    id: 'bpo',
    icon: Building2,
    image: 'office',
    title: 'Business Process Outsourcing (BPO)',
    points: [
      'Customer service outsourcing to reduce operational costs.',
      'Back-office support for administrative and financial processes.',
      'Lead generation & telemarketing to help businesses grow.',
    ],
  },
  {
    id: 'loan-recovery',
    icon: Wallet,
    image: 'documents',
    title: 'Loan & Credit Card Recovery Services',
    points: [
      'Follow-ups on overdue payments to minimize defaults.',
      'Soft recovery & negotiations for better customer relationships.',
      'Legal advisory for financial disputes and compliance.',
      'Credit risk assessment to prevent future losses.',
    ],
  },
  {
    id: 'consultancy',
    icon: BarChart3,
    image: 'consult',
    title: 'Financial Consultancy & Risk Management',
    points: [
      'Risk assessment & fraud detection for financial institutions.',
      'Credit portfolio analysis to improve lending strategies.',
      'Guidance on compliance & regulatory frameworks.',
      'Customized financial recovery plans for businesses.',
    ],
  },
  {
    id: 'fraud-prevention',
    icon: ShieldAlert,
    image: 'finance',
    title: 'Fraud Prevention & Dispute Resolution',
    points: [
      'Proactive fraud detection systems to prevent financial loss.',
      'Dispute resolution support for financial institutions.',
      'Secure handling of sensitive customer data.',
      'Legal compliance & reporting assistance.',
    ],
  },
]

export const specialistServices = [
  {
    icon: BarChart3,
    title: 'Data Analytics & Reporting',
    text: 'Performance tracking for recovery teams and customer behavior analysis to improve recovery success rates.',
  },
  {
    icon: Wallet,
    title: 'Loan & Credit Card Recovery Services',
    text: 'Follow-ups on overdue payments to minimize defaults.',
  },
  {
    icon: Landmark,
    title: 'First-Party & Third-Party Debt Collection',
    text: 'Acting as a representative for banks & financial institutions.',
  },
  {
    icon: Gavel,
    title: 'Legal Assistance for Loan & Debt Recovery',
    text: 'Providing legal support for unresolved debts and assisting in court proceedings related to overdue payments.',
  },
  {
    icon: CalendarClock,
    title: 'Late Payment Recovery & Follow-Up',
    text: 'Early-stage collection strategies to minimize overdue accounts, with customized follow-up plans to encourage timely payments.',
  },
  {
    icon: Handshake,
    title: 'Loan Settlement & Negotiation Services',
    text: 'Assisting customers in settling overdue loans amicably.',
  },
]

export const settlementIntro =
  'Our company specializes in providing effective and flexible settlement options to help individuals and businesses resolve their financial obligations seamlessly. We understand that every situation is unique, which is why we offer tailored solutions to meet diverse needs.'

export const settlementOptions: SettlementOption[] = [
  {
    icon: FileText,
    image: 'office',
    title: 'One-Time Settlement',
    text: 'A single payment to close the account.',
  },
  {
    icon: CalendarClock,
    image: 'finance',
    title: 'Installment Plans',
    text: 'Spread payments over a mutually agreed timeline.',
  },
  {
    icon: Handshake,
    image: 'payment',
    title: 'Negotiated Settlements',
    text: 'Tailored solutions based on financial circumstances.',
  },
  {
    icon: Settings2,
    image: 'agreement',
    title: 'Customized Solutions',
    text: 'Crafting a unique settlement plan that works for both the client and the creditor.',
  },
  {
    icon: Percent,
    image: 'phone-pay',
    title: 'Early Settlement Benefits',
    text: 'Offering incentives or discounts for settling accounts before the due date.',
  },
  {
    icon: Scale,
    image: 'consult',
    title: 'Legal and Mediated Settlements',
    text: 'Facilitating resolution through legal or mediation channels for complex cases.',
  },
]

export const audiences = {
  business: {
    tag: 'For Businesses',
    title: 'Solutions for Financial Institutions and Businesses',
    text: 'We are dedicated to helping businesses recover debts, enhance customer experience, and optimize financial operations, all while maintaining the highest ethical standards.',
    points: [
      'Bank Recovery & Debt Collection',
      'Voice & Non-Voice Customer Support',
      'Business Process Outsourcing',
      'Financial Consultancy & Risk Management',
    ],
    cta: 'Partner With Us',
    href: '/for-businesses',
  },
  individual: {
    tag: 'For Individuals',
    title: 'Guidance for a Better Financial Tomorrow',
    text: 'Our goal is to make the settlement process simple, transparent, and stress-free, helping clients regain financial stability with minimal hassle.',
    points: [
      'One-Time Settlement',
      'Installment Plans',
      'Negotiated Settlements',
      'Early Settlement Benefits',
      'Legal and Mediated Settlements',
    ],
    cta: 'Get Guidance',
    href: '/for-individuals',
  },
}

// The live site has no process section, so these steps come from the approved design.
export const processSteps = [
  {
    icon: MessageSquareText,
    title: 'Understand Requirements',
    text: 'We listen to your needs and financial circumstances.',
  },
  {
    icon: FileSearch,
    title: 'Analyze the Situation',
    text: 'Detailed assessment of accounts and options.',
  },
  {
    icon: Target,
    title: 'Create a Strategy',
    text: 'A tailored plan that fits your situation.',
  },
  {
    icon: TrendingUp,
    title: 'Execute & Support',
    text: 'Professional execution with continuous follow-up.',
  },
]

export const whyChoose = [
  {
    icon: Award,
    title: 'Expertise in Debt Recovery',
    short: 'Proven strategies that minimize losses and maximize recoveries.',
    text: 'We specialize in recovering debts effectively and efficiently. With a team of professionals experienced in financial recovery processes, we ensure that our clients recover their dues in a timely and compliant manner. Our proven strategies minimize losses and maximize recoveries, safeguarding your financial interests.',
  },
  {
    icon: ShieldCheck,
    title: 'Ethical Practices',
    short: 'Transparent, compliant processes that are fair to all stakeholders.',
    text: 'We operate with integrity and adhere to the highest ethical standards. Our processes are transparent, compliant with all legal and regulatory requirements, and focused on maintaining fairness for all stakeholders involved, fostering a trustworthy reputation.',
  },
  {
    icon: HeartHandshake,
    title: 'Customer-Centric Approach',
    short: 'Personalized solutions that build long-lasting relationships.',
    text: 'At the core of our services is a customer-first philosophy. We prioritize understanding and addressing the unique needs of every client and customer, ensuring personalized solutions that build long-lasting relationships. Our approach reflects our commitment to delivering value with empathy and integrity.',
  },
  {
    icon: Users,
    title: 'Highly Skilled Team',
    short: 'Well-trained professionals backed by continuous skill development.',
    text: 'Our team comprises well-trained professionals with expertise across various domains, including debt recovery, settlement support, and customer support. We invest in continuous training and skill enhancement to ensure that our staff stays ahead of industry trends and delivers exceptional results.',
  },
  {
    icon: Headphones,
    title: 'Comprehensive Customer Support',
    short: 'Round-the-clock support through voice and non-voice channels.',
    text: 'We offer round-the-clock customer support through both voice and non-voice channels, ensuring that your customers receive prompt and reliable assistance. Our dedicated support executives are trained to handle queries, resolve issues, and provide a seamless experience, fostering trust and loyalty.',
  },
]

export const testimonials: Testimonial[] = [
  { quote: 'Customers appreciate our fast and efficient recovery process.', author: 'Bajaj Finance' },
  { quote: 'Many clients praise our tailored solutions that cater to their specific needs.', author: 'DBS Bank India' },
  { quote: 'Clients value our honest and clear communication throughout the process.', author: 'NIRA Finance' },
]

// Tata Capital was supplied by the company; the others are the clients named in the testimonials above.
export const customers = ['Tata Capital', ...testimonials.map(({ author }) => author)]

export const contactSection = {
  text: 'Have questions or need assistance? We’re here to help! Whether you’re looking for bank recovery solutions or customer service expertise, our team is ready to assist you.',
  highlights: ['Professional Debt Recovery Solutions', 'Legal & Negotiation Support', 'Fast & Transparent Process'],
  interests: [
    'Bank Recovery & Debt Collection',
    'Loan & Credit Card Recovery',
    'Loan Settlement & Negotiation',
    'Customer Support Services',
    'Business Process Outsourcing',
    'Financial Consultancy & Risk Management',
    'Other',
  ],
}

export const about = {
  intro: [
    'At Hike Associate, we specialize in bank recovery solutions and customer support services. Our mission is to assist financial institutions in recovering outstanding dues efficiently while ensuring ethical and customer-friendly interactions.',
    'Our team of highly skilled professionals includes voice and non-voice customer support executives who ensure seamless communication, handling inquiries and resolving concerns with professionalism and care.',
  ],
  storyTitle: 'The Story of Three Partners: A Vision to Restore Financial Stability',
  storyIntro:
    'In the heart of the financial recovery industry, three driven individuals came together with one shared vision: to restore financial stability for both banks and their clients. Each brought unique expertise, and together, they formed an unstoppable force within the banking recovery sector.',
  partners: [
    {
      icon: Target,
      initials: 'RS',
      name: 'Rohit Sharma',
      role: 'The Owner',
      badge: 'A Visionary Leader',
      summary:
        'The owner brings a wealth of experience and a visionary approach, ensuring the agency’s continued growth and commitment to client success.',
      text: 'With years of experience in the financial industry, the owner had seen firsthand the struggles that banks face with unpaid loans and the growing risks that arise from bad debts. Driven by a passion for financial recovery, they set out to create an agency that would not only help banks recover funds but also offer clients a fair and respectful process. Their deep understanding of the industry provided the foundation for the company, making it a trusted partner to every bank it served.',
    },
    {
      icon: ClipboardList,
      initials: 'PS',
      name: 'Priyanka Sharma',
      role: 'The CEO',
      badge: 'The Strategic Innovator',
      summary:
        'The CEO leads with strategic insight and a focus on innovation, driving the company toward achieving its goals while maintaining exceptional service standards.',
      text: 'An astute strategist with a knack for problem-solving, the CEO joined forces with the owner to turn the vision into reality. Having worked in management and recovery systems for years, the CEO designed a modern, efficient structure that could handle high-volume cases with precision, integrating cutting-edge technology and data analytics to track unpaid debts. Under this leadership, the company scaled rapidly, expanding its reach across multiple financial institutions, with a leadership style focused on teamwork.',
    },
    {
      icon: UserRound,
      initials: 'S',
      name: 'Surender',
      role: 'The Partner',
      badge: 'The Dedicated Liaison',
      summary:
        'Our partner provides valuable expertise and collaborative solutions, strengthening our ability to deliver effective financial recovery services with integrity.',
      text: 'The partner brought an invaluable set of skills: a deep understanding of relationships and communication. They worked directly with clients, ensuring that every financial situation was handled with care and understanding. Whether coordinating with field staff or connecting with clients who had fallen behind on payments, the partner was the essential link that made the recovery process smooth, building trust with both banks and individuals.',
    },
  ],
  team: [
    {
      icon: Headphones,
      title: 'Callers',
      text: 'The callers work tirelessly from their offices, reaching out to individuals who have missed payments. Their ability to engage in meaningful conversations with debtors, offering solutions and alternatives, is key to the agency’s success.',
    },
    {
      icon: BadgeCheck,
      title: 'Field Staff',
      text: 'A group of professionals with a sharp eye for detail, the field staff go the extra mile, respectfully handling sensitive situations at homes and businesses and ensuring that those who have fallen behind are given every opportunity to recover.',
    },
  ],
  closing:
    'By balancing innovation, empathy, and relentless determination, they created a company that didn’t just recover money. They restored trust, stability, and peace of mind to an industry in need of recovery.',
  owner: {
    title: 'A Word on Our Founding',
    paragraphs: [
      'Rohit Sharma founded Hike Associate with a vision to revolutionize bank recovery and customer support. With extensive industry experience, he saw the need for efficient, ethical, and customer-friendly solutions in debt recovery.',
      'Starting as a small initiative, the company quickly grew into a trusted partner for financial institutions and businesses, driven by innovation, integrity, and results.',
    ],
    closing: 'Your Success is Our Commitment.',
  },
}
