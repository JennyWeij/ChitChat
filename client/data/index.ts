export interface Post {
  name: string;
  role: string;
  timestamp: string;
  title?: string;
  content: string;
}

export const posts: Post[] = [
  {
    name: "Sophie",
    role: "admin",
    timestamp: "2023-04-16 20:19",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed diam eget erat eleifend molestie...",
  },
  {
    name: "John",
    role: "user",
    timestamp: "2023-04-16 18:30",
    content:
      "Morbi ut turpis a erat tincidunt tincidunt ut eget nibh. Suspendisse mi tortor, vulputate sed tortor ac...",
  },
  {
    name: "Emma",
    role: "user",
    timestamp: "2023-04-16 16:45",
    content:
      "Aliquam vel risus vel nisi auctor mollis. Duis faucibus consectetur lorem, id egestas metus...",
  },
];
