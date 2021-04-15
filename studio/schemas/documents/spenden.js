export default {
  
  // Setup a 'document' type to house the page builder field
  
  name: "page",
  type: "document",
  title: "Page",
  fields: [
    {
      name:"name",
      type:"string",
      title:"Name"
    },
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