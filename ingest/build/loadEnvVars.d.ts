/**
  Load environment variables from a .env file at the given path.
  Note that if you change the environment variable names,
  you need to update this function to support those environment variables.
 */
export declare function loadEnvVars(path: string): {
    MONGODB_CONNECTION_URI: string;
    MONGODB_DATABASE_NAME: string;
    VECTOR_SEARCH_INDEX_NAME: string;
    OPENAI_API_KEY: string;
    OPENAI_EMBEDDING_MODEL: string;
};
//# sourceMappingURL=loadEnvVars.d.ts.map