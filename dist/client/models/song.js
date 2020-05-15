"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Song {
    constructor(id, title, description, thumbnail) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.thumbnail = thumbnail;
    }
    getId() {
        return this.id;
    }
    getTitle() {
        return this.title;
    }
    getDescription() {
        return this.description;
    }
    getThumbnail() {
        return this.thumbnail;
    }
    static getSongFromList(list, id) {
        const filteredList = list.filter(song => song.getId() === id);
        return filteredList.length > 0 ? filteredList[0] : null;
    }
}
exports.Song = Song;
//# sourceMappingURL=song.js.map