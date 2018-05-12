export class Despesa {

    public id: number
    public nome: string
    public data: Date
    public tipo: string
    public valor: number

    constructor(id: number, nome: string, data: Date, tipo: string, valor: number){
        this.id = id
        this.nome = nome
        this.data = data
        this.tipo = tipo
        this.valor = valor
    }

}
