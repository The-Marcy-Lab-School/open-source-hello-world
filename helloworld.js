function helloWorld(){
  console.log("Hello, World"); //I don't know why this doesn't work.
}

function helloName(name){
  console.log(`Hello, ${name}`); //Idk why it prints out "Hello, $name" instead of "Hello, Ann"
}

//Tried to invoke both functions here but I get an error :(
helloWorld()
helloName("Ann")

