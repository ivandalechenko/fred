import { makeAutoObservable } from "mobx";

class MusicStore {
    play = 0
    constructor() {
        makeAutoObservable(this);
    }

    piu() {
        this.play = Math.random()
    }

}
export default new MusicStore();
