// schemas/specialty.js

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'specialty',
  title: 'Specialty',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Specialty Name',
      type: 'string',
      description: 'e.g., Shoulder Department, Hip Department',
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
      name: 'icon',
      title: 'Specialty Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'An icon representing this specialty.',
    }),
    defineField({
      name: 'mainImage',
      title: 'Hero Image',
      type: 'image',
      options: {hotspot: true},
      description: 'The primary image.',
    }),
    defineField({
      name: 'mainDescription',
      title: 'Main Department Description',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
            ],
          },
        },
      ],
      description: 'Introductory paragraphs for the specialty department.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sections',
      title: 'Specialty Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'specialtySection',
          title: 'Section',
          fields: [
            defineField({
              name: 'sectionId',
              title: 'Section ID (for URL anchor)',
              type: 'string',
              description:
                'Unique ID for this section, e.g., "Instability", "Rotator". Used for direct links.',
              validation: (Rule) =>
                Rule.required().regex(
                  /^[a-zA-Z0-9-]+$/,
                  'Invalid ID. Use alphanumeric characters and hyphens only.',
                ),
            }),
            defineField({
              name: 'title',
              title: 'Section Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'mainImage',
              title: 'Main Section Image',
              type: 'image',
              options: {hotspot: true},
              description: 'The primary image for this section.',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'array',
              of: [
                {
                  type: 'block',
                  styles: [{title: 'Normal', value: 'normal'}],
                  lists: [],
                  marks: {
                    decorators: [
                      {title: 'Strong', value: 'strong'},
                      {title: 'Emphasis', value: 'em'},
                    ],
                  },
                },
              ],
              description: 'Detailed description for this section.',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'secondaryImage',
              title: 'Secondary Image (for two-column layout)',
              type: 'image',
              options: {hotspot: true},
              description: 'Optional image for a two-column layout within the section.',
            }),
            defineField({
              name: 'bulletPoints',
              title: 'Key Bullet Points',
              type: 'array',
              of: [
                {
                  type: 'block', // Use block for rich text in list items
                  styles: [{title: 'Normal', value: 'normal'}],
                  lists: [],
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
              description: 'Important points or protocols for this section.',
            }),
            defineField({
              name: 'conclusion',
              title: 'Concluding Paragraph',
              type: 'array',
              of: [
                {
                  type: 'block',
                  styles: [{title: 'Normal', value: 'normal'}],
                  lists: [],
                  marks: {
                    decorators: [
                      {title: 'Strong', value: 'strong'},
                      {title: 'Emphasis', value: 'em'},
                    ],
                  },
                },
              ],
              description: 'A concluding summary for this section.',
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'sectionId',
              media: 'mainImage',
            },
            prepare(selection) {
              const {title, subtitle, media} = selection
              return {
                title: title,
                subtitle: `Section ID: ${subtitle}`,
                media: media,
              }
            },
          },
        },
      ],
      description: 'Add individual sub-sections like Shoulder Instability, Rotator Cuff Tear, etc.',
    }),
    defineField({
      name: 'uniqueSellingPoints',
      title: 'What Makes This Department Different',
      type: 'array',
      of: [
        {
          type: 'block', // Use block for rich text in list items
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
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
      description: 'Highlight key differentiators of this department.',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'slug.current',
      media: 'mainImage',
    },
  },
})
