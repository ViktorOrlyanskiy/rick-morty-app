import { CharacterSchema } from "@/entities/Character";

export interface LocationSchema {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: CharacterSchema[];
    url: string;
    created: string;
}
