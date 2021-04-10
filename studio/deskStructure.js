import S from '@sanity/desk-tool/structure-builder'
import { MdSettings } from "react-icons/md";

const hiddenDocTypes = listItem =>
  ![ 'dog','person', 'post', 'siteSettings'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        )
        .icon(MdSettings),
      S.listItem()
        .title('Posts')
        .schemaType('post')
        .child(S.documentTypeList('post').title('Post')),
      S.listItem()
        .title('People')
        .schemaType('person')
        .child(S.documentTypeList('person').title('People')),
        S.listItem()
        .title('Dogs')
        .schemaType('dog')
        .child(S.documentTypeList('dog').title('Dog')),

      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
