import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'infra',
  title: 'Infra',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(5),
    }),
    defineField({
      name: 'mainImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Body Content',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
    prepare(selection) {
      return {
        ...selection,
      }
    },
  },
})
