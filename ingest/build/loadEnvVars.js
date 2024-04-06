"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadEnvVars = void 0;
const assert_1 = require("assert");
const dotenv_1 = __importDefault(require("dotenv"));
/**
  Load environment variables from a .env file at the given path.
  Note that if you change the environment variable names,
  you need to update this function to support those environment variables.
 */
function loadEnvVars(path) {
    dotenv_1.default.config({ path });
    const { MONGODB_CONNECTION_URI, MONGODB_DATABASE_NAME, VECTOR_SEARCH_INDEX_NAME, OPENAI_API_KEY, OPENAI_EMBEDDING_MODEL, } = process.env;
    (0, assert_1.strict)(MONGODB_CONNECTION_URI, "MONGODB_CONNECTION_URI is required");
    (0, assert_1.strict)(MONGODB_DATABASE_NAME, "MONGODB_DATABASE_NAME is required");
    (0, assert_1.strict)(VECTOR_SEARCH_INDEX_NAME, "VECTOR_SEARCH_INDEX_NAME is required");
    (0, assert_1.strict)(OPENAI_API_KEY, "OPENAI_API_KEY is required");
    (0, assert_1.strict)(OPENAI_EMBEDDING_MODEL, "OPENAI_EMBEDDING_MODEL is required");
    return {
        MONGODB_CONNECTION_URI,
        MONGODB_DATABASE_NAME,
        VECTOR_SEARCH_INDEX_NAME,
        OPENAI_API_KEY,
        OPENAI_EMBEDDING_MODEL,
    };
}
exports.loadEnvVars = loadEnvVars;
//# sourceMappingURL=loadEnvVars.js.map