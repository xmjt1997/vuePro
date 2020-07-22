function person(name, age) {
    this.name = name
    this.age = age
    person.prototype.show = function (name, age) {
        console.log(name, age);
    }
}

const man = new person()
man.show('张三', 12)