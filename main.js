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
        let printedField = [];
        this._field.forEach((row) => {
            printedField.push(row.join(''))
            
        });
        return printedField.join('\n')

    }
}

let field1 = new Field([
    [fieldCharacter, hole, fieldCharacter, hat],
    [fieldCharacter, fieldCharacter, fieldCharacter, hole]
])
field1.print()