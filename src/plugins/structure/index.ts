import { type PluginOptions } from 'sanity';
import { structureTool } from 'sanity/structure';

export default () => structureTool() satisfies PluginOptions;
