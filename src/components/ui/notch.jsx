import React from "react";
import { cn } from "@/lib/utils";

export function Notch({ items = [], position = "bottom", className }) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/90 dark:bg-[#121218]/90 px-5 py-2.5 shadow-2xl backdrop-blur-xl",
        className
      )}
    >
      {items.map((item) => (
        <div key={item.id} className="flex items-center gap-2">
          <span className="text-xs font-medium text-neutral-600 dark:text-neutral-400">{item.label}:</span>
          <div className="flex items-center gap-1.5">
            {item.options.map((opt) => (
              <button
                key={opt.id}
                onClick={() => item.onChange(opt.id)}
                className={cn(
                  "h-5 px-2 text-[10px] font-semibold rounded-full border transition-all",
                  item.value === opt.id
                    ? "border-blue-500 bg-blue-500/20 text-blue-600 dark:text-blue-300 shadow-[0_0_10px_rgba(59,130,246,0.4)]"
                    : "border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200"
                )}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
