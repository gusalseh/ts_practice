const employees = [
  { name: 'tim', id: 1 },
  { name: 'cindy', id: 2 },
  { name: 'rob', id: 3 },
];

const elements = employees.map((item, index) => {
  console.log(index);
  // return `<div>${item.id} - ${item.name}</div>`
  return `${item.id * 2}`;
  // return `${item.name + item.name}`;
})

console.log(elements);