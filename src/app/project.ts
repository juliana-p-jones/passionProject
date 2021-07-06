import { Commission } from "./commission";

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
    completion!: string;
    sold!: boolean;
    commission!: Commission;
    image!: string;
}