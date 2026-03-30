import React from "react";
import { Sparkles } from "lucide-react";

interface SkillCardProps {
  img?: string;
  label?: string;
  description?: string;
  /**
   * Optional icon (preferably a Lucide icon component) to display instead of image.
   * Example usage: <SkillCard icon={<Zap />} label="Eagerness" description="..." />
   */
  icon?: React.ReactNode;
  className?: string;
}

export default function SkillCard({
  label = "Start",
  description = "",
  img = "",
  icon,
  className = "",
}: SkillCardProps) {
  const renderMedia = () => {
    if (icon) {
      return (
        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white/5 mb-4">
          {icon}
        </div>
      );
    }

    if (img) {
      return (
        <img
          src={img}
          className="h-24 w-24 object-contain mx-auto mb-4"
          alt={label}
        />
      );
    }

    // Default Lucide icon placeholder
    return (
      <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white/5 mb-4">
        <Sparkles className="w-8 h-8 text-white" />
      </div>
    );
  };

  return (
    <div
      className={`text-white border-2 border-solid rounded-2xl border-[#686D76] bg-transparent ${className}`}
    >
      <div className="p-8 flex flex-col items-center text-center">
        {renderMedia()}
        <h3 className="text-xl font-semibold mb-2">{label}</h3>
        <p className="text-sm text-white/80">{description}</p>
      </div>
    </div>
  );
}
