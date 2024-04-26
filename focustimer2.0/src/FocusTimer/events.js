import { controls, musicControls } from "./elements.js"
import * as actions from './actions.js'

export function registerControls(){
  controls.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    if(typeof actions[action] != "function"){
      return
    }

    actions[action]()
  })

  musicControls.addEventListener('click', (e) =>{
    const action = e.target.dataset.action
    if(typeof actions[action] != "function"){
      return
    }

    actions[action]()
  })
}