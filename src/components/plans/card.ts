export type PaymentMethod = {
  id: number;
  cardType: string;
  cardNumber: string | null;
  expiry: string;
  email: string;
  status: string;
  statusType: "success" | "error" | "neutral" | "info";
  isSelected: boolean;
};

export type PlanCardProps = {
  title: string;
  used: number;
  total: number;
  progress: number;
  upgradeMessage: string;
};

export const plansUsage = [
  {
    title: "Resume Access",
    used: 350,
    total: 400,
    progress: 87.5, // 350/400
    upgradeMessage: "Upgrade to add more access",
  },
  {
    title: "Active Jobs",
    used: 2,
    total: 5,
    progress: 40, // 2/5
    upgradeMessage: "Upgrade to add more active jobs",
  },
  {
    title: "CV Screening",
    used: 14,
    total: 25,
    progress: 56, // 14/25
    upgradeMessage: "Upgrade to add more CV Screening",
  },
  {
    title: "Interview",
    used: 10,
    total: 25,
    progress: 40, // 10/25
    upgradeMessage: "Upgrade to add more access",
  },
];

const paymentMethods: PaymentMethod[] = [
  {
    id: 1,
    cardType: "Visa",
    cardNumber: "**** 1234",
    expiry: "06/2024",
    email: "billing@companyname.com",
    status: "Last Used",
    statusType: "success",
    isSelected: true,
  },
  {
    id: 2,
    cardType: "Master Card",
    cardNumber: "**** 1234",
    expiry: "06/2024",
    email: "billing@companyname.com",
    status: "Expired",
    statusType: "error",
    isSelected: false,
  },
  {
    id: 3,
    cardType: "PayPal",
    cardNumber: null,
    expiry: "06/2024",
    email: "billing@companyname.com",
    status: "Added on 06/2024",
    statusType: "info",
    isSelected: false,
  },
];

export default paymentMethods;
