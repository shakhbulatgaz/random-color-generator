export function getRandNumInRange(r) {
  return Math.random() * r | 0;
}

export function getHex() {
  let color = '';

  for(let i = 0; color.length < 6; i++) {
    color = color.concat('0123456789ABCDEF'[getRandNumInRange(16)]);
  }

  return `#${color}`;
};

export function getRGB() {
  const result = [];

  while(result.length !== 3) {
    result.push(getRandNumInRange(256));
  }

  return result;
};