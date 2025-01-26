function add(a: number, b: number): number {
  return a + b;
}

let result = add(Number("1"), 2); // Type 'string' is not assignable to type 'number'.

let result2 = add(parseInt("1", 10), 2); // Type 'string' is not assignable to type 'number'.