import React from 'react';

import API from '../../utils/api';
import AutoComplete from '../AutoComplete';

const Search: React.FC = () => {
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
      .then(response => response.data.results);
  };

  return <AutoComplete />;
};

export default Search;
