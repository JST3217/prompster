import React from "react";
import Card from "./Card";
import { HiArrowNarrowRight } from "react-icons/hi";

interface Props {
  suggestions: string[];
  selectedIndex: number;
  onSelect: (suggestion: string) => void;
  position: "above" | "below";
}

const SuggestionList: React.FC<Props> = ({ suggestions, selectedIndex, onSelect, position }) => {
  const displaySuggestions = position === "above" ? [...suggestions].reverse() : suggestions;
  const displayIndex = position === "above" ? (suggestions.length - 1 - selectedIndex) : selectedIndex;

  return (
    <div className={
      `w-full
      ${suggestions.length > 0 ? "" : "hidden"}`
    }>
      <Card>
        <ul>
          {displaySuggestions.map((suggestion, index) => {
            const selected = index === displayIndex;
            return (
              <li
                key={suggestion}
                onClick={() => onSelect(suggestion)}
                className={`px-2 py-1 cursor-pointer rounded-sm ${selected ? "bg-blue-700" : ""}`}
              >
                <div className="flex flex-row items-center justify-between space-x-2">
                  {suggestion}
                  {selected ? <HiArrowNarrowRight /> : null}
                </div>
              </li>
            )}
          )}
        </ul>
      </Card>
    </div>
  );
};

export default SuggestionList;
