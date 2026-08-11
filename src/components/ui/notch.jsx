import React from "react";
import { cn } from "@/lib/utils";
import "./notch.css";

export function Notch({ items = [], position = "bottom", className }) {
  return (
    <div className={cn("notch__container", className)}>
      {items.map((item) => (
        <div key={item.id} className="notch__item">
          <span className="notch__label">{item.label}:</span>
          <div className="notch__options-group">
            {item.options.map((opt) => (
              <button
                key={opt.id}
                onClick={() => item.onChange(opt.id)}
                className={cn(
                  "notch__option-btn",
                  item.value === opt.id && "notch__option-btn--active"
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
