const {parse} = require('csv-parse');
const fs = require('fs');

const writeStream = fs.createWriteStream('./sanit.log');
fs.createReadStream("./Result_3.csv")
  .pipe(parse({ delimiter: "," }))
  .on("data", function (row) {
    const [date, x, y, color_index, action] = row;
    const d = date.substring(0, 23).replace('.', ',');
    const a = action === 'false' ? 'user place' : 'user undo';
    writeStream.write(`${d}\thash\t${x}\t${y}\t${color_index}\t${a}\n`);
  });
