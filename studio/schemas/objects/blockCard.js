export default {
  name: "cardBlock",
  type: "object",
  title: "Card Block",
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'body',
      type: 'projectPortableText',
      title: 'Body'
    },
    {
      name: 'button',
      type: 'callToAction',
      title: 'Button',
    }
  ]
}