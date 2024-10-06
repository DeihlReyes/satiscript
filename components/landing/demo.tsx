import React from "react";
import { Button } from "../ui/button";

const Demo = () => {
  return (
    <div id="demo" className="py-16 lg:py-24">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl lg:text-5xl font-bold mb-6">
          See Satiscript in Action
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Watch how Satiscript helps call center agents provide better customer
          service through real-time sentiment analysis and script suggestions.
        </p>
      </div>
      <div className="max-w-4xl mx-auto">
        <iframe
          src="https://drive.google.com/file/d/1kyQxwRqj-g3Lrme_lptf9FMk8IZb1MaU/preview"
          allow="autoplay"
          allowFullScreen
          className="w-full h-[220px] md:h-[400px] lg:h-[500px] rounded-lg shadow-2xl"
        ></iframe>
      </div>
    </div>
  );
};

export default Demo;
