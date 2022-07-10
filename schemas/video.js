export default {
  name: "video",
  title: "Video",
  type: "document",
  fields: [
    {
      name: "course",
      title: "Course",
      // A reference is a way to point to another document
      type: "reference",
      // This reference is only allowed to point to a document of the type person,
      // we could list more types, but let's keep this simple:
      to: [{ type: "course" }],
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "blockContent",
    },
    {
      name: "priority",
      title: "Priority",
      type: "number",
      description: "0 = Highest priority, appears first in the list",
    },
  ],

  initialValue: {
    priority: 0,
  },

  preview: {
    select: {
      title: "name",
      course: "course.name",
      media: "course.thumbnail",
    },
    prepare(selection) {
      const { course } = selection;
      return Object.assign({}, selection, {
        subtitle: course && `${course}`,
      });
    },
  },
};
