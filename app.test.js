import { TestScheduler } from "jest"
import {capitalize, reverseString, calculator, caeserCipher, analyze} from "./app.js"

test("first letter be capital", ()=>{
    expect(capitalize("qwerty")).toBe("Qwerty");
})

test("string should be reversed", ()=>{
    expect(reverseString("qwerty")).toBe("ytrewq");
})

test("add subtract multiply divide", ()=>{
    expect(calculator.add(20, 10)).toBe(30);
    expect(calculator.subtract(20, 10)).toBe(10);
    expect(calculator.multiply(20, 10)).toBe(200);
    expect(calculator.divide(20, 10)).toBe(2);
})

test("test caeser cipher", ()=>{
    expect(caeserCipher("1qwerty", 2)).toBe("1sygtva");
    expect(caeserCipher("ehQdEF!@", 1)).toBe("fiReFG!@");
    expect(caeserCipher("right123a", 3)).toBe("uljkw123d");
    expect(caeserCipher("abcdefghijklmnopqrstuvwxyz", 1)).toBe("bcdefghijklmnopqrstuvwxyza");
    expect(caeserCipher("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 2)).toBe("CDEFGHIJKLMNOPQRSTUVWXYZAB");
})

test("object with avg, min, max, length" , ()=>{
    expect(analyze([1,8,3,4,2,6]).average).toBe(4)
    expect(analyze([1,8,3,4,2,6]).min).toBe(1)
    expect(analyze([1,8,3,4,2,6]).max).toBe(8)
    expect(analyze([1,8,3,4,2,6]).length).toBe(6)
})

