export default {
  name: "callToAction",
  type: "object",
  title: "Call to Action",
  fields: [
    {
      name: 'linkText',
      type: 'string',
      title: 'Link Text'
    },
    {
      name: 'linkImage',
      type: 'figure',
      title: 'Link Image'
    },
    {
      name: 'url',
      type: 'url',
      title: 'URL'
    }
  ]
}