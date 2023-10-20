const app = document.createElement("div");
app.className = "app";

const state = {
  time: new Date(),
  zone: "ru",
  lots: [
    {
      id: 1,
      name: "Apple",
      description: "Apple description",
      price: 16,
    },
    {
      id: 2,
      name: "Orange",
      description: "Orange description",
      price: 41,
    },
  ],
};
app.append(Header());
app.append(Clock({ time: state.time }));

function Header() {
  const header = document.createElement("header");
  header.className = "header";
  header.append(Logo());
  return header;
}

function Logo() {
  const logo = document.createElement("img");
  logo.className = "logo";
  logo.src = "logo.png";
  return logo;
}

function Clock({ time }) {
  const clock = document.createElement("div");
  clock.className = "clock";
  clock.innerText = time.toLocaleTimeString();
  return clock;
}

function Lots({ lots }) {
  const list = document.createElement("div");
  list.className = "lots";

  lots.forEach((lot) => {
    list.append(Lot({ lot }));
  });
  return list;
}

function Lot({ lot }) {
  const node = document.createElement("article");
  node.className = "lot";

  const price = document.createElement("div");
  price.className = "price";
  price.innerText = lot.price;
  node.append(price);

  const name = document.createElement("h1");
  name.innerText = lot.name;
  node.append(name);

  const description = document.createElement("p");
  description.innerText = lot.description;
  node.append(description);
  return node;
}

app.append(Lots({ lots: state.lots }));

const domRoot = document.getElementById("root");
domRoot.append(app);
