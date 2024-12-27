import React from "react";
import { Download, FileType, HardDrive } from "lucide-react";
import { Resource } from "./types";

export function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 group">
      <div className="aspect-w-16 aspect-h-9 relative">
        <img
          src={resource.image}
          alt={resource.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-1 line-clamp-1">
          {resource.title}
        </h3>
        <p className="text-sm text-gray-400 mb-3 line-clamp-2">
          {resource.description}
        </p>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-3 text-gray-400">
            <div className="flex items-center">
              <FileType className="w-3.5 h-3.5 mr-1" />
              {resource.fileType}
            </div>
            <div className="flex items-center">
              <HardDrive className="w-3.5 h-3.5 mr-1" />
              {resource.fileSize}
            </div>
          </div>
          <a
            href={resource.downloadUrl}
            className="inline-flex items-center px-3 py-1.5 bg-primary text-white text-sm rounded hover:bg-indigo-600 transition-colors"
          >
            <Download className="w-3.5 h-3.5 mr-1.5" />
            Download
          </a>
        </div>
      </div>
    </div>
  );
}
