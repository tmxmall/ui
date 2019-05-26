import React from 'react';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import MenuItem from '@material-ui/core/MenuItem';

interface Props {
  suggestion: Suggestion;
  query: string;
  isSelected: boolean;
  isSearching: boolean;
}

interface Suggestion {
  label: string;
}

const AutoCompleteSuggestion: React.FC<Props> = ({ isSearching, suggestion, query, isSelected }) => {
  const matches = match(suggestion.label, query);
  const parts = parse(suggestion.label, matches);

  return (
    <MenuItem selected={isSelected} component="div">
      <div>
        {isSearching
          ? 'Loading'
          : parts.map(part => (
              <span key={part.text} style={{ fontWeight: part.highlight ? 500 : 400 }}>
                {part.text}
              </span>
            ))}
      </div>
    </MenuItem>
  );
};

export default AutoCompleteSuggestion;
