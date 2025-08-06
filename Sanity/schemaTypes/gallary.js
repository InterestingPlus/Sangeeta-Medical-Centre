import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'gallary',
  title: 'Gallary',
  type: 'document',
  fields: [
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
    }),
    defineField({
      name: 'alt',
      title: 'alt',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'category',
      media: 'image',
    },
  },
})
