import { User } from './models/User';

const user = new User({})

user.set({ age: 999 })

console.log(user.get('name'), user.get('age'));
