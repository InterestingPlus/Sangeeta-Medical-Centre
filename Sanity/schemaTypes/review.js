import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'patient',
      title: 'Patient Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'designation',
      title: 'Designation',
      type: 'string',
      description: 'e.g., Joint Replacement Patient, Attendant, L4-L5 Decompression',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Rating (out of 5)',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(5).integer(),
      description: 'Number of stars for the testimonial (1-5)',
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'text',
      validation: (Rule) => Rule.required().min(50),
    }),
  ],
  preview: {
    select: {
      title: 'patient',
      subtitle: 'designation',
      rating: 'rating',
    },
    prepare(selection) {
      const {title, subtitle, rating} = selection
      return {
        title: title,
        subtitle: `${subtitle} (${rating} stars)`,
      }
    },
  },
})
