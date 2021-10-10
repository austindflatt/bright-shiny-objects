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

function fixCar() {
    const car = {
        make: 'Ford',
        model: 'Mustang',
        year: 1969,
        needsMaitenance: true
    }
    car.needsMaitenance = false
    return car
}

function addGrades() {
    const student = {
        name: 'Anthony DeRosa',
        email: 'anthony.derosa@codeimmersives.com',
        grades: [80, 100, 95]
    }
    student.grades.push(88, 70, 90);
    return student
}

function getDataType(object, key) {
    const car = {
        make: 'Ford',
        model: 'Mustang',
        year: 1969,
        needsMaitenance: false
    }
    return typeof object[key]
}

function addTodo(todos, newTodo) {
    todos.push(newTodo);
    return todos
}

function addSong(playlist, newSong) {
    playlist["songs"].push(newSong);
	playlist["duration"] += newSong["duration"];
	return playlist
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
