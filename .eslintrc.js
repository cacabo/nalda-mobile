module.exports = {
    "extends": "airbnb",
    "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "no-underscore-dangle": ["error", { "allow": ["_id"] }],
      "react/forbid-prop-types": ["disabled", {}],
      "react/no-array-index-key": ["disabled", {}],
    }
};
