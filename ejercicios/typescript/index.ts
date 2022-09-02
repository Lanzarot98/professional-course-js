console.log('hello, TypeScript');

function add(a: number, b: number) {
    return a+b;
}

const sum = add(2, 3)


// boolean
let muted: boolean = true;
muted = false;


// números
let numerador:number = 42;
let denominador:number = 6;
let resultado = numerador/denominador;

// string
let nombre: String = "Luis"
console.log('my name is ' + nombre);

// arreglos
let people: string[] =[];
people = ['Isabel', 'Nicole', 'Raul'];
people.push('100');

let peopleAndNumbers: Array<string | number> = []
peopleAndNumbers.push['Ricardo'];
peopleAndNumbers.push[22];

//enum
enum Color {
    rojo = 'Rojo',
    verde = 'Verde',
    azul = 'Azul',
    amarillo = 'Amarillo',
}

let favoriteColor:Color = Color.rojo
console.log('Mi Color Favorito es ' + favoriteColor)

// Any
let comodin: any = "Joker";
comodin = { type: "Wildcard"}

// Object
let someObject: Object = {type: 'Wildcard'}

//Funciones
function add1(a:number, b:number): number {
    return a+b;
}
const sum1 = add1(1, 2);

function createAdder (a:number): (number) => number {
    return function (b:number) {
        return b + a;
    }
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);

function fullName(firstName: string, lastName?: string): string {
    return `${firstName} ${lastName}`;
}

const richard = fullName('Richard');


// interfaces forma exacta que debe tener un objeto.
interface Rectangulo { 
    ancho: number;
    alto: number;
    color?: Color;
}

let rect: Rectangulo = {
    ancho: 4,
    alto: 6,
    // color: Color.azul,
    
}

function area(r: Rectangulo) {
    return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect);

// console.log(rect.toString()); // no lanza error

rect.toString = function () {
    return this.color ? `un rectángulo ${this.color}`: 'Un Rectangulo';
};

console.log(rect.toString());




