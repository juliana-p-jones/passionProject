export class Project {
    id!: number;
    title!: string;
    startDate!: string;
    dueDate!: string;
    materials!: boolean;
    materialsCost!: number;
    hourlyRate!: number;
    hoursLogged!: number;
    description!: string;
    notes!: string;
    complete!: boolean;
    sold!: boolean;
    commission!: Commission;
}