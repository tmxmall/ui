import React, { KeyboardEvent, Component, useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { default as IconSearch } from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import useDebounce from '../../utils/hooks/useDebounce';

import API from '../../utils/api';
import AutoComplete from '../AutoComplete';
import colors from '../../utils/styles/colors';

export type cancelAllSearchRequests = () => void;
export type handlePackagesClearRequested = () => void;
export type handleSearch = (event: KeyboardEvent<HTMLInputElement>, { newValue, method }: { newValue: string; method: string }) => void;
export type handleClickSearch = (
  event: KeyboardEvent<HTMLInputElement>,
  { suggestionValue, method }: { suggestionValue: Array<object>; method: string }
) => void;
export type handleFetchPackages = ({ value: string }) => Promise<void>;
export type onBlur = (event: KeyboardEvent<HTMLInputElement>) => void;

const CONSTANTS = {
  API_DELAY: 300,
  PLACEHOLDER_TEXT: 'Search Packages',
  ABORT_ERROR: 'AbortError',
};

const Search: React.FC<RouteComponentProps<{}>> = ({ history }) => {
  // error: A boolean value to indicate API error.
  const [error, setError] = useState();
  // loaded: A boolean value to indicate that result has been loaded.
  const [loaded, setIsLoaded] = useState();
  // isLoading: A boolean value to indicate that request is in pending state.
  const [isLoading, setIsLoading] = useState();
  const [suggestions, setSuggestions] = useState<Array<any>>([]);
  const [search, setSearch] = useState('');
  const [requestList, setRequestList] = useState<Array<any>>([]);

  /**
   * Cancel all the requests which are in pending state.
   */
  const cancelAllSearchRequests: cancelAllSearchRequests = () => {
    requestList.forEach(request => request.abort());
    setRequestList([]);
  };

  /**
   * Cancel all the request from list and make request list empty.
   */
  const handlePackagesClearRequested: handlePackagesClearRequested = () => {
    setSuggestions([]);
  };

  /**
   * onChange method for the input element.
   */
  const handleSearch: handleSearch = (event, { newValue, method }) => {
    // stops event bubbling
    event.stopPropagation();
    if (method === 'type') {
      const value = newValue.trim();
      setSearch(search);
      setIsLoaded(false);
      setIsLoading(true);
      setError(false);

      /**
       * A use case where User keeps adding and removing value in input field,
       * so we cancel all the existing requests when input is empty.
       */
      if (value.length === 0) {
        cancelAllSearchRequests();
      }
    }
  };

  /**
   * Fetch packages from API.
   * For AbortController see: https://developer.mozilla.org/en-US/docs/Web/API/AbortController
   */
  const handleFetchPackages: handleFetchPackages = async ({ value }) => {
    try {
      // @ts-ignore
      const controller = new window.AbortController();
      const signal = controller.signal;
      // Keep track of search requests.
      setRequestList([...requestList, controller]);
      const suggestions = await API.request(`search/${encodeURIComponent(value)}`, 'GET', { signal });
      setSuggestions(suggestions as Array<any>);
      isLoading(true);
    } catch (error) {
      /**
       * AbortError is not the API error.
       * It means browser has cancelled the API request.
       */
      if (error.name === CONSTANTS.ABORT_ERROR) {
        setError(false);
        setIsLoaded(false);
      } else {
        setError(true);
        setIsLoaded(false);
      }
    } finally {
      isLoading(false);
    }
  };

  /**
   * When an user select any package by clicking or pressing return key.
   */
  const handleClickSearch: handleClickSearch = (event, { suggestionValue, method }: any) => {
    // stops event bubbling
    event.stopPropagation();
    switch (method) {
      case 'click':
      case 'enter':
        setSearch('');
        history.push(`/-/web/detail/${suggestionValue}`);
        break;
    }
  };

  /**
   * As user focuses out from input, we cancel all the request from requestList
   * and set the API state parameters to default boolean values.
   */
  const handleOnBlur: onBlur = event => {
    // stops event bubbling
    event.stopPropagation();
    setIsLoaded(false);
    setIsLoading(false);
    setError(false);
    cancelAllSearchRequests();
  };

  return (
    <AutoComplete
      color={colors.white}
      onBlur={handleOnBlur}
      onChange={handleSearch}
      onCleanSuggestions={handlePackagesClearRequested}
      onClick={handleClickSearch}
      onSuggestionsFetch={useDebounce(handleFetchPackages, CONSTANTS.API_DELAY)}
      placeholder={CONSTANTS.PLACEHOLDER_TEXT}
      startAdornment={
        <InputAdornment position="start" style={{ color: colors.white }}>
          <IconSearch />
        </InputAdornment>
      }
      suggestions={suggestions}
      suggestionsError={error}
      suggestionsLoaded={loaded}
      suggestionsLoading={isLoading}
      value={search}
    />
  );
};

export default withRouter(Search);
