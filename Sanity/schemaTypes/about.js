import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'image1',
      title: 'Image 1',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'image2',
      title: 'Image 2',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'image3',
      title: 'Image 3',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'daysWorked',
      title: 'Days Worked',
      type: 'number',
    }),
    defineField({
      name: 'projectFinished',
      title: 'Project Finished',
      type: 'number',
    }),
    defineField({
      name: 'coffeeCup',
      title: 'Coffee Cup',
      type: 'number',
    }),
    defineField({
      name: 'clientSatisfied',
      title: 'Client Satisfied',
      type: 'number',
    }),

    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
    }),
    defineField({
      name: 'contact',
      title: 'Contact',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'hour',
      title: 'Hour',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'email',
      media: 'image1',
    },
  },
})
