let t = ''
let result = 0

function write (n) {
  document.getElementById('display').value = n
}

function digit(n) {
  t += n
  write(t)
  if (t.includes('=')) {
    write(result)
  }
  if (t.includes(' ') || (t.includes('=='))) {
    t = '';
    write(t)
  }
  let symbol = t.match(/[-+*/]/g);
  (!symbol) ? symbol = '' : symbol = symbol.toString()
  let array = t.split(symbol);
  (!symbol) ? result = 0
    : (symbol === '/') ? result = +array[0] / ++array[1]
      : (symbol === '*') ? result = +array[0] * +array[1]
        : (symbol === '+') ? result = +array[0] + +array[1]
          : (symbol === '-') ? result = +array[0] - +array[1]
            : result = 0
}

document.body.style.backgroundColor =
  '#' + Math.floor(Math.random() * 16777215).toString(16)
