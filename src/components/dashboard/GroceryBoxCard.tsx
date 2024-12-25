import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Users, ShoppingCart } from "lucide-react";

interface GroceryBoxCardProps {
  title: string;
  price: number;
  description: string;
  image: string;
  groupSize: number;
  currentGroupMembers: number;
  contents: string[];
}

const GroceryBoxCard = ({
  title = "Essential Grocery Box",
  price = 99.99,
  description = "Monthly essentials for a family of four",
  image = "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=60",
  groupSize = 10,
  currentGroupMembers = 4,
  contents = [
    "Fruits & Vegetables",
    "Dairy Products",
    "Pantry Staples",
    "Meat & Poultry",
  ],
}: GroceryBoxCardProps) => {
  const progress = (currentGroupMembers / groupSize) * 100;

  return (
    <Card className="w-[300px] h-[380px] bg-white hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="p-4">
        <div className="relative h-32 w-full mb-2 rounded-md overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="space-y-1">
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          <CardDescription className="text-sm text-gray-500">
            {description}
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className="p-4 pt-0">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-primary">${price}</span>
            <Badge variant="secondary" className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              {currentGroupMembers}/{groupSize}
            </Badge>
          </div>

          <div className="space-y-2">
            <Progress value={progress} className="h-2" />
            <p className="text-xs text-gray-500">
              {groupSize - currentGroupMembers} more members needed for group
              discount
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-sm font-medium">Box Contents:</p>
            <ul className="text-xs text-gray-500 list-disc list-inside">
              {contents.slice(0, 3).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
              {contents.length > 3 && (
                <li>+{contents.length - 3} more items</li>
              )}
            </ul>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button className="w-full" size="sm">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Join Group
        </Button>
      </CardFooter>
    </Card>
  );
};

export default GroceryBoxCard;
