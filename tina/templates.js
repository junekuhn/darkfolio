export function projectFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "image",
      name: "thumbnail",
      label: "thumbnail",
    },
    {
      type: "string",
      name: "year",
      label: "year",
    },
    {
      type: "string",
      name: "categories",
      label: "categories",
      list: true,
    },
  ];
}
