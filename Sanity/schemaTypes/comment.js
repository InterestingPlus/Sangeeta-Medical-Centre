import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'comment',
  title: 'Comment',
  type: 'document', // 🔁 changed from 'object' to 'document'
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'message',
      title: 'Comment',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().min(5),
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'string',
    }),
    defineField({
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'post',
      title: 'Post',
      type: 'reference',
      to: [{type: 'post'}],
      validation: (Rule) => Rule.required(),
    }),
  ],
})
