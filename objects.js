// 1. Objects in Javascript.
const teacher = {
    name: "Slughorn",
    subject: "Potions",
    greet: function() {
        console.log('Good morning students. I\'am ' + this.name);
    },
    // Alternative way to define a method inside an object.
    intro() {
        console.log("I\'ll be teaching you "+ this.subject)
    }
};

teacher.greet()
teacher.intro()

// 2. Arrow functions in javascript.
/**
 * Arrow functions in js differs by two points from a normal function.
 * 1. Obviously, the syntax is shortened.
 * 2. It doesn't have its own scope. If [this] keyword is used inside js, it will
 * look for the latest outer scope with access to [this].
 */
function a() {
    // a has access to this.
    const b = () => {
        // b doesn't have access to this.
        const c = () => {
            // nor does c have any access to this.
            console.log(this)
        }
        c()
    }
    b()
}

a() // Will still output as undefined 'cause it's not defined inside a object.