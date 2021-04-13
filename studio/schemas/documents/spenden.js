export default {
  
  // Setup a 'document' type to house the page builder field
  
  name: "spenden",
  type: "document",
  title: "Spenden",
  fields: [
    {
      name: 'content',
      type: 'array',
      title: 'Content Blocks',
      of: [
        { type: 'spendenThreeBlock' }, 
        { type: 'spendenImage' },
        { type: 'spendenLetter' }
        ]
    }
  ]
}