import playground from './playground.js'

test('Do the greetings work?',

    () => {
        expect(playground.greet("Hello")).toBe("Howdy");
        expect(playground.greet("Hallo")).toBe("Guten tag");
        expect(playground.greet("Hola")).toBe("Buenos dias");
        expect(playground.greet("random string")).toBe("Goudendag");
        expect(playground.greet("some other string")).toBe("Goudendag");
    }

);