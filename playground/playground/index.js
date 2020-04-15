import playground from './playground.js'

// Please greet me
myButton.addEventListener ("click", changeOutputField )

function changeOutputField () {
    outputField.textContent = playground.greet( myInput.value )
    console.log( playground.greet( myInput.value ) )
    // outputField.textContent = Math.round(Math.random()*1000)
}

// Calculator
calcButtonAdd.addEventListener ("click", calcFunction )
calcButtonSubtract.addEventListener ("click", calcFunction )
calcButtonMultiply.addEventListener ("click", calcFunction )
calcButtonDivide.addEventListener ("click", calcFunction )

function calcFunction (event) {

    let result

    const a = Number(calcInput1.value)
    const b = Number(calcInput2.value)

    if (isNaN(a) || isNaN(b)) {
        // something is wrong with inputs
        result = "I can only calculate numbers"
    } else {
        if (event.target.id == "calcButtonAdd") {
            result = playground.calc.add(a,b)
        
        } else if (event.target.id == "calcButtonSubtract") {
            result = playground.calc.subtract(a,b)
    
        } else if (event.target.id == "calcButtonMultiply") {
            result = playground.calc.multiply(a,b)
    
        } else if (event.target.id == "calcButtonDivide") {
            result = playground.calc.divide(a,b)
        } else {
            result = "Something strange"
        }
    }

    calcOutput.textContent = result

}

// now the tax calculator
taxButtonCalculate.addEventListener ("click", taxFunction )
taxInput.addEventListener ("input", taxFunction )

function taxFunction () {

    console.log('tax function')

    const result = playground.tax( Number(taxInput.value) )

    taxOutput.textContent = result

}
