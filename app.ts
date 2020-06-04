const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'Jeffrey',
  age: 33,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author']
};

// person.role[1] = 10; // error
// person.role = [0, 'admin', 'user']; // error
person.role.push('admin'); // ok
