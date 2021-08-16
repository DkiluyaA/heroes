import React from 'react'
import {HeroInterface} from "../interface/HeroInterface";

export class MarvelHero implements HeroInterface {
    name: string;
    description: string;
    url: string;

    constructor(name: string, description: string, url: string) {
        this.name = name;
        this.description = description;
        this.url = url;
    }

    onClose = (): null => null;
}
