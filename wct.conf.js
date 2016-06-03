module.exports = {
  "plugins": {
    "local": {
      "browsers": ["chrome"]
    },
    "istanbul": {
      "dir": "./coverage",
      "reporters": ["text-summary", "lcov"],
      "include": [
        "src/*.html"
      ],
      "exclude": [

      ]
    }
  }
};
