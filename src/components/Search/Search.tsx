import React, { useEffect, KeyboardEvent, MouseEvent, useState, ChangeEvent } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { default as IconSearch } from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import useDebounce from '../../utils/hooks/useDebounce';

import API from '../../utils/api';
import AutoComplete from '../AutoComplete';
import colors from '../../utils/styles/colors';

const CONSTANTS = {
  API_DELAY: 300,
  PLACEHOLDER_TEXT: 'Search Packages',
  ABORT_ERROR: 'AbortError',
};

const Search: React.FC<RouteComponentProps<{}>> = ({ history }) => {
  const [searchTerm, setSearchTerm] = useState();
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState();
  const [suggestions, setSuggestions] = useState();
  const debouncedSearchTerm = useDebounce(searchTerm, CONSTANTS.API_DELAY);

  // Effect for API call
  useEffect(
    () => {
      if (debouncedSearchTerm) {
        setIsSearching(true);
        handleFetchPackages(debouncedSearchTerm).then(results => {
          setIsSearching(false);
          setSuggestions(results);
        });
      } else {
        setSuggestions([]);
      }
    },
    [debouncedSearchTerm] // Only call effect if debounced search term changes
  );

  /**
   * Fetch packages from API.
   * For AbortController see: https://developer.mozilla.org/en-US/docs/Web/API/AbortController
   */
  const handleFetchPackages = async (value: string) => {
    // @ts-ignore : Property 'AbortController' does not exist on type 'Window'
    const controller = new window.AbortController();
    const signal = controller.signal;

    return await API.request(`search/${encodeURIComponent(value)}`, 'GET', { signal })
      .then(response => response.json())
      .then(response => response.data.results)
      .catch(error => {
        setSuggestions([]);
        setError(error);
      });
  };
  /**
   * onChange method for the input element.
   */
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  /**
   * Cancel all the request from list and make request list empty.
   */
  const handlePackagesClearRequested = () => {
    setSuggestions([]);
  };

  console.log('suggestions', suggestions);

  return <input placeholder="Search Marvel Comics" onChange={handleSearch} />;
};

export default withRouter(Search);
