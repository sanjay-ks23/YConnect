"use client";

import * as React from "react";
import { X, ChevronDown, Check } from "lucide-react";

export interface MultiSelectOption {
    value: string;
    label: string;
    disable?: boolean;
}

interface MultiSelectProps {
    options: MultiSelectOption[];
    value?: string[];
    onValueChange?: (value: string[]) => void;
    defaultValue?: string[];
    placeholder?: string;
    maxCount?: number;
    accentColor?: string;
    className?: string;
}

export function MultiSelect({
    options,
    value: controlledValue,
    onValueChange,
    defaultValue = [],
    placeholder = "Select options...",
    maxCount = 3,
    accentColor = "#2E31D1",
    className = "",
}: MultiSelectProps) {
    const [internalValue, setInternalValue] = React.useState<string[]>(defaultValue);
    const [isOpen, setIsOpen] = React.useState(false);
    const [search, setSearch] = React.useState("");
    const containerRef = React.useRef<HTMLDivElement>(null);
    const inputRef = React.useRef<HTMLInputElement>(null);

    const selectedValues = controlledValue ?? internalValue;

    const updateValues = (newValues: string[]) => {
        if (!controlledValue) setInternalValue(newValues);
        onValueChange?.(newValues);
    };

    const toggleOption = (val: string) => {
        const opt = options.find((o) => o.value === val);
        if (opt?.disable) return;

        if (selectedValues.includes(val)) {
            updateValues(selectedValues.filter((v) => v !== val));
        } else {
            updateValues([...selectedValues, val]);
        }
        setSearch("");
    };

    const removeValue = (val: string, e?: React.MouseEvent) => {
        e?.stopPropagation();
        updateValues(selectedValues.filter((v) => v !== val));
    };

    const filteredOptions = options.filter((opt) =>
        opt.label.toLowerCase().includes(search.toLowerCase())
    );

    // Close on outside click
    React.useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setIsOpen(false);
                setSearch("");
            }
        };
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, []);

    const displayedBadges = selectedValues.slice(0, maxCount);
    const extraCount = selectedValues.length - maxCount;

    return (
        <div ref={containerRef} className={`relative ${className}`}>
            {/* Trigger */}
            <div
                className="input-bouncy cursor-pointer flex flex-wrap items-center gap-1.5 min-h-[48px] pr-10"
                style={{ "--ring": accentColor } as React.CSSProperties}
                onClick={() => {
                    setIsOpen(!isOpen);
                    setTimeout(() => inputRef.current?.focus(), 50);
                }}
            >
                {displayedBadges.map((val) => {
                    const opt = options.find((o) => o.value === val);
                    return (
                        <span
                            key={val}
                            className="inline-flex items-center gap-1 bg-foreground/8 text-foreground/70 text-xs font-medium px-2.5 py-1 rounded-full"
                        >
                            {opt?.label ?? val}
                            <button
                                type="button"
                                onClick={(e) => removeValue(val, e)}
                                className="hover:text-foreground transition-colors"
                            >
                                <X className="w-3 h-3" />
                            </button>
                        </span>
                    );
                })}
                {extraCount > 0 && (
                    <span className="text-xs text-foreground/40 font-medium">
                        +{extraCount} more
                    </span>
                )}
                {selectedValues.length === 0 && !search && (
                    <span className="text-foreground/30 text-sm">{placeholder}</span>
                )}
                <input
                    ref={inputRef}
                    type="text"
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                        if (!isOpen) setIsOpen(true);
                    }}
                    onFocus={() => setIsOpen(true)}
                    className="flex-1 min-w-[60px] bg-transparent outline-none text-sm text-foreground placeholder:text-foreground/30"
                    placeholder={selectedValues.length > 0 ? "" : ""}
                    onKeyDown={(e) => {
                        if (e.key === "Backspace" && !search && selectedValues.length > 0) {
                            updateValues(selectedValues.slice(0, -1));
                        }
                        // Prevent form Enter from submitting while dropdown is open
                        if (e.key === "Enter") {
                            e.preventDefault();
                            e.stopPropagation();
                        }
                    }}
                />
                <ChevronDown className={`w-4 h-4 text-foreground/30 absolute right-4 top-1/2 -translate-y-1/2 transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </div>

            {/* Dropdown */}
            {isOpen && (
                <div
                    className="absolute z-50 top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-border/30 max-h-[240px] overflow-y-auto animate-slide-right"
                    style={{ overscrollBehavior: "contain" }}
                    onWheel={(e) => e.stopPropagation()}
                >
                    {filteredOptions.length === 0 ? (
                        <div className="px-4 py-3 text-sm text-foreground/40">No options found</div>
                    ) : (
                        filteredOptions.map((opt) => {
                            const isSelected = selectedValues.includes(opt.value);
                            return (
                                <button
                                    key={opt.value}
                                    type="button"
                                    disabled={opt.disable}
                                    onClick={() => toggleOption(opt.value)}
                                    className={`w-full text-left px-4 py-2.5 text-sm flex items-center gap-3 transition-colors ${opt.disable
                                        ? "text-foreground/20 cursor-not-allowed"
                                        : isSelected
                                            ? "bg-foreground/5 text-foreground font-medium"
                                            : "text-foreground/70 hover:bg-foreground/5"
                                        }`}
                                >
                                    <div
                                        className={`w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 ${isSelected
                                            ? "border-transparent"
                                            : "border-foreground/20"
                                            }`}
                                        style={isSelected ? { backgroundColor: accentColor } : {}}
                                    >
                                        {isSelected && <Check className="w-3 h-3 text-white" />}
                                    </div>
                                    {opt.label}
                                </button>
                            );
                        })
                    )}
                </div>
            )}
        </div>
    );
}
