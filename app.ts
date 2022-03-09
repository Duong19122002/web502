type Product = {
    id: number;
    name: string;
    price: number,
}
type Product2 = {
    id: number;
    name: string;
    status: boolean;
}
type MergaType = Product | Product2;
const a: number = 10;
const b: number = 20;

const myName: string = "Nguyen Ngoc Duong";
const myAge: number = 2;
const myStatus: boolean = true;
const myOnject: Product = { id: 1, price: 2000, name: "ne" };
const arrNumber: number[] = [1, 2, 3, 4];
const arrString: string[] = ["a", "b", "c"];
const arrObj: MergaType[] = [
    { id: 1, name: "Nguyen Ngoc Duong", price: 20 },
    { id: 2, name: "Nguyen Ngoc Duong", status: true }
];


function sum(numbA: number, numbB: number) {
    return numbA + numbB;
}
console.log(sum(10, 20))