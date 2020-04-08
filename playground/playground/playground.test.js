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

test('Does the calculator work?',

    () => {

        expect( playground.calc.add(1, 1) ).toBe( 2 );
        expect( playground.calc.add(1, -10) ).toBe( -9 );

        expect( playground.calc.subtract(3, 1) ).toBe( 2 );
        expect( playground.calc.subtract(-1, 1) ).toBe( -2 );

        expect( playground.calc.multiply(2, 3) ).toBe( 6 );
        expect( playground.calc.multiply(-7, -7) ).toBe( 49 );

        expect( playground.calc.divide(8, 2) ).toBe( 4 );
        expect( playground.calc.divide(10, -5) ).toBe( -2 );
        expect( playground.calc.divide(7, 0) ).toBe( "Sorry, can't divide by zero." );

    }

);