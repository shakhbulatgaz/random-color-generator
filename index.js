const getHex = () => {
      let characters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += characters[Math.floor(Math.random() * 16)];
      }
      return color;
    };

const getRGB = () => {
    let r = () => { return Math.floor(Math.random() * 256) };
    let color = 'rgb('+ r() +','+ r() +','+ r() +')';
    return color;
};

export {getRGB, getHex};