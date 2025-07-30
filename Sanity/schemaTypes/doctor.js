import {defineType, defineField} from 'sanity'

// schemas/doctor.js

export default defineType({
  name: 'doctor',
  title: 'Doctor',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Doctor Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'designation',
      title: 'Designation',
      type: 'string',
      description: 'e.g., Founder & Senior Orthopedic Surgeon',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true, // Enable hotspot for image cropping
      },
      description: 'Main profile picture of the doctor.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'education',
      title: 'Education',
      type: 'string',
      description: 'e.g., M.B.B.S., M.S. (Orthopaedics)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A brief description or introduction to the doctor.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'experienceYears',
      title: 'Years of Experience',
      type: 'string', // Keeping as string to allow "35+"
      description: 'e.g., "35+"',
    }),
    defineField({
      name: 'hospital',
      title: 'Hospital Name',
      type: 'string',
      description: 'e.g., Mrityunjay Orthopedic Hospital',
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string',
      description: 'e.g., Senior Orthopedic Surgeon (Can be same as designation)',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string', // Using string for email as per your component
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string', // Using string for phone as per your component
    }),
    defineField({
      name: 'timings',
      title: 'Working Timings',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of daily timings, e.g., "Mon - Sat: 10.00 AM - 4.00 PM"',
    }),
    defineField({
      name: 'emergency',
      title: 'Emergency Availability',
      type: 'string',
      description: 'e.g., "24 hours"',
    }),
    defineField({
      name: 'legacy',
      title: 'Clinical Legacy & Experience',
      type: 'array',
      of: [
        {
          type: 'block', // Use 'block' for rich text content if you want bolding, etc.
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [{title: 'Bullet', value: 'bullet'}],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
            ],
          },
        },
        // Or if you prefer plain strings for list items:
        // { type: 'string' }
      ],
      description: 'Key achievements and experiences as a list.',
    }),
    defineField({
      name: 'expertise',
      title: 'Areas of Expertise',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Expertise Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'string',
              description: 'Short description under the title.',
            },
            {
              name: 'icon',
              title: 'Icon',
              type: 'image',
              description: 'Image icon for this expertise area.',
            },
          ],
          preview: {
            select: {
              title: 'title',
              media: 'icon',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'images',
      title: 'Gallery Images',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
      description: "Additional images for the doctor's profile gallery.",
    }),
    defineField({
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      fields: [
        {
          name: 'address',
          title: 'Address',
          type: 'string',
        },
        {
          name: 'phone',
          title: 'Phone Number',
          type: 'string',
        },
        {
          name: 'email',
          title: 'Email Address',
          type: 'string',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'designation',
      media: 'profileImage',
    },
  },
})
