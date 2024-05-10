import { defineConfig } from 'sanity';

import document from '@project/document';
import plugins from '@project/plugins';
import schema from '@project/schema';
import { type Environment } from '@project/types';
import { checkEnvironmentVariables } from '@project/utils';

const environment = window.env;

checkEnvironmentVariables<Environment>(environment, [
  'ENVIRONMENT',
  'PROJECT_ID',
  'DATASET',
]);

const { PROJECT_ID: projectId, DATASET: dataset } = environment;

export default defineConfig({
  name: 'default',
  title: 'Finando',
  projectId,
  dataset,
  plugins,
  schema,
  document,
  search: {
    enableLegacySearch: true,
  },
  scheduledPublishing: {
    enabled: false,
  },
});
