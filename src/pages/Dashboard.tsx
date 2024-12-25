import React from "react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import GroceryBoxGrid from "@/components/dashboard/GroceryBoxGrid";
import InvestmentOverview from "@/components/dashboard/InvestmentOverview";
import ReferralSection from "@/components/dashboard/ReferralSection";

interface DashboardProps {
  userName?: string;
  userAvatar?: string;
  notificationCount?: number;
  groceryBoxes?: Array<{
    id: string;
    title: string;
    price: number;
    description: string;
    image: string;
    groupSize: number;
    currentGroupMembers: number;
    contents: string[];
  }>;
  investmentData?: {
    totalInvested: number;
    totalReturns: number;
    monthlyGrowth: number;
    availableWithdraw: number;
  };
  referralData?: {
    referralCode: string;
    totalReferrals: number;
    totalEarnings: number;
    activeReferrers: number;
  };
}

const Dashboard = ({
  userName = "John Doe",
  userAvatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
  notificationCount = 3,
  groceryBoxes = [
    {
      id: "1",
      title: "Essential Family Box",
      price: 99.99,
      description: "Monthly essentials for a family of four",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800",
      groupSize: 10,
      currentGroupMembers: 4,
      contents: [
        "Fruits & Vegetables",
        "Dairy Products",
        "Pantry Staples",
        "Meat & Poultry",
      ],
    },
    {
      id: "2",
      title: "Organic Wellness Box",
      price: 149.99,
      description: "Premium organic products for health-conscious individuals",
      image:
        "https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=800",
      groupSize: 8,
      currentGroupMembers: 3,
      contents: [
        "Organic Produce",
        "Superfoods",
        "Plant-based Proteins",
        "Healthy Snacks",
      ],
    },
    {
      id: "3",
      title: "Student Starter Pack",
      price: 79.99,
      description: "Budget-friendly essentials for students",
      image:
        "https://images.unsplash.com/photo-1579113800032-c38bd7635818?w=800",
      groupSize: 15,
      currentGroupMembers: 7,
      contents: ["Quick Meals", "Snacks", "Beverages", "Basic Groceries"],
    },
  ],
  investmentData = {
    totalInvested: 5000,
    totalReturns: 750,
    monthlyGrowth: 12.5,
    availableWithdraw: 250,
  },
  referralData = {
    referralCode: "SHOP2024XYZ",
    totalReferrals: 12,
    totalEarnings: 450.75,
    activeReferrers: 8,
  },
}: DashboardProps) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <DashboardHeader
        userName={userName}
        userAvatar={userAvatar}
        notificationCount={notificationCount}
      />

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="grid grid-cols-1 gap-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">Available Grocery Boxes</h2>
            <GroceryBoxGrid boxes={groceryBoxes} />
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Investment Status</h2>
            <InvestmentOverview
              totalInvested={investmentData.totalInvested}
              totalReturns={investmentData.totalReturns}
              monthlyGrowth={investmentData.monthlyGrowth}
              availableWithdraw={investmentData.availableWithdraw}
            />
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Referral Program</h2>
            <ReferralSection
              referralCode={referralData.referralCode}
              totalReferrals={referralData.totalReferrals}
              totalEarnings={referralData.totalEarnings}
              activeReferrers={referralData.activeReferrers}
            />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
