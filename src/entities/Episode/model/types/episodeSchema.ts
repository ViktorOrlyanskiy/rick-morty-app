import { CharacterSchema } from "@/entities/Character";

export interface EpisodeSchema {
    id: string;
    name: string;
    air_date: string;
    episode: string;
    characters: CharacterSchema[];
    created: string;
}
