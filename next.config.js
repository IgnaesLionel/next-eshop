const withImages = require("next-images");

module.exports = {
  ...withImages(),
  env: {
    BASE_URL: "http://localhost:3025",
    MONGODB_URL:
      "mongodb+srv://frakzor:1DebianHell1@cluster0.1jdnj.mongodb.net/Cuvelier?retryWrites=true&w=majority",
    ACCESS_TOKEN_SECRET: "Ze5(c'vuhj88hH$<8`&EK?3^S'/[pqM6%:4Rfj=LZZ3xC&_",
    REFRESH_TOKEN_SECRET:
      "Zk(yx4&pxSZV$kyPYmRW>;v!VX9NT^;MzeLk*>Pj4$F94D4<&<C}SNZB&/T<F5D`@5pBqq<<whP%wL",
    PAYPAL_CLIENT_ID:
      "A5Fs1Wc4YpL0ZLHZ9Y6g-ZfbxHvdAb3IlP.pUbTKb7JZtRdWKQ2HxEJI",
    CLOUD_UPDATE_PRESET: "cuvelier",
    CLOUD_NAME: "dfqoyvi4w",
    CLOUD_API: "https://api.cloudinary.com/v1_1/dfqoyvi4w/image/upload",
  },
  future: {
    webpack5: true,
  },
};

//#11
