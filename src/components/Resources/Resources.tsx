import React, { useState } from "react";
import { ResourceCard } from "./ResourceCard";
import { CategoryFilter } from "./CategoryFilter";
import { resources } from "./resourcesData";
import { ResourceCategory } from "./types";
import BreadCrumb from "../common/bread-crumb";

export function Resources() {
  const [selectedCategory, setSelectedCategory] = useState<
    ResourceCategory | "all"
  >("all");

  const filteredResources = resources.filter(
    (resource) =>
      selectedCategory === "all" || resource.category === selectedCategory
  );

  return (
    <div className="bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BreadCrumb
          title="Resources"
          subtitle="Access our curated collection of resources designed to help you succeed in your freelance journey."
        />

        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredResources.map((resource, index) => (
            <ResourceCard key={index} resource={resource} />
          ))}
        </div>
      </div>
    </div>
  );
}
