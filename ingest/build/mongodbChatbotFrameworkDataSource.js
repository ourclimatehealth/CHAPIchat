"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoDbChatbotFrameworkDocsDataSourceConstructor = void 0;
/**
  @fileoverview Data source for the MongoDB Chatbot Framework docs.
 */
const sources_1 = require("mongodb-rag-ingest/sources");
const mongodbChatbotFrameworkDocsConfig = {
    name: "mongodb-rag-framework",
    repoUrl: "https://github.com/ourclimatehealth/CHAPIchat",
    repoLoaderOptions: {
        branch: "main",
    },
    filter: (path) => path.startsWith("/data") &&
        path.endsWith(".txt") &&
        !path.endsWith("README.md"),
    pathToPageUrl(pathInRepo) {
        const baseUrl = "https://github.com/ourclimatehealth/CHAPIchat";
        const path = pathInRepo
            .replace(/^\/docs\/docs\//, "")
            .replace(/\.md$/, "")
            .replace(/index$/, "");
        return `${baseUrl}${path}`;
    },
    extractTitle: (pageContent, frontmatter) => frontmatter?.title ?? extractFirstH1(pageContent),
};
// Helper function
function extractFirstH1(markdownText) {
    const lines = markdownText.split("\n");
    for (let line of lines) {
        if (line.startsWith("# ")) {
            // Remove '# ' and any leading or trailing whitespace
            return line.substring(2).trim();
        }
    }
    return null;
}
const mongoDbChatbotFrameworkDocsDataSourceConstructor = async () => await (0, sources_1.makeMdOnGithubDataSource)(mongodbChatbotFrameworkDocsConfig);
exports.mongoDbChatbotFrameworkDocsDataSourceConstructor = mongoDbChatbotFrameworkDocsDataSourceConstructor;
//# sourceMappingURL=mongodbChatbotFrameworkDataSource.js.map