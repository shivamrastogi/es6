class User {
  constructor(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
  }

  register(){
    console.log(this.username + ' is now registered.');
  }
}

class Member extends User {
  constructor(username, email, password, memberPackage){
    super(username, email, password);
    this.memberPackage = memberPackage;
  }

  getPackage(){
    console.log(this.username + ' is now a Member');
  }
}

let bob = new User('bob', 'bob@email.com', '12345');
bob.register();

let alice = new Member('Alice', 'alice@email.com', '2212', 'Sys');
alice.getPackage();
