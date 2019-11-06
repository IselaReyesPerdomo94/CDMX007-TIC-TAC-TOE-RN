module.exports={
    rootDir:"./src",
    moduleNameMapper:{
        "^views/(.*)$": "<rootDir>/views/$1",
        "^components/(.*)$": "<rootDir>/components/$1",
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
      "\\.(css|less)$": "identity-obj-proxy"
    }
}