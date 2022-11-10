<button
  onClick={(e) => {
    handleClickAgain(e, "faadil");
  }}
>
  {" "}
  Click Me Again{" "}
</button>;

const handleClickAgain = (e, name) => {
  console.log("hello " + name, e.target);
};
