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

        function calculate (baseTax, rate, baseIncome, income) {
            const excessTax = (income - baseIncome) * rate
            result = Math.round ( (baseTax + excessTax) * 100 ) / 100
            return result
        }

        const taxRates = [0.15, 0.205, 0.26, 0.29, 0.33]
        const taxBases = [0, 7280.25, 17229.72, 31114.76, 49644.31]
        const incomeBases = [0, 48535, 97069, 150473, 214368]

        let result = 0

        if (income > 0) {

            const reverseIncomeBases = [...incomeBases].reverse()

            // bracket is the bracket to which the income belongs
            const bracket = (incomeBases.length - 1) - reverseIncomeBases.findIndex (
                function (element) {
                    return (income > element)
                }
            )
    
            result = calculate ( taxBases[bracket],  taxRates[bracket],
                incomeBases[bracket], income
            )
        }

        return result

    }

}

export default playground;
