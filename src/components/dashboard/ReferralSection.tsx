import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Share2, Copy, Users, TrendingUp } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ReferralSectionProps {
  referralCode?: string;
  totalReferrals?: number;
  totalEarnings?: number;
  activeReferrers?: number;
}

const ReferralSection = ({
  referralCode = "SHOP2024XYZ",
  totalReferrals = 12,
  totalEarnings = 450.75,
  activeReferrers = 8,
}: ReferralSectionProps) => {
  const handleCopyCode = () => {
    navigator.clipboard.writeText(referralCode);
  };

  const handleShare = () => {
    // Share functionality would go here
  };

  return (
    <Card className="w-full bg-white">
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <Users className="h-5 w-5 text-primary" />
          Referral Program
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="text-sm text-gray-500">Total Referrals</div>
            <div className="text-2xl font-bold text-primary">
              {totalReferrals}
            </div>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="text-sm text-gray-500">Total Earnings</div>
            <div className="text-2xl font-bold text-primary">
              ${totalEarnings.toFixed(2)}
            </div>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="text-sm text-gray-500">Active Referrers</div>
            <div className="text-2xl font-bold text-primary">
              {activeReferrers}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="text-sm font-medium">Your Referral Code</div>
          <div className="flex gap-2">
            <Input value={referralCode} readOnly className="bg-gray-50" />
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleCopyCode}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Copy referral code</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" onClick={handleShare}>
                    <Share2 className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Share referral code</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        <div className="flex items-center justify-between p-4 bg-primary/5 rounded-lg">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            <div className="text-sm font-medium">
              Earn 5% of your referrals' first month subscription
            </div>
          </div>
          <Button variant="default" size="sm">
            Learn More
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReferralSection;
