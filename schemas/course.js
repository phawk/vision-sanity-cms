export default {
  name: "course",
  title: "Course",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "blockContent",
      description: "Appears at the top of the course page",
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
      name: "priority",
      title: "Priority",
      type: "number",
      description: "0 = Most important, appears first in lists",
    },
    {
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      options: {
        hotspot: false,
      },
    },
  ],
};
