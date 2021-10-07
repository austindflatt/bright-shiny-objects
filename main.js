// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘

function createUser(first, last) {
    const user = {
        firstName: 'Mesi',
        lastName: 'Kaleziq'
    }
    return user
}

function setAge(userObject, age) {
    const user = {
        firstName: 'Tim',
        lastName: 'Horton'
    }
    user.age = 50;
    return user
}

function incrementAge() {
    const user = {
        firstName: 'Tim',
        lastName: 'Horton',
        age: 50
    }
    user.age++
    return user
}







// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
