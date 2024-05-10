import { internationalizedArray } from 'sanity-plugin-internationalized-array';

export default () =>
  internationalizedArray({
    languages: [{ id: 'en', title: 'English' }],
    defaultLanguages: ['en'],
    fieldTypes: ['string', 'text'],
  });
