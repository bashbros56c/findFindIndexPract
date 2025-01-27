/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/


function findUserByUsername(arr, username) {
  return arr.find(function(user){
    return user.username === username;
  })
}
console.log(findUserByUsername(users, 'mlewis'))
/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/

function removeUser(arr, username) { 
  let foundIndex = arr.findIndex(function(user){
  return user.username === username;
})
if(foundIndex === -1) return;

return arr.splice(foundIndex,1)[0];}
console.log(removeUser(users, 'akagen'))