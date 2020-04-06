import playground from './playground.js'



myButton.addEventListener ("click", changeOutputField )

function changeOutputField () {
    outputField.textContent = playground.greet( myInput.value )
    console.log( playground.greet( myInput.value ) )
    // outputField.textContent = Math.round(Math.random()*1000)
}
