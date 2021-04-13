// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import dog from './documents/dog'
import person from './documents/person'
import post from './documents/post'
import siteSettings from './documents/siteSettings'

// Object types
import bioPortableText from './objects/bioPortableText'
import figure from './objects/figure'
import projectMember from './objects/projectMember'
import projectPortableText from './objects/projectPortableText'
import simplePortableText from './objects/simplePortableText'
import spendenImage from './objects/spendenImage'
import spendenThreeBlock from './objects/spendenThreeBlock'
import spendenLetter from './objects/spendenLetter'
import spenden from './documents/spenden'
import callToAction from './objects/callToAction'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'dumpsterdoggies',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    bioPortableText,
    figure,
    projectMember,
    projectPortableText,
    simplePortableText,
    callToAction,
    spendenImage,
    spendenThreeBlock,
    spendenLetter,

    // The following are document types which will appear
    // in the studio.
    dog,
    person,
    post,
    siteSettings,
    spenden
  ])
})
