import React, { useState, useEffect } from 'react';

const withLoading = (WrappedComponent) => {
  return function WithLoading() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
        setData('Some fetched data');
      }, 2000);
    }, []);

    return <WrappedComponent isLoading={isLoading} data={data} />
  };
};

export default withLoading;

// Lets say you have multiple components that need to display a loading spinner while data is being fetched from 
// an API.Instead of adding the loading logic to each of these components, you can create an HOC that handles
// this loading behavior and then wrap the components that need it .


