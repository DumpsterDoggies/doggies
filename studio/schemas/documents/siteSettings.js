export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: [
    // 'create',
    'update',
    // 'delete',
    'publish'
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'We are a small group of volunteers 100% powered by small donations from people like you, dedicated to improving lives of stray dogs in Turkey. 100% of the donations go to the dogs. We are also looking for digital volunteers and in person.'
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'stray dogs, dumpster doggies, adoption, spayed, neutered',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'author',
      type: 'reference',
      description: 'Publish an author and set a reference to them here.',
      title: 'Author',
      to: [{type: 'person'}]
    }
  ]
}
