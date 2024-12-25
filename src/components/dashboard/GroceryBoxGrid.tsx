import React from "react";
import GroceryBoxCard from "./GroceryBoxCard";

interface GroceryBoxGridProps {
  boxes: Array<{
    id: string;
    title: string;
    price: number;
    description: string;
    image: string;
    groupSize: number;
    currentGroupMembers: number;
    contents: string[];
  }>;
}

const GroceryBoxGrid = ({
  boxes = [
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
    {
      id: "4",
      title: "Gourmet Selection",
      price: 199.99,
      description: "Premium ingredients for cooking enthusiasts",
      image:
        "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=800",
      groupSize: 6,
      currentGroupMembers: 2,
      contents: [
        "Artisanal Cheeses",
        "Premium Cuts",
        "Specialty Oils",
        "Imported Goods",
      ],
    },
  ],
}: GroceryBoxGridProps) => {
  return (
    <div className="w-full min-h-[400px] bg-gray-50 p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
        {boxes.map((box) => (
          <GroceryBoxCard
            key={box.id}
            title={box.title}
            price={box.price}
            description={box.description}
            image={box.image}
            groupSize={box.groupSize}
            currentGroupMembers={box.currentGroupMembers}
            contents={box.contents}
          />
        ))}
      </div>
    </div>
  );
};

export default GroceryBoxGrid;
