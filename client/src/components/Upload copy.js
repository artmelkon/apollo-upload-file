import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useMutation, gql } from "@apollo/client";
// import { Mutation } fron '@apollo/client/react/components'

import { UPLOAD_FILE } from "../queries";
// import { GET_ALL_FILES, UPLOAD_FILE } from "../queries";

// import { GET_ALL_FILES } from "./Files";

// export const UPLOAD_FILE = gql`
//   mutation UploadFile($file: Upload!) {
//     uploadFile(file: $file)
//   }
// `;

export const Upload = () => {
  const [uploadFile] = useMutation(UPLOAD_FILE, {
    refetchQueries: [{ query: GET_ALL_FILES }],
  });

  const onDrop = useCallback(
    ([file]) => {
      console.log("upload file ", file);
      uploadFile({ variables: { file } });
    },
    [uploadFile]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the file here...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to selec tfiles</p>
      )}
    </div>
  );
};
