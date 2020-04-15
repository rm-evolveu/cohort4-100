import { taxRates, incomeBases } from './taxBrackets'

const playground = {

    greet: (greeting) => {
        let response = "Goudendag"

        if (greeting === "Hello") {
            response = "Howdy"
        } else if (greeting === "Hallo") {
            response = "Guten tag"
        } else if (greeting === "Hola") {
            response = "Buenos dias"
        }

        return response
    },

    calc: {

        add: (a, b) => {
            return a + b
        },

        subtract: (a, b) => {
            return a - b
        },

        multiply: (a, b) => {
            return a * b
        },

        divide: (a, b) => {
            if (b === 0) {
                return "Sorry, can't divide by zero."
            } else {
                return a / b
            }
        },

    },

    tax (income) {

        function centsRound (number) {
            return Math.round ( number * 100 ) / 100
        }

        function calculate (baseTax, rate, baseIncome, income) {
            const excessTax = (income - baseIncome) * rate
            result = centsRound (baseTax + excessTax)
            return result
        }

        const taxBases = []
        taxBases [0] = 0
        for (let i = 1; i < taxRates.length; i++ ) {
            taxBases [i] = centsRound ( taxBases [i-1] + (incomeBases[i] - incomeBases[i-1]) * taxRates[i-1] )
        }

        let result = 0

        if (income > 0) {

            let bracket = incomeBases.findIndex (
                function (element) {
                    return (income <= element)
                }
            )
            bracket = bracket - 1 

    
            result = calculate ( taxBases[bracket],  taxRates[bracket],
                incomeBases[bracket], income
            )
        }

        return result

    }

}

export default playground;
