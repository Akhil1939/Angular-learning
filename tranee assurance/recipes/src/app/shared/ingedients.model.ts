export interface Ingredient {
    id: number;
    name: string;
    amount: number;
}

export class Ingredient implements Ingredient {
    id: number;
    name: string;
    amount: number;

    constructor(id: number, name: string, amount: number) {
        this.id = id;
        this.name = name;
        this.amount = amount;
    }
}
