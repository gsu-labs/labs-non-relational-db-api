export interface Train {
    _id?: string;
    number: number;
    departurePoint: string;
    destinationPoint: string;
    departureDate?: Date;
    carriages: [string];
}
