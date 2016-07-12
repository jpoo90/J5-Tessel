const Tessel = require('tessel-io')
const J5 = require('johnny-five')

const board = new J5.Board({
  io: new Tessel(),
})

board.on('ready', () => {
  const leds = new J5.Leds(['b4', 'b5'])

  leds[0].blink(1000)
  leds[1].pulse(1000)
})
