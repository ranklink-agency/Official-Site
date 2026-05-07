import {
  Globe,
  PenTool,
  Search,
  FileText,
  Users,
  Layout,
  BarChart,
  Settings,
  Link as LinkIcon,
  Monitor,
} from 'lucide-react';
import type {
  PricingPlan,
  BulkPlan,
  Service,
  FAQItem,
  Testimonial,
  NavLink,
  PremiumSite,
  TeamMember,
} from '@/types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '/' },
  {
    name: 'Services',
    href: '#',
    children: [
      { name: 'Premium Sites', href: '/premium-site' },
      { name: 'SEO Services', href: '/seo-services' },
    ],
  },
  { name: 'Why Choose Us', href: '/why-choose-us' },
  { name: 'About Us', href: '/about-us' },
  { name: 'Team', href: '/our-team' },
  { name: 'FAQ', href: '/faqs' },
  { name: 'Contact Us', href: '/contact-us' },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    title: 'DR 30+',
    subtitle: 'Basic',
    price: 50.0,
    originalPrice: 0,
    features: [
      '1 Guest Post Published',
      'DR 30+ Website',
      'Permanent Post',
      '2 Do-Follow Backlinks',
      'SEO Optimized Content Included',
      'Relevant Image Included',
      'Fast Indexing Support',
    ],
  },
  {
    title: 'DR 50+',
    subtitle: 'Standard',
    price: 75.0,
    originalPrice: 0,
    features: [
      '1 Guest Post Published',
      'DR 50+ Authority Website',
      'Permanent Post',
      '2 Do-Follow Backlinks',
      'Premium SEO Content Included',
      'High-Quality Relevant Image Included',
      'Quick Publishing Turnaround',
    ],
  },
  {
    title: 'DR 70+',
    subtitle: 'Premium',
    price: 120.0,
    originalPrice: 0,
    features: [
      '1 Guest Post Published',
      'DR 70+ High Authority Website',
      'Permanent Post',
      '2 Do-Follow Backlinks',
      'Premium Quality SEO Content',
      'Featured Image Included',
      'Faster Google Indexing',
      'High Trust Flow Sites',
    ],
  },
  {
    title: 'DR 75+',
    subtitle: 'Ultra Gold',
    price: 180.0,
    originalPrice: 0,
    features: [
      '1 Premium Guest Post Published',
      'High Authority Premium Website',
      'Permanent Post',
      'Powerful Do-Follow Backlink',
      'Expert-Level SEO Content Included',
      'Premium Image Included',
      'Priority Publishing',
      'Maximum Ranking Boost',
      'Strong Niche Relevancy',
    ],
  },
];

export const BULK_PLANS: BulkPlan[] = [
  { title: 'BULK DISCOUNT', placements: 10, pricePerPlacement: 47 },
  { title: 'BULK DISCOUNT', placements: 10, pricePerPlacement: 47 },
  { title: 'BULK DISCOUNT', placements: 10, pricePerPlacement: 47 },
  { title: 'BULK DISCOUNT', placements: 10, pricePerPlacement: 47 },
];

export const SERVICES: Service[] = [
  {
    icon: <Globe className="w-10 h-10 text-white" />,
    title: 'Authority Backlinks',
    description:
      'We analyze numerous sites and offer the most relevant genuine backlinks to give you 5000 - 30000+ organic traffic.',
  },
  {
    icon: <Layout className="w-10 h-10 text-white" />,
    title: 'Guest-Post Backlinks',
    description:
      'Build high-quality guest post backlinks from blogs relevant to your niche with real & organic traffic.',
  },
  {
    icon: <PenTool className="w-10 h-10 text-white" />,
    title: 'Press Releases Backlinks',
    description:
      'We create and send well-written press releases to the relevant media outlets to promote your business.',
  },
  {
    icon: <Search className="w-10 h-10 text-white" />,
    title: 'SEO management',
    description:
      'Our SEO services curate a perfect roadmap to success for your website. Attract more visitors, generate leads and earn higher revenue.',
  },
  {
    icon: <Users className="w-10 h-10 text-white" />,
    title: 'Blogger Outreach',
    description:
      'Create exceptional promotional content and build relevant and prominent business backlinks to improve your organic ranking.',
  },
  {
    icon: <FileText className="w-10 h-10 text-white" />,
    title: 'Content Writing',
    description:
      'We deliver well-crafted unique content that ranks high on Google and caters to your audience.',
  },
];

