import { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "2016 Honda Accord, A sight to behold and a gem to drive",
      body: "The 2016 honda Accord EX-L V6...",
      author: "Mat Watson",
      id: 1
    },
    {
      title: "2021 Mercedes Benz E63S AMG, A wolf in sheep's clothing",
      body: " Twin turbo charge 4litre v8...",
      author: "Fadil Yakubu",
      id: 2
    },
    {
      title: "2017 Toyota Sienna, A quirky family hauler",
      body: " The 2017 toyota sienna's acceleration numbers...",
      author: "Alan Bouard",
      id: 3
    }
  ]);
  return (
    <div className="home">
      {blogs.map((blog) => {
        return (
          <div className="blog-preview" key={blog.id}>
            <h2> {blog.title}</h2>
            <p>Written by {blog.author}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
