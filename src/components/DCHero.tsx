import {MarvelHero} from "./MarvelHero";

export class DCHero extends MarvelHero {

    constructor(name: string, description: string, url: string) {
      super(name, description, url);
    }

    onClose = (): any => {
        alert("STOP")
    }

}

