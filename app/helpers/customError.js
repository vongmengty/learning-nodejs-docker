class ValidationError extends Error {
    constructor(message, meta = {}) {
      super(message); // (1)
      this.status = "error";
      this.statusCode = this.code;
      this.data = null;
      this.meta = meta;
      this.name = "ValidationError"; // (2)
    };
  }
  
  function test() {
    throw new ValidationError("Whoops!");
  }
  
  try {
    test();
  } catch(err) {
    alert(err.message); // Whoops!
    alert(err.name); // ValidationError
    alert(err.stack); // a list of nested calls with line numbers for each
  }