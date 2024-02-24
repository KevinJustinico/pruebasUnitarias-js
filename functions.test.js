const functions = require("./functions.js");

describe('multiply function', () => {
  it('should be return multiple when I sent two numbers', () => {
    //ARRANGE
    const a = 15;
    const b = 5;
  
    //ACT
    const result = functions.multiplicar(a, b);
    //ASSERT
    expect(result).toBe(75);
  })
});


describe('isNull function', () => {
  it('should be return null', () => {
    //ARRANGE

    //ACT
    const result = functions.isNull();
    
    //ASSERT
    expect(result).toBeNull();
    

  });
});

describe('checkTruthy function', () => {
  it('should be return true when I sent true', () => {
    //ARRANGE
    const valor = true;

    //ACT
    const result = functions.checkTruthy(valor);
    
    //ASSERT
    expect(result).toBe(true);
  });
})

describe('addLastName function', () => {
  it('should be return Pepito Perez when I sent Perez', () => {
    //ARRANGE
    const apellido = "Perez";

    //ACT
    const result = functions.addLastName("Pepito", apellido);

    //ASSERT
    expect(result).toBe("Pepito Perez");

  });
})