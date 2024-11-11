import { Comment, db } from "astro:db";

export default async function () {
  await db.insert(Comment).values([
    {
      author: "John Doe",
      content: "Hello World (You shouldn't see this as it is unpublished)",
    },
    {
      author: "Jane Doe",
      content: "Hi! Really nice! Love your website!",
      published: true,
      highlight: true,
      response: "Thanks! 😊",
    },
    {
      author: "Alex Smith",
      content: "Could you add more details to your tutorials?",
      published: true,
    },
    {
      author: "Emma Brown",
      content: "Amazing content, really appreciate the hard work!",
      published: true,
      highlight: true,
      response: "Glad you liked it, Emma! 😊",
    },
    {
      author: "Chris Lee",
      content: "This didn't work for me, getting an error on line 4.",
      published: true,
      response:
        "Hey Chris, try updating your dependencies. Let me know if it works!",
    },
    {
      author: "Taylor Green",
      content: "When is the next update coming?",
      published: false,
    },
    {
      author: "John Doe",
      content: "Just testing unpublished comments.",
    },
    {
      author: "Sam Taylor",
      content: "Your tutorials helped me land my first developer job!",
      published: true,
      highlight: true,
      response: "Wow, congratulations, Sam! 🎉 So happy for you!",
    },
  ]);
}
