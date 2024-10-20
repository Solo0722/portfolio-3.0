import React from 'react'

const MagicButton = ({
  text,
  onClick,
  icon,
  position,
  otherClasses,
}: {
  text: string;
  onClick: () => void;
  icon: React.ReactNode;
  position: string;
  otherClasses?: string;
}) => {
  return (
    <button
      className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
      onClick={onClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg  px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
      >
        {position === "left" && icon}
        {text}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton