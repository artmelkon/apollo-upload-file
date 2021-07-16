import React from "react";
import { useQuery, gql } from "@apollo/client";

import { GET_ALL_FILES } from "../queries";

export const Files = () => {
  const { loading, error, data } = useQuery(GET_ALL_FILES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error {error.message}</p>;
  console.log("file upload ", data);

  return (
    <div className="App">
      {data.files.map((imagename) => (
        <img
          style={{ width: 200 }}
          key={imagename}
          src={`http://localhost:4000/images/${imagename}`}
          alt={imagename}
        />
      ))}
    </div>
  );
};