export const FAQS: FAQItem[] = [
  {
    question: 'How do Guest Posts Work?',
    answer:
      'Guest Post means in SEO that you are trying to outreach bloggers and ask them to publish your article on the recommended blog website. They will give you a link back to your website – which will help you rank up your keywords in search engines.',
  },
  {
    question: 'How do Guest Post Backlinks Benefit my website SEO?',
    answer:
      'They provide high-quality backlinks which are a major ranking factor for Google, driving organic traffic and increasing domain authority.',
  },
  {
    question: 'How to Submit Your Guest Post Articles?',
    answer:
      'You can submit your articles via our dashboard after purchasing a plan. Ensure they meet our quality guidelines.',
  },
  {
    question: 'Does Rank Link Agency report on the distribution of my press release?',
    answer: 'Yes, we provide detailed reports showing where your press release has been published.',
  },
  {
    question: 'Are there any Guidelines?',
    answer:
      'Yes, we strictly follow white-hat SEO techniques. Content must be original, relevant, and provide value to readers.',
  },
  {
    question: 'What is the Average turned around at the time of Guest Post?',
    answer:
      'The average turnaround time is typically 3-5 business days, depending on the publisher.',
  },
  {
    question: 'How many links can I include on my website?',
    answer:
      'Typically 1-2 do-follow links per article are allowed to keep it natural and authoritative.',
  },
  {
    question: 'Can I include Naked or links back to my website?',
    answer: 'Yes, you can include naked URLs or branded anchor text.',
  },
  {
    question: 'Are the Guest Post website Relevant to my website niche?',
    answer: 'Absolutely. We filter sites based on your niche to ensure maximum relevance.',
  },
  {
    question: 'Is it Permanent Backlinks?',
    answer: 'Yes, our guest post backlinks are permanent.',
  },
  {
    question: 'Are the links will be Do-Follow?',
    answer:
      'Yes, the majority of our links are Do-Follow to ensure you get the maximum SEO benefit.',
  },
  {
    question: 'Is It Paid Or Free?',
    answer:
      'Our services are paid as we handle the outreach, content creation (optional), and placement fees.',
  },
  {
    question: 'How to send the Guest Post Article to be published?',
    answer: 'Upload via dashboard or email to support.',
  },
  {
    question: 'Can I get my press release changed once distributed?',
    answer:
      'Once distributed, it is difficult to make changes, so please review carefully before approval.',
  },
  {
    question: 'What procedure is followed to submit a press release?',
    answer: 'Draft, Approve, Distribute, Report.',
  },
  {
    question: 'What kind of contact information is required by your company to submit a new news release?',
    answer: 'We need your company email, name, and press contact details.',
  },
];

export const PREMIUM_FAQS: FAQItem[] = [
  {
    question: "What makes a website 'Premium'?",
    answer:
      "Premium websites typically have a high Domain Authority (DA 50+), significant organic traffic (10k+ monthly), and strict editorial standards. Getting a backlink from these sites carries much more weight for SEO than standard blogs.",
  },
  {
    question: 'Is the content written by you or me?',
    answer:
      "We offer both options. You can provide your own high-quality content meeting the publisher's guidelines, or our expert team can write SEO-optimized content for you for an additional fee.",
  },
  {
    question: 'How long does it take to get published?',
    answer:
      'Turnaround time for premium sites varies from 1 to 2 weeks, as these sites have real editorial teams that review content before publication.',
  },
  {
    question: "Do you offer a refund if the post isn't published?",
    answer:
      'Yes, we have a 100% money-back guarantee. If we fail to secure a placement on your chosen site, we will issue a full refund or offer an alternative of equal value.',
  },
  {
    question: 'Are these links do-follow?',
    answer:
      'Most of our premium placements offer do-follow links. However, some top-tier news sites might have specific policies. The listing details usually specify the link attribute.',
  },
];

export const TESTIMONIAL: Testimonial = {
  text: '"Their guest post service helped us land on niche-relevant blogs, which improved both traffic and authority. Highly recommend."',
  name: 'Anita R.',
  role: 'Digital Marketer',
  image: 'https://picsum.photos/seed/anita/200/200',
};

export const PREMIUM_SITES: PremiumSite[] = [
  { id: 1, domain: 'kahawatungu.com', image: 'https://via.placeholder.com/300x200?text=Kahawatungu', price: 80.0, originalPrice: 100.0, isSale: true },
  { id: 2, domain: 'defstartup.org', image: 'https://via.placeholder.com/300x200?text=Defstartup', price: 120.0 },
  { id: 3, domain: 'gbhackers.com', image: 'https://via.placeholder.com/300x200?text=GBHackers', price: 150.0 },
  { id: 4, domain: 'cybersecuritynews.com', image: 'https://via.placeholder.com/300x200?text=CyberSecurity', price: 200.0 },
  { id: 5, domain: 'urtech.ca', image: 'https://via.placeholder.com/300x200?text=UrTech', price: 60.0 },
  { id: 6, domain: 'techiexpert.com', image: 'https://via.placeholder.com/300x200?text=TechieExpert', price: 90.0 },
  { id: 7, domain: 'tech-latest.com', image: 'https://via.placeholder.com/300x200?text=TechLatest', price: 75.0 },
  { id: 8, domain: 'ipwithease.com', image: 'https://via.placeholder.com/300x200?text=IPWithEase', price: 110.0 },
  { id: 9, domain: 'projectcubicle.com', image: 'https://via.placeholder.com/300x200?text=ProjectCubicle', price: 85.0 },
  { id: 10, domain: 'nativenewsonline.net', image: 'https://via.placeholder.com/300x200?text=NativeNews', price: 180.0 },
  { id: 11, domain: 'businesstimes.org', image: 'https://via.placeholder.com/300x200?text=BusinessTimes', price: 250.0 },
  { id: 12, domain: 'bbntimes.com', image: 'https://via.placeholder.com/300x200?text=BBNTimes', price: 220.0 },
  { id: 13, domain: 'richmondmom.com', image: 'https://via.placeholder.com/300x200?text=RichmondMom', price: 150.0 },
  { id: 14, domain: 'allperfectstories.com', image: 'https://via.placeholder.com/300x200?text=AllPerfectStories', price: 150.0, originalPrice: 170.0, isSale: true },
  { id: 15, domain: 'nogentech.org', image: 'https://via.placeholder.com/300x200?text=NogenTech', price: 220.0, originalPrice: 240.0, isSale: true },
  { id: 16, domain: 'crispme.com', image: 'https://via.placeholder.com/300x200?text=CrispMe', price: 20.0, originalPrice: 30.0, isSale: true },
];

