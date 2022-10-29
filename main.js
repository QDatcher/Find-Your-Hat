const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

let Field = class {
    constructor(field){
        this._field = field;
    }

    get field(){
        return this._field;
    }

    print(){
        for(let i = 0; i < this._field.length; i++){
            this._field[i].join('')
        }
        console.log(this._field.join(''))
    }
}

let field1 = new Field([
    [fieldCharacter, hole, fieldCharacter, hat],
    [fieldCharacter, fieldCharacter, fieldCharacter, hole]
])
field1.print()