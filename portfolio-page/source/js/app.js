'use strict';

svg4everybody();

var first = 'Oleg'
var name = `Your name is ${first}.`

class baseModel {
    constructor(options = {}, data = []) { // class constructor
        this.name = 'Base'
        this.url = 'http://azat.co/api'
        this.data = data
        this.options = options
    }

    getName() { // class method
        console.log(`Class name: ${this.name}`)
    }
}

var obj = new baseModel();

console.log(name);
obj.getName();

