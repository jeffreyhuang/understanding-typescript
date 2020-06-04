enum Role {GUEST = 1, AUTHOR, ADMIN};

const people = [
  { name: 'Alex', role: Role.AUTHOR },
  { name: 'Bill', role: Role.ADMIN },
  { name: 'Cole', role: Role.GUEST }
]

for (const person of people) {
  const name = person.name;
  if (person.role >= Role.AUTHOR) {
    console.log(name + ': access granted');
  } else {
    console.log(name + ': access denied');
  }
}
