const items = [
    { name: 'jon', age: 20 },
    { name: 'linda', age: 23 },
    { name: 'jon', age: 30 },
];
const jon = items.find((item) => {
    return item.name === 'jon';
});
console.log(jon);
