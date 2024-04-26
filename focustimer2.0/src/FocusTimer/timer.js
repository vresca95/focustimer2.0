import state from './state.js'
import * as elements from './elements.js'
import { reset } from './actions.js'
import * as sounds from './sounds.js'

let minutes = Number(elements.minutes.textContent)


export function countdown() {

  clearTimeout(state.countdownId)

  if(!state.isRunning){
    return
  }
  
  let minutes = Number(elements.minutes.textContent)
  let seconds = Number(elements.seconds.textContent)

  seconds--

  if(seconds < 0){
    seconds = 59
    minutes--
  }

  if(minutes < 0){
    reset()
    sounds.kitchenTimer.play()
    sounds.forestAudio.pause()
    sounds.rainAudio.pause()
    sounds.cafeAudio.pause()
    sounds.fireAudio.pause()
    return
  }

  updateDisplay(minutes, seconds)
  state.countdownId = setTimeout(() => countdown(), 1000)
}
export function updateMinutes(newMinutes){
  minutes = newMinutes
}


export function updateDisplay(newMinutes, seconds){
  newMinutes = newMinutes === undefined ? minutes : newMinutes
  seconds = seconds === undefined ? 0 : seconds

  elements.minutes.textContent = String(newMinutes).padStart(2, "0")
  elements.seconds.textContent = String(seconds).padStart(2, "0")
}


export function increase(){
  elements.minutes.textContent = String(Number(elements.minutes.textContent) + 5).padStart(2,"0")
}

export function decrease() {
  if(elements.minutes.textContent <= 5){
    updateDisplay(0, 0)
  }
  else{
    elements.minutes.textContent = String(Number(elements.minutes.textContent) - 5).padStart(2,"0")
  }
}