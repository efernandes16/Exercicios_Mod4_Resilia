//Parte A - Aquecimento Arrow Function

/* RESOLVIDOS */

//Transforme as funções declarativas abaixo em Arrow Functions
const upperName = (name) => {
  return name.toUpperCase();
};
const myFunction = ((p1, p2) => {
  return p1 * p2;
});
const toCelsius = ((fahrenheit) => {
  return (5 / 9) * (fahrenheit - 32);
});

//Destructuring - Desestruturação
//Tendo a função abaixo, usando destructuring, reescreva-a de modo que fique em apenas 2 linhas de código
function handleMouseMove(event) {
  const {clientX, clientY} = event
  console.log(clientX, clientY);
}

//A partir do objeto abaixo, instancie apenas uma variável que receba ​first utilizando destructuring
const obj = { first: 'Jane', last: 'Doe' };
const {first} = obj

//A partir do objeto abaixo, instancie uma variavel que receba ​name​ e outra para colors
const company = {
  name: 'ACME Corp',
  address: 'Nowhere st',
  products: {
    shirts: {
      colors: ['red', 'green', 'blue'],
    },
    socks: {
      colors: ['cyan', 'magenta', 'yellow'],
    },
  },
};
const {name, products: {shirts, socks}} = company

/* =X= */

//Rest & Spread
//Utilizando um operador clone o objeto c​lothes
const clothes = {
  pants: { colors: ['black', 'blue'] },
  shirts: { colors: ['white', 'red'] },
  socks: { colors: ['beige', 'gray'] },
};

const newClothes = {...clothes}
// Teste:
newClothes['shorts'] = {colors:['blue', 'white']}

//Novamente utilizando um operador, clone o objeto c​lothes​ acima e adicione a este clone um objeto ​shoes​ com propriedade​ colors: ['yellow', 'purple'] ​de modo que fique igual aos objetos p​ ants, shirts ​e​ socks
newClothes['​shoes'] = {colors:['yellow', 'purple']}

//Arrays e seus métodos
//A partir da variável abaixo e utilizando um método de array, retorne a raiz quadrada de todos os valores do array original em um novo array
var numbers = [4, 9, 16, 25];
let sqrtNumbers = numbers1.map(Math.sqrt)

//A partir da variável abaixo e utilizando um método de array, multiplique todos os valores do array por 10. Utilize arrow function.
var numbers = [65, 44, 12, 4];
let prodNumbers = numbers2.map((numbers2)=>{return numbers2 *10})

//A partir da variável abaixo retorne um array com valores de ​age​ (idade) maiores ou iguais a 18 com arrow function e filter
var ages = [32, 33, 16, 40];
let agesOver18 = ages.filter((ages)=> {return ages >= 18})

//A partir do objeto abaixo, retorne somente os nomes dos objetos do tipo cachorro (​type: dog)​ com filter
let data = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog',
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog',
  },

  {
    name: 'Red',
    age: 1,
    type: 'cat',
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog',
  },
];

let onlyDog = data.filter((data)=> {if (data.type === 'dog') { return data }})

//Por fim, ainda utilizando o array acima, retorne a soma da idade de todos os cachorros (​type: dog)​
let somaIdadeDogs = onlyDog.map((data)=> Number(data.age)).reduce((a,b) => a +b);

//Parte B - Hora do Jogo!
//Passe a expressão abaixo para Arrow Function e então use destructuring para pegar ​colors
var getShirtsColorsAmount = (company) => {
  const {company: {products: {shirts: {colors}}}} = colors;
  return colors.length;
};

//A partir do objeto abaixo, desestruture e utilize ​spread operator​ para instaciar uma variável que tenha apenas os dados de roupas que não são calças, ou seja, somente ​shirts e​ ​ socks
const clothes = {
  pants: { colors: ['black', 'blue'] },
  shirts: { colors: ['white', 'red'] },
  socks: { colors: ['beige', 'gray'] },
};
const {shirts:{colors:[...corShirts]}} = clothes
const {socks:{colors:[...corSocks]}} = clothes

//Utilizando os dois arrays abaixo, desestruture cada array com spread para clonar todos itens menos o primeiro
const arr = [1, 2, 3];
const arr2 = [4, 5, 6];

const [fora1, ...num1] = arr
const [fora2, ...num2] = arr2

//A partir do objeto abaixo, retorne um array onde cada item é o nome completo de cada pessoa no array. Utilize arrow function.
var persons = [
  { firstname: 'Malcom', lastname: 'Reynolds' },
  { firstname: 'Kaylee', lastname: 'Frye' },
  { firstname: 'Jayne', lastname: 'Cobb' },
];

let nomeCompleto = persons.map((nomes)=> `${nomes.firstname} ${nomes.lastname}`)
