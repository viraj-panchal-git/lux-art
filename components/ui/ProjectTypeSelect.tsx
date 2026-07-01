"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import type { ProjectTypeGroup } from "@/lib/types";

interface ProjectTypeSelectProps {
  groups: ProjectTypeGroup[];
  name: string;
  disabled?: boolean;
  required?: boolean;
  id?: string;
  labelId?: string;
  onChange?: (value: string) => void;
}

export function ProjectTypeSelect({
  groups,
  name,
  disabled,
  required,
  id,
  labelId,
  onChange,
}: ProjectTypeSelectProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const listboxId = useId();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function selectOption(option: string) {
    setValue(option);
    onChange?.(option);
    setOpen(false);
  }

  return (
    <div ref={containerRef} className="relative">
      <input type="hidden" name={name} value={value} required={required} />

      <button
        type="button"
        id={id}
        disabled={disabled}
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-labelledby={labelId}
        aria-controls={listboxId}
        className={`luxury-input flex w-full cursor-pointer items-center justify-between gap-3 text-left disabled:cursor-not-allowed disabled:opacity-50 ${
          !value ? "text-muted/50" : "text-ivory"
        }`}
      >
        <span className="truncate">{value || "Select project type"}</span>
        <ChevronDown
          size={16}
          strokeWidth={1.5}
          className={`shrink-0 text-gold transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <ul
          id={listboxId}
          role="listbox"
          aria-label="Project type options"
          className="luxury-select-dropdown absolute left-0 right-0 z-50 mt-2 max-h-72 overflow-y-auto border border-gold/25 bg-surface shadow-[0_16px_48px_-12px_rgba(0,0,0,0.8)]"
        >
          {groups.map((group) => (
            <li key={group.label} role="presentation">
              <p className="sticky top-0 border-b border-border bg-background px-4 py-2.5 text-[10px] uppercase tracking-[0.25em] text-gold">
                {group.label}
              </p>
              <ul role="group" aria-label={group.label}>
                {group.options.map((option) => (
                  <li key={option} role="option" aria-selected={value === option}>
                    <button
                      type="button"
                      onClick={() => selectOption(option)}
                      className={`w-full px-4 py-2.5 text-left text-sm transition-colors duration-200 hover:bg-gold/10 ${
                        value === option
                          ? "bg-gold/15 text-gold"
                          : "text-ivory/90"
                      }`}
                    >
                      {option}
                    </button>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
