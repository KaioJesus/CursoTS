type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const bdUser = { username: 'Kaio', password: '45465456' };
const sentUser = { username: 'Kaio', password: '45465456' };
const loggedIn = verifyUser(bdUser, sentUser);
console.log(loggedIn);
