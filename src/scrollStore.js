import { makeAutoObservable } from "mobx";

class ScrollStore {
    pos = 0;
    sceneW = 0;
    percent = 0;
    percentOld = 0;
    fredMove = false;
    fredMoveTO = null;
    fredMoveInt = null;
    rockeyMoveInt = null;
    fredMoveCounter = 1;
    rocketMoveCounter = 1;
    sceneWRaw = 0;
    screenPercentOfScene = 0;
    POS = 0;

    constructor() {
        makeAutoObservable(this);
    }

    setScrollPosition(position) {
        this.pos = position;
        this.percent = position / this.sceneW * 100
        this.POS = (this.percent - this.screenPercentOfScene * (this.percent / 100))
    }

    changeScrollPosition(delta) {
        this.setScrollPosition(Math.min(Math.max(this.pos + delta, 0), this.sceneW))
    }

    setSceneW(sceneW) {
        this.sceneW = sceneW;
    }
    setSceneWRaw(sceneW) {
        this.sceneWRaw = sceneW;
    }
    setPercentOld(percent) {
        this.percentOld = percent;
    }

    setScreenPercentOfScene(percent) {
        this.screenPercentOfScene = percent
    }
}

export default new ScrollStore();
