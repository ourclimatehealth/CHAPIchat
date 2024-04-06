declare const _default: {
    embedder: () => Promise<import("mongodb-rag-core").Embedder>;
    embeddedContentStore: () => import("mongodb-rag-core").EmbeddedContentStore & import("mongodb-rag-core").DatabaseConnection;
    pageStore: () => import("mongodb-rag-core").MongoDbPageStore;
    ingestMetaStore: () => import("mongodb-rag-ingest").IngestMetaStore;
    chunkOptions: () => {
        transform: import("mongodb-rag-ingest/embed").ChunkTransformer;
    };
    dataSources: () => Promise<import("mongodb-rag-ingest/sources").DataSource[]>;
};
export default _default;
//# sourceMappingURL=ingest.config.d.ts.map