import { create } from "zustand";

export interface Integration {
  id: number;
  img: string;
  name: string;
  description: string;
  syncOptions: { name: string; active: boolean }[];
  tags: string[];
  syncState: number;
}

export const availableIntegrations: Integration[] = [
  {
    id: 1,
    img: "/storehub.jpg",
    name: "StoreHub",
    description:
      "StoreHub is a cloud-based point of sale (POS) and business management system designed specifically for retail and F&B businesses. It offers a comprehensive set of features and tools to help businesses streamline their operations, manage inventory, process sales transactions, track customer data, and analyze business performance.",
    syncOptions: [
      { name: "Sync Inventory", active: false },
      { name: "Sync Sales", active: true },
    ],
    tags: ["Point of Sale", "Inventory Management", "Retail", "F&B"],
    syncState: 1,
  },
  {
    id: 3,
    img: "/foodpanda.png",
    name: "Foodpanda",
    description:
      "Foodpanda is an online food delivery platform that allows users to order food from a wide selection of restaurants in their area. It operates through a user-friendly website or mobile app, where customers can browse menus, place orders, and track their deliveries in real-time. Foodpanda partners with local restaurants to provide a convenient and reliable food delivery service to customers.",
    syncOptions: [
      { name: "Sync Orders", active: true },
      { name: "Sync Menu", active: false },
    ],
    tags: ["Food Delivery", "Online Ordering", "Restaurant"],
    syncState: 1,
  },
  {
    id: 4,
    img: "/shopify.png",
    name: "Shopify",
    description:
      "Shopify is an e-commerce platform that enables businesses to create online stores and sell products. It provides a robust set of features for inventory management, order processing, secure payments, and customizable storefronts. With Shopify, businesses can easily build and manage their online presence.",
    syncOptions: [
      { name: "Sync Orders", active: true },
      { name: "Sync Products", active: false },
    ],
    tags: ["E-commerce", "Online Store", "Inventory Management"],
    syncState: 1,
  },
  {
    id: 2,
    img: "/grabfood.png",
    name: "Grab Food",
    description:
      "GrabFood is a popular online food delivery platform that connects users with a wide range of restaurants and food establishments in their area. It offers a convenient and efficient way for customers to order food from their favorite restaurants and have it delivered to their doorstep. GrabFood provides a user-friendly mobile app or website where customers can browse menus, place orders, and track their delivery in real-time.",
    syncOptions: [
      { name: "Sync Orders", active: false },
      { name: "Sync Customers", active: false },
    ],
    tags: ["Food Delivery", "Online Ordering", "Restaurant"],
    syncState: -1,
  },
  {
    id: 5,
    img: "/paypal.png",
    name: "PayPal",
    description:
      "PayPal is a widely used online payment system that allows individuals and businesses to send and receive money securely over the internet. It provides a convenient way for customers to make payments and for businesses to accept online payments. PayPal supports various payment methods and offers additional features like invoicing and subscription management.",
    syncOptions: [
      { name: "Sync Transactions", active: false },
      { name: "Sync Disputes", active: false },
    ],
    tags: ["Payment System", "Online Payments", "E-commerce"],
    syncState: -1,
  },
  {
    id: 6,
    img: "/mailchimp.png",
    name: "Mailchimp",
    description:
      "Mailchimp is an all-in-one marketing platform that helps businesses automate and manage their email marketing campaigns. It provides tools for creating professional-looking email templates, managing subscriber lists, and tracking campaign performance. With Mailchimp, businesses can engage with their audience and drive conversions through targeted email marketing.",
    syncOptions: [
      { name: "Sync Subscribers", active: false },
      { name: "Sync Campaigns", active: false },
    ],
    tags: ["Email Marketing", "Campaign Management", "Marketing Automation"],
    syncState: -1,
  },
  {
    id: 7,
    img: "/googleanalytics.png",
    name: "Google Analytics",
    description:
      "Google Analytics is a web analytics service that provides insights into website traffic and user behavior. It allows businesses to track and analyze various metrics, such as page views, conversion rates, and user demographics. Google Analytics offers valuable data for optimizing website performance, understanding customer preferences, and measuring marketing efforts.",
    syncOptions: [
      { name: "Sync Data", active: false },
      { name: "Sync Goals", active: false },
    ],
    tags: ["Web Analytics", "Data Analysis", "Marketing Insights"],
    syncState: -1,
  },
  {
    id: 8,
    img: "/zendesk.png",
    name: "Zendesk",
    description:
      "Zendesk is a customer service and support platform that helps businesses manage customer inquiries and support tickets. It provides tools for ticket management, live chat support, and customer self-service portals. Zendesk enables businesses to deliver efficient and personalized customer support, enhancing the overall customer experience.",
    syncOptions: [
      { name: "Sync Tickets", active: false },
      { name: "Sync Users", active: false },
    ],
    tags: ["Customer Support", "Ticket Management", "Help Desk"],
    syncState: -1,
  },
  {
    id: 9,
    img: "/quickbooks.png",
    name: "QuickBooks",
    description:
      "QuickBooks is an accounting software designed for small and medium-sized businesses. It provides tools for managing invoices, tracking expenses, generating financial reports, and handling payroll. QuickBooks helps businesses stay organized and make informed financial decisions.",
    syncOptions: [
      { name: "Sync Financial Data", active: false },
      { name: "Sync Invoices", active: false },
    ],
    tags: ["Accounting", "Bookkeeping", "Financial Management"],
    syncState: -1,
  },
  {
    id: 10,
    img: "/slack.png",
    name: "Slack",
    description:
      "Slack is a communication and collaboration platform that allows teams to work together efficiently. It provides channels for real-time messaging, file sharing, and integrations with various tools and services. Slack streamlines team communication and enhances productivity.",
    syncOptions: [
      { name: "Sync Messages", active: false },
      { name: "Sync Files", active: false },
    ],
    tags: ["Team Collaboration", "Communication", "Project Management"],
    syncState: -1,
  },
  {
    id: 11,
    img: "/hubspot.png",
    name: "HubSpot",
    description:
      "HubSpot is an all-in-one marketing, sales, and customer service platform. It offers tools for email marketing, lead generation, CRM (Customer Relationship Management), and more. HubSpot helps businesses attract, engage, and delight customers throughout their journey.",
    syncOptions: [
      { name: "Sync Contacts", active: false },
      { name: "Sync Deals", active: false },
    ],
    tags: ["Marketing Automation", "CRM", "Sales"],
    syncState: -1,
  },
  {
    id: 12,
    img: "/googleads.png",
    name: "Google Ads",
    description:
      "Google Ads is an online advertising platform that allows businesses to create and manage digital marketing campaigns. It enables businesses to reach their target audience through various ad formats, such as search ads, display ads, and video ads. Google Ads provides extensive targeting options and analytics to optimize campaign performance.",
    syncOptions: [
      { name: "Sync Campaigns", active: false },
      { name: "Sync Conversions", active: false },
    ],
    tags: ["Digital Advertising", "PPC", "Online Marketing"],
    syncState: -1,
  },
  {
    id: 13,
    img: "/stripe.png",
    name: "Stripe",
    description:
      "Stripe is a payment processing platform that enables businesses to accept online payments securely. It supports various payment methods, including credit cards, digital wallets, and mobile payments. Stripe provides robust features for handling transactions, managing subscriptions, and preventing fraud.",
    syncOptions: [
      { name: "Sync Payments", active: false },
      { name: "Sync Refunds", active: false },
    ],
    tags: ["Payment Processing", "Online Payments", "E-commerce"],
    syncState: -1,
  },
  {
    id: 14,
    img: "/googleworkspace.png",
    name: "Google Workspace",
    description:
      "Google Workspace (formerly G Suite) is a suite of cloud-based productivity and collaboration tools. It includes applications like Gmail, Google Drive, Google Docs, Google Sheets, and more. Google Workspace enables businesses to work collaboratively, store and share files, and communicate seamlessly.",
    syncOptions: [
      { name: "Sync Files", active: false },
      { name: "Sync Calendars", active: false },
    ],
    tags: ["Productivity", "Collaboration", "Cloud-based"],
    syncState: -1,
  },
  {
    id: 15,
    img: "/salesforce.png",
    name: "Salesforce",
    description:
      "Salesforce is a customer relationship management (CRM) platform that helps businesses manage their sales, marketing, and customer service activities. It provides tools for lead management, opportunity tracking, email marketing, and support ticketing. Salesforce offers a comprehensive solution for businesses to optimize their customer interactions and drive growth.",
    syncOptions: [
      { name: "Sync Data", active: false },
      { name: "Sync Leads", active: false },
    ],
    tags: ["CRM", "Sales", "Customer Service"],
    syncState: -1,
  },
];

interface IntegrationState {
  integrations: Integration[];
  add: (integrationId: number) => void;
  remove: (integrationId: number) => void;
  set: (setter: (integrations: Integration[]) => Integration[]) => void;
}

const useIntegrationStore = create<IntegrationState>((set, get) => ({
  integrations: [...availableIntegrations.slice(0, 3)],
  add(integrationId) {
    const intgrtn = availableIntegrations.find((x) => x.id == integrationId);
    if (intgrtn == null) return;
    set({
      integrations: [...get().integrations, intgrtn],
    });
  },
  remove(integrationId) {
    set({
      integrations: get().integrations.filter((x) => x.id != integrationId),
    });
  },
  set(setter) {
    set({ integrations: setter(get().integrations) });
  },
}));

export default useIntegrationStore;
