// src/components/withCalculations.js
import React from "react";

const withCalculations = (WrappedComponent) => {
  return function EnhancedComponent(props) {
    const { students } = props;

    const allMarks = students.flatMap((s) => s.marks);
    const total = allMarks.reduce((sum, mark) => sum + mark, 0);
    const average = allMarks.length > 0 ? total / allMarks.length : 0;

    return <WrappedComponent {...props} total={total} average={average} />;
  };
};

export default withCalculations;
