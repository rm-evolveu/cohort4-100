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

    }

}

export default playground;
