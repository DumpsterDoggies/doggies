export default {
  name: "spendenLetter",
  type: "object",
  title: "Letter",
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
    
  ]
}