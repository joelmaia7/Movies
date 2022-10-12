export interface Movie {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: any;
    budget: number;
    genres: Array<{ id: number, name: string }>;
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: Array<any>;
    production_countries: Array<any>;
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: Array<{ english_name: string, iso_639_1: string, name: string }>;
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}