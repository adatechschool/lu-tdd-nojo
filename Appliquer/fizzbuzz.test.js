const fizzbuzz = require('./fizzbuzz');

test('3 returns fizz', () => {
    expect(fizzbuzz(3)).toBe("fizz");
});

test('5 returns buzz', () => {
    expect(fizzbuzz(5)).toBe("buzz");
});

test('15 returns fizzbuzz', () => {
    expect(fizzbuzz(15)).toBe("fizzbuzz");
});

test('2 returns 2', () => {
    expect(fizzbuzz(2)).toBe("2");
});

test('0 returns fizzbuzz', () => {
    expect(fizzbuzz(0)).toBe("fizzbuzz");
});

test('-3 returns fizz', () => {
    expect(fizzbuzz(-3)).toBe("fizz");
});

test('-5 returns buzz', () => {
    expect(fizzbuzz(-5)).toBe("buzz");
});

test('-15 returns fizzbuzz', () => {
    expect(fizzbuzz(-15)).toBe("fizzbuzz");
});

test('-2 returns -2', () => {
    expect(fizzbuzz(-2)).toBe("-2");
});

test('1500 returns fizzbuzz', () => {
    expect(fizzbuzz(1500)).toBe("fizzbuzz");
});

test('-1500 returns fizzbuzz', () => {
    expect(fizzbuzz(-1500)).toBe("fizzbuzz");
});

//si divisible par 3 on fait sa somme : 3+2+7 = 12 => 1+2 = 3
//si 918 : 9+1+8= 18 => 1+8 = 9 : oui il est divisible par 9

test('2002 returns 2002', () => {
    expect(fizzbuzz(2002)).toBe("2002");
});

test('-2002 returns -2002', () => {
    expect(fizzbuzz(-2002)).toBe("-2002");
});

//Erreurs

test('arbre returns input error', () => {
    expect(fizzbuzz('arbre')).toBe("input error");
});

test('15.90 returns input error', () => {
    expect(fizzbuzz(15.90)).toBe("input error");
});

test('-15.90 returns input error', () => {
    expect(fizzbuzz(-15.90)).toBe("input error");
});

test('true returns input error', () => {
    expect(fizzbuzz(true)).toBe("input error");
});

test('false returns input error', () => {
    expect(fizzbuzz(false)).toBe("input error");
});