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

test('Does the tax calculator work?',

    () => {
        // first bracket
        expect( playground.tax(1) ).toBe( 0.15 );
        expect( playground.tax(50) ).toBe( 7.50 );
        expect( playground.tax(20000) ).toBe( 3000 );
        expect( playground.tax(48535) ).toBe( 7280.25 );

        // second bracket
        expect( playground.tax(48536) ).toBe( 7280.46 );
        expect( playground.tax(50000) ).toBe( 7580.58 );
        expect( playground.tax(80000) ).toBe( 13730.58 );
        expect( playground.tax(97069) ).toBe( 17229.72 );

        // third bracket
        expect( playground.tax(97070) ).toBe( 17229.98 );
        expect( playground.tax(100000) ).toBe( 17991.78 );
        expect( playground.tax(120000) ).toBe( 23191.78 );
        expect( playground.tax(150473) ).toBe( 31114.76 );

        // fourth bracket
        expect( playground.tax(150474) ).toBe( 31115.05 );
        expect( playground.tax(175000) ).toBe( 38227.59 );
        expect( playground.tax(200000) ).toBe( 45477.59 );
        expect( playground.tax(214368) ).toBe( 49644.31 );

        // fifth bracket
        expect( playground.tax(214369) ).toBe( 49644.64 );
        expect( playground.tax(250000) ).toBe( 61402.87 );
        expect( playground.tax(300000) ).toBe( 77902.87 );
        expect( playground.tax(10000000) ).toBe( 3278902.87 );

        // some random things
        expect( playground.tax(-1) ).toBe( 0 );
        expect( playground.tax("Apples") ).toBe( 0 );
        expect( playground.tax(undefined) ).toBe( 0 );
        
    }

);