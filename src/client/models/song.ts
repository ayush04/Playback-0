export class Song {
    private id: string;
    private title: string;
    private description: string;
    private thumbnail: string;

    constructor(id: string, title: string, description: string, thumbnail: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.thumbnail = thumbnail;
    }

    public getId(): string {
        return this.id;
    }

    public getTitle(): string {
        return this.title;
    }

    public getDescription(): string {
        return this.description;
    }

    public getThumbnail(): string {
        return this.thumbnail;
    }

    static getSongFromList(list: Array<Song>, id: string): Song | null {
        const filteredList = list.filter(song => song.getId() === id);
        return filteredList.length > 0 ? filteredList[0]: null;
    }
}