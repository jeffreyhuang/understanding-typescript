const person = {
  name: 'Jeffrey',
  age: 33,
  hobbies: ['Sports', 'Cooking']
};

let favoriteActivities: string[];
favoriteActivities = ['Sports', 'Cooking'];

for (const hobby of person.hobbies) {
  console.log(hobby.toLowerCase());
  // console.log(hobby.map()); // ERROR !!!
}