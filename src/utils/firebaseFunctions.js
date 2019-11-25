import {db} from '../firebase';

export const saveUserInFirebase = (user) => {
    db.collection('users').add({
        name: user,
        points: 0
    })
    .then(doc => console.log('user created with doc', doc))
    .catch(error => console.log(error))
}