import state from './state.js'
import * as timer from './timer.js'
import * as sounds from './sounds.js'

export function toggleRunning(){
  state.isRunning = document.documentElement.
  classList.toggle('running')
  
  timer.countdown()
  sounds.buttonPressAudio.play()
}

export function reset(){
  state.isRunning = false
  document.documentElement.classList.remove('running')
  timer.updateDisplay()
  
  sounds.buttonPressAudio.play()
  sounds.forestAudio.pause()
  sounds.rainAudio.pause()
  sounds.cafeAudio.pause()
  sounds.fireAudio.pause()

}

export function plus(){
  timer.increase()
  sounds.buttonPressAudio.play()
}

export function minus(){
  timer.decrease() 
  sounds.buttonPressAudio.play()
}

export function forestMusic(){
  sounds.forestAudio.play()
  sounds.rainAudio.pause()
  sounds.cafeAudio.pause()
  sounds.fireAudio.pause()
}

export function rainMusic(){
  sounds.rainAudio.play()
  sounds.forestAudio.pause()
  sounds.cafeAudio.pause()
  sounds.fireAudio.pause()
}

export function cafeMusic(){
  sounds.cafeAudio.play()
  sounds.forestAudio.pause()
  sounds.rainAudio.pause()
  sounds.fireAudio.pause()
}

export function fireMusic(){
  sounds.fireAudio.play()
  sounds.forestAudio.pause()
  sounds.rainAudio.pause()
  sounds.cafeAudio.pause()
}
