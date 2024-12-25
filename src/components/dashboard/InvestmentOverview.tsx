import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  ArrowUpRight,
  Wallet,
  TrendingUp,
  ArrowDownToLine,
} from "lucide-react";

interface InvestmentOverviewProps {
  totalInvested?: number;
  totalReturns?: number;
  monthlyGrowth?: number;
  availableWithdraw?: number;
}

const InvestmentOverview = ({
  totalInvested = 5000,
  totalReturns = 750,
  monthlyGrowth = 12.5,
  availableWithdraw = 250,
}: InvestmentOverviewProps) => {
  return (
    <div className="w-full bg-white p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Investment Overview</h2>
        <Button variant="outline">
          View Details
          <ArrowUpRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Invested
            </CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${totalInvested.toLocaleString()}
            </div>
            <Progress value={75} className="h-2 mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Returns</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">
              +${totalReturns}
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              {monthlyGrowth}% monthly growth
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Available to Withdraw
            </CardTitle>
            <ArrowDownToLine className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${availableWithdraw}</div>
            <Button variant="outline" size="sm" className="mt-2 w-full">
              Withdraw Funds
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Next Payout</CardTitle>
            <div className="h-4 w-4 rounded-full bg-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15 Days</div>
            <div className="text-xs text-muted-foreground mt-1">
              Estimated: ${(totalReturns / 2).toFixed(2)}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InvestmentOverview;
