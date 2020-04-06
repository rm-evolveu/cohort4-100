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
    }

}

export default playground;
