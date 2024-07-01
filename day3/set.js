const userIds = [1, 2, 1, 3]
const uniqueIds = new Set(userIds);

console.log(uniqueIds);

uniqueIds.add(10);
console.log('add 10', uniqueIds);

console.log('has 3', uniqueIds.has(3));

console.log('size', uniqueIds.size);

for (let item of uniqueIds) {
  console.log('set iterate', item);
}

for (let item of userIds) {
  console.log('array iterate', item);
}