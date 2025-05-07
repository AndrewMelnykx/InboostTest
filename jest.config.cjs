module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "jest-transform-stub",
  },
  maxWorkers: "50%",
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
  moduleNameMapper: {
    "^@variables$": "<rootDir>/src/helpers/_variables.scss",
    "^@assets/(.*)$": "<rootDir>/src/assets/$1",
    "^@store/(.*)$": "<rootDir>/src/store/$1",
    "^@slices/(.*)$": "<rootDir>/src/components/redux/slices/$1",
    "^@selectors/(.*)$": "<rootDir>/src/components/redux/selectors/$1",
    "^@helpers/(.*)$": "<rootDir>/src/helpers/$1",
    "^@header/(.*)$": "<rootDir>/src/components/header/$1",
    "^@main-page/(.*)$": "<rootDir>/src/components/main-page/$1",
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@tasks-list/(.*)$": "<rootDir>/src/components/tasks-list/$1",
    "^@main-input/(.*)$": "<rootDir>/src/components/main-input/$1",
    "^@custom-checkbox/(.*)$": "<rootDir>/src/components/custom-checkbox/$1",
    "^@nav-bar/(.*)$": "<rootDir>/src/components/nav-bar/$1",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(lodash-es|@babel|@testing-library)/)",
  ],
  verbose: true,
};
