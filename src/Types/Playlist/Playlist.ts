export interface Playlist{
    ID: number;
    Name: string;
    User: string;
    Items: Video[];
    Cover: string;
}
export interface Video {
    ID: number;
    Link: string;
}