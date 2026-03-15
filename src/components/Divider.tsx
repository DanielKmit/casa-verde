"use client";

export default function Divider() {
  return (
    <div className="flex items-center justify-center py-8">
      <svg
        width="280"
        height="40"
        viewBox="0 0 280 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-gold opacity-60"
      >
        {/* Left branch */}
        <path
          d="M20 20 Q60 8 100 18 Q110 20 120 16"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        {/* Left leaves */}
        <ellipse cx="50" cy="13" rx="8" ry="4" transform="rotate(-20 50 13)" fill="currentColor" opacity="0.3" />
        <ellipse cx="70" cy="11" rx="7" ry="3.5" transform="rotate(-30 70 11)" fill="currentColor" opacity="0.25" />
        <ellipse cx="90" cy="14" rx="8" ry="4" transform="rotate(-15 90 14)" fill="currentColor" opacity="0.3" />
        <ellipse cx="55" cy="22" rx="7" ry="3.5" transform="rotate(15 55 22)" fill="currentColor" opacity="0.25" />
        <ellipse cx="80" cy="23" rx="8" ry="4" transform="rotate(20 80 23)" fill="currentColor" opacity="0.3" />
        
        {/* Center olive */}
        <circle cx="140" cy="18" r="5" fill="currentColor" opacity="0.5" />
        <circle cx="140" cy="18" r="3" fill="currentColor" opacity="0.3" />
        
        {/* Right branch */}
        <path
          d="M260 20 Q220 8 180 18 Q170 20 160 16"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        {/* Right leaves */}
        <ellipse cx="230" cy="13" rx="8" ry="4" transform="rotate(20 230 13)" fill="currentColor" opacity="0.3" />
        <ellipse cx="210" cy="11" rx="7" ry="3.5" transform="rotate(30 210 11)" fill="currentColor" opacity="0.25" />
        <ellipse cx="190" cy="14" rx="8" ry="4" transform="rotate(15 190 14)" fill="currentColor" opacity="0.3" />
        <ellipse cx="225" cy="22" rx="7" ry="3.5" transform="rotate(-15 225 22)" fill="currentColor" opacity="0.25" />
        <ellipse cx="200" cy="23" rx="8" ry="4" transform="rotate(-20 200 23)" fill="currentColor" opacity="0.3" />
      </svg>
    </div>
  );
}
