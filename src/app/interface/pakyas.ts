
export interface Pakyas {
    id:         number;
    name:       string;
    pictureUrl: string;
    garageId:   number;
    garage:     Garage;
}

export enum Garage {
    Bhi47 = "BHI47",
}
export interface SinglePakya {
    id:         number;
    name:       string;
    pictureUrl: string;
    garageId:   number;
    garage:     string;
}