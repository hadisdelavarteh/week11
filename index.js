const fetchHandler = async () => {
  const url = "https://dog.ceo/api/breeds/image/random";
  const res = await fetch(url);
  const { message } = await res.json();
  document.querySelector("img").src = message;
};

console.log("hi");
