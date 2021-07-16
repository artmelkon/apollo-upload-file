const { createWriteStream } = require("fs");
const path = require('path')

const files = [];

exports.resolvers = {
  RootQuery: {
    files: () => files,
  },
  RootMutation: {
    uploadFile: async (_, { file }) => {
      const { createReadStream, filename } = await file;

      await new Promise((res) =>
        createReadStream()
          .pipe(createWriteStream(path.join(__dirname, "../public/images", filename)))
          .on("close", res)
      );

      files.push(filename);

      return true;
    },
  },
};
