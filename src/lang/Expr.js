import { FuncType, NumberType, Type } from './Type'



export class Expr { }
export class Variable extends Expr {
    name = ''
    type = Type.null
    constructor(obj) {
        super()
        Object.assign(this, obj)
    }
}


export class Value extends Expr { }

export class Number extends Value {
    static types = {
        uint8: new NumberType('uint8', {
            kind: 'int', range: [0, 255]
        })
    }

    static Uint8(value) { return new Number(Number.types.uint8, value) }

    type = Number.types.uint8
    value = 0
    constructor(type, value) {
        super()
        this.type = type
        this.value = value
    }
}

export class Func extends Value { }

export class Call extends Expr {

    func = null
    argus = []


    constructor(obj) {
        super()
        Object.assign(this, obj)
        this.check()
    }

    check() {
        if (this.func && (this.func instanceof Func || (this.func instanceof Variable)))
            return
        else
            return new Error('call error')
    }
}



const add = new Variable({
    name: 'Number.add',
    type: new FuncType('', {
        input: [Number.types.uint8, Number.types.uint8],
        output: Number.types. uint8
    })
})



const add1_2 = new Call({
    func: add,
    argus: [Number.Uint8(8), Number.Uint8(9)],
})


export const test = new Call({
    func: add,
    argus: [add1_2, Number.Uint8(9)],
})