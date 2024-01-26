function Stack() {
    this.items = [];
  
    this.push = function (item) {
      this.items.push(item);
    };
  }
  
  const stack = new Stack();
  stack.push(1);
  
  const stack2 = new Stack();
  stack2.push(2);
  
  console.log(stack);
  console.log(stack2);
  