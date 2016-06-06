module.exports = {
  "plugins": {
    "local": {
      "browsers": []
    },
    "istanbul": {
      "dir": "./coverage",
      "reporters": ["text-summary", "lcov"],
      "include": [
        "/src/shop-home.html"
      ],
      "exclude": [

      ]
    }
  }
};
