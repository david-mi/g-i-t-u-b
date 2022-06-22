console.log("Bonjour ça va les amis ?");

function sayHello() {
  "Bonjour les amis !";
}

const sayHello10Times = () => {
  for (let i = 0; i < 10; i++) {
    sayHello();
  }
};

const sayHello100Times = () => {
  for (let i = 0; i < 100; i++) {
    sayHello();
  }
};

const user = {
  name: "David",
  age: 29
};