var filterItems = [
    { name: 'jon', age: 20 },
    { name: 'linda', age: 23 },
    { name: 'jon', age: 30 }
];
var results = filterItems.filter(function (item, index) {
    console.log(index);
    return item.name === 'jon';
});
console.log(results);
