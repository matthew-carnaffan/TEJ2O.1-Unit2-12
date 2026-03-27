/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by Matthew Carnaffan
 * Created on: March 2026
 * This program warns about distance
*/

//cleanup
basic.showIcon(IconNames.Happy)

// creates variables to acess to neostrip
let myStrip: neopixel.Strip = null
myStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)

// clear leds
pins.digitalWritePin(DigitalPin.P16, 1)
basic.clearScreen()
basic.showIcon(IconNames.Happy)
myStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
myStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
myStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
myStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
myStrip.show()

//Messures distance 
let distanceSensor: number = -1
input.onButtonPressed(Button.A, function() {
  distanceSensor = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters) 

//Turns lights to red if microbit to close to a object.
  if (distanceSensor < (0,11)){
    myStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    myStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
    myStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    myStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
    myStrip.show()
  }

//turn lights to green if microbit is a good distance from a object.
  else {
    myStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
    myStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
    myStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    myStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
    myStrip.show()
  }

  //Displays distance, pauses 5 seconds.
  basic.showNumber(distanceSensor)
  basic.pause(5000)
})

//cleans up again
basic.showIcon(IconNames.Happy)
myStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
myStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
myStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
myStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
myStrip.show()