export const SEO_SERVICES_FEATURES = [
  {
    icon: <Monitor className="w-8 h-8 text-white" />,
    title: 'Website Audit',
    description:
      'When it comes to planning an SEO strategy, the first step that is to be undertaken is a website audit. It helps our team to identify the easy wins keywords and use them by incorporating a sustainable and white-hat link-building strategy to drive ideal traffic to your website.',
  },
  {
    icon: <Search className="w-8 h-8 text-white" />,
    title: 'Keyword Research',
    description:
      'In case you are concerned about your site not ranking for competitive keywords, then you have come to the right place. Our team makes sure that search engines rank your site for the right keywords. We do extensive research on the niche industry of your website and target audience.',
  },
  {
    icon: <FileText className="w-8 h-8 text-white" />,
    title: 'On-Page Optimization',
    description:
      'Our team will perform keyword research to determine the appropriate keywords to optimize the page. Additionally, our team will write the attractive meta title, description, and schema to optimize the page.',
  },
  {
    icon: <PenTool className="w-8 h-8 text-white" />,
    title: 'Content Creation',
    description:
      "Remember that website content is the voice of your brand. Therefore, you can't afford to compromise with its quality. Our team works on delivering qualitative content written on the trending topics which further educates the readers and thus, attracts them to your site.",
  },
  {
    icon: <LinkIcon className="w-8 h-8 text-white" />,
    title: 'Link Building',
    description:
      'One of the best ways to improve the rankings of a site is to get the relevant links. Our team manually reaches out to authoritative bloggers to build qualitative links for your site.',
  },
  {
    icon: <BarChart className="w-8 h-8 text-white" />,
    title: 'Analytics Tracking',
    description:
      'Managing SEO is not a short-term process. Different aspects of the websites are to be analyzed to optimize the campaigns regularly. Our team tracks how your website is ranking for different targeted keywords, the flow of the audience, and other indicators.',
  },
];

export const SEO_PRICING_PLANS: PricingPlan[] = [
  {
    title: 'Starter',
    subtitle: 'Perfect for new websites ready to build their first backlink profile.',
    price: 49,
    originalPrice: 0,
    features: [
      '1 Guest Post Published',
      'DR 30+ Niche Website',
      'Permanent Do-Follow Link',
      'SEO-Optimized Content Included',
      'Relevant Image Included',
      'Standard Publishing Turnaround',
    ],
  },
  {
    title: 'Growth',
    subtitle: 'Ideal for growing brands targeting faster keyword rankings and more authority.',
    price: 79,
    originalPrice: 0,
    features: [
      '2 Guest Posts Published',
      'DR 40+ Authority Websites',
      'Permanent Do-Follow Links',
      'Premium SEO Content Included',
      'High-Quality Images Included',
      'Priority Publishing',
      'Niche-Relevant Placements',
    ],
  },
  {
    title: 'Pro',
    subtitle: 'For established websites aiming at high-authority link profiles and top rankings.',
    price: 129,
    originalPrice: 0,
    features: [
      '3 Guest Posts Published',
      'DR 50+ High-Authority Sites',
      'Permanent Do-Follow Links',
      'Expert-Level SEO Content',
      'Featured Images Included',
      'Fast-Track Publishing',
      'Anchor Text Optimization',
      'Dedicated Account Support',
    ],
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Hafiz Mueen',
    role: 'Founder & SEO Strategist',
    image: '',
    message:
      'I review Tech, Fashion, and other niche websites, analyze competitors, and identify backlink and keyword gaps. With my team, I prepare clear SEO reports and provide simple, effective strategies and backlink plans to improve Google rankings and online growth.',
    isCeo: true,
  },
  {
    name: 'Haroon Ismail',
    role: 'Content Writer & SEO Analyst',
    image: '',
    message:
      'Haroon Ismail is a professional content writer with strong experience in SEO. He works on keyword gap and backlink analysis, and helps in preparing detailed client reports. He also has pro-level skills in graphic design, making content more effective and visually strong for better results.',
  },
  {
    name: 'Muhammad Ahmed',
    role: 'Marketing & Vendor Relations Executive',
    image: '',
    message:
      'Muhammad Ahmed handles marketing activities, communicates with vendors, and collects data from high-authority websites. He manages outreach and ensures smooth coordination with publishers for effective guest post placements and backlink opportunities.',
  },
  {
    name: 'Shanzay Mustafa',
    role: 'MPhil Botany Expert & Research Writing Specialist',
    image: '',
    message:
      'Shanzay Mustafa is an MPhil Botany Expert and Research Writing Specialist with 5+ years of experience in Thesis Writing, Synopsis Writing, Research Proposals, Research Articles, and Review Articles. She specializes in Medicinal Plants research and provides complete academic support for MPhil Botany students, helping them complete their thesis and academic work with proper guidance and structure. Alongside academic writing, she also holds expertise in non-invasive dermatology.',
  },
];
