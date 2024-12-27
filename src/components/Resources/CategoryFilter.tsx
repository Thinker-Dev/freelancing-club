import React from "react";
import { ResourceCategory } from "./types";

interface CategoryFilterProps {
  selectedCategory: ResourceCategory | "all";
  onCategoryChange: (category: ResourceCategory | "all") => void;
}

export function CategoryFilter({
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  const categories: Array<ResourceCategory | "all"> = [
    "all",
    "guide",
    "template",
    "tool",
    "course",
  ];

  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
            ${
              selectedCategory === category
                ? "bg-primary-dark text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
}
