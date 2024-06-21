export interface MonsterInfo {
    index: string;
    name: string;
    image?: string;
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
}

export interface MonsterSummary {
    index: string;
    name: string;
    url: string;
}

export interface MonsterList {
    count: number;
    results: MonsterSummary[];
}
