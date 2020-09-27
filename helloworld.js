function helloWorld(){
  console.log("Hello, World"); // I don't know why this doesn't work.
} // That was because the function you were looking for was actually console.log! 

function helloName(name){
  console.log(`Hello, ${name}`); //Idk why it prints out "Hello, $name" instead of "Hello, Ann"
} // It seems you were missing the curly braces around 'name'. You were on the right track though! 

// Tried to invoke both functions here but I get an error :(
helloWorld()
helloName("Ann") 
// How are you invoking them? Perhaps check to see if you are in the right folder location in terminal. 
// Otherwise it may be because of the errors I have now corrected. 
