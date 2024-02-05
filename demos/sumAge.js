function sumAge(user, qt){
  user.age = user.age +qt;
  return user;
}
// {age: 1} -> {age: 1+n}

module.exports = sumAge;