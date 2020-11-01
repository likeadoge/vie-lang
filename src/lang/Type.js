export class Type {
    name = ''
    constructor(name) {
        this.name = name
    }

    static null = new Type('null')
}

export class NumberType extends Type {
    kind = 'int' // int or float
    range = [0, 255]

    constructor(name, { kind, range = [0,255] }) {
        super(name)
        this.kind = kind
        this.range = range
    }
}


export class FuncType extends Type{
    output = Type.null
    input = []
    constructor(name, obj) {
        super(name)
        Object.assign(this,obj)
    }
}