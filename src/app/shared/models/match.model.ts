export class Match{
    id: number;
    name: string;
    begin_at: string;
    updated_at: string;
    number_of_games: number;

    serie_id: number;
    league_id: number;

    serie?: any;
    league?: any;
    results?: any;
    videogame?: any;
    tournament?: any;
    winner?: any;
    games?: any;
    opponents?: any;
}