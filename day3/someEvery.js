const widgets = [
  { id: 1, color: 'blue' },
  { id: 2, color: 'yellow' },
  { id: 3, color: 'orange' },
  { id: 4, color: 'blue' },
];

// 하나라도 참이면, 참
console.log('some are blue', widgets.some(item => {
  return item.color === 'blue';
}));

// 모두 참이어야, 참
console.log('everyone is blue', widgets.every(item => {
  return item.color === 'blue';
}));