import { type SchemaPluginOptions } from 'sanity';

export default ((previous) => {
  const exclusions: string[] = [];

  return previous.filter(({ id }) => !exclusions.includes(id));
}) satisfies SchemaPluginOptions['templates'];
