'use strict'

const Tessel = require('tessel-io')
const J5 = require('johnny-five')

const board = new J5.Board({
  io: new Tessel(),
})

board.on('ready', () => {

  const leds = new J5.Leds(['b0', 'b1', 'b2', 'b3', 'b4', 'b5'])
  let index = 0

  board.loop(250, () => {
    oddsAndEvens()
  })

  function startToEnd() {
    let step = 1

    leds.off()
    leds[index].on()
    index = step + index

    if (index >= leds.length - 1 || index === 0) {
      step = -step
    }
  }

  function oneByOne() {
    let step = 1

    leds.off()
    leds[index].on()
    index = step + index

    if (index === leds.length) {
      index = 0
    }
  }

  function oneByOneHolding() {
    let step = 1

    leds[index].on()
    index = step + index

    if (index === leds.length) {
      leds.off()
      index = 0
    }
  }

  function oddsAndEvens() {
    let step = 2
    leds.off()
    leds[index].on()
    index = step + index

    if (index === leds.length) {
      index = 1
    } else if (index === leds.length + 1) {
      index = 0
    }
  }
})
