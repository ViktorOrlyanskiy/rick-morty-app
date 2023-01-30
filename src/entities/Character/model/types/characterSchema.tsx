export interface Origin {
    id: string;
    name: string;
}
export interface Location {
    id: string;
    name: string;
}
export interface CharacterSchema {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Origin;
    location: Location;
    image: string;
    episode: string[];
    url: string;
    created: string;
}
