export class Project {
    id!: number;
    title!: string;
    startDate!: string;
    commission!: boolean;
    dueDate!: string;
    materials!: boolean;
    onHandMaterialsCost!: number;
    additionalMaterialsCost!: number;
    hourlyRate!: number;
    hoursLogged!: number;
    description!: string;
    commissioner!: string;
    requirements!: string;
    notes!: string;
    complete!: boolean;
    sold!: boolean;
}