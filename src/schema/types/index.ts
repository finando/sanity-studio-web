import { type SchemaPluginOptions } from 'sanity';

import documents from './documents';
import objects from './objects';

export default [...documents, ...objects] as SchemaPluginOptions['types'];
