export interface Team {
    id: number;
    name: string;
    members: string[];
    logoUrl: string;
}

export interface Competition {
    id: number;
    name: string;
    date: Date;
    location: string;
    teams: Team[];
}

export interface Event {
    id: number;
    name: string;
    competitionId: number;
    startTime: Date;
    endTime: Date;
}