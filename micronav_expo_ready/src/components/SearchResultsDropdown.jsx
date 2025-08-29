import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function SearchResultsDropdown() {
  const { showSearchResults, searchResults, selectDestination, buildings, theme } = useContext(AppContext);
  if (!showSearchResults) return null;
  return (
    <div className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg max-h-60 overflow-auto" style={{ backgroundColor: theme.colors.card, borderColor: theme.colors.border }}>
      {searchResults.length > 0 ? (
        <ul className="py-1">
          {searchResults.map(result => (
            <li key={result.id} className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center" style={{ color: theme.colors.text, borderBottom: `1px solid ${theme.colors.border}` }} onClick={() => selectDestination(result)}>
              <span className="mr-2">{result.type === 'room' ? '🚪' : '📍'}</span>
              <div>
                <div className="font-medium">{result.name}</div>
                <div className="text-sm text-gray-500">{buildings.find(b => b.id === result.building)?.name} - {result.floor === 'f1' ? ' Ground Floor' : ` Floor ${result.floor.substring(1)}`}</div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="px-4 py-2 text-center" style={{ color: theme.colors.text }}>No results found</div>
      )}
    </div>
  );
}
