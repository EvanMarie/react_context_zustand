/*
from Youtube: https://www.youtube.com/watch?v=9KzQ9xFSAEU

This function can be used to simulate a login operation in a testing 
environment or while developing the UI of a login feature, before a real 
server-side authentication system is implemented.

This defines a TypeScript type named Props, which is an object with two 
properties: username and password. Both properties are of the string type. 
This Props type is used to specify the type of the argument that the 
useLogin function expects. 
*/

type Props = {
    username: string;
    password: string;
}

/* 
The useLogin function is an asynchronous function that takes an object as 
an argument. This object must have a username and a password property, as 
defined by the Props type. The function returns a Promise that doesn't 
resolve with any value (hence void).

Inside the function, a setTimeout is used to simulate a delay that you 
might experience when making a real asynchronous request to a server. 
After 1 second (1000 milliseconds), the callback function passed to 
setTimeout is executed.

In this callback function, if the username is "evan" and the password 
is "password", the Promise is resolved using the resolve function. If 
the username and password don't match these values, the Promise is 
rejected using the reject function.
*/


async function useLogin({ username, password }: Props) {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      if (username === 'evan' && password === 'password') {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
}

export default useLogin;