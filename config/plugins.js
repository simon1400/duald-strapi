module.exports = ({ env }) => ({
  meilisearch: {
    config: {
      host: "http://localhost:7700",
      apiKey: process.env.MEILISEARCH_TOKEN,
      product: {
        indexName: process.env.MEILISEARCH_PREFIX+'product',
        transformEntry({ entry }) {
          return {
            ...entry,
            categoryTitles: entry.categories.map(item => item.title),
          }
        },
        settings: {
          filterableAttributes: ['categoryTitles'],
          sortableAttributes: ['price'],
          searchableAttributes: [
            'title',
            'categoryTitles',
            "price",
            'slug'
          ],
        },
      }
    }
  },
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  graphql: {
    enabled: true,
    config: {
      defaultLimit: 50,
      depthLimit: 50,
      maxLimit: 50,
    }
  },
  'drag-drop-content-types': {
    enabled: true
  }
})
