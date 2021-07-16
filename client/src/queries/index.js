import { gql } from "@apollo/client";

/* --> UPLOADED FILE QUERY <-- */
export const GET_ALL_FILES = gql`
  query {
    files
  }
`;

export const UPLOAD_FILE = gql `
  mutation UploadFile($file: Upload!) {
    uploadFile(file: $file)
  }
`;
