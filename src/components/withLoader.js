// src/components/withLoader.js
import React, { useEffect, useState } from "react";

const withLoader = (WrappedComponent, delay = 2000) => {
  return function WithLoaderComponent(props) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), delay);
      return () => clearTimeout(timer); // Clean up
    }, [delay]);

    if (loading) {
      return <div>Loading...</div>; // You can replace this with a spinner
    }

    return <WrappedComponent {...props} />;
  };
};

export default withLoader;
