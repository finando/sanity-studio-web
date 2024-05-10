import { type DocumentPluginOptions } from 'sanity';

export default {
  actions: (previous) => previous,
  newDocumentOptions: (previous) => previous,
} satisfies DocumentPluginOptions;
