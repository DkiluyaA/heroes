import React, {useEffect, useState} from "react";

import {PreViewHero} from "./PreViewHero";
import {MarvelList} from "../initData/Marveldata";
import {getPhotos} from "../api/getPhotos";
import {MarvelHero} from "./MarvelHero";

const Marvel = () =>{
    let infoPhotos: { urls: { small: string; }; }[];
    let [createMarvelList, seCreateMarvelList] = useState([])

   // @ts-ignore
    useEffect(async () => {
        infoPhotos = await getPhotos();

        // @ts-ignore
        seCreateMarvelList(MarvelList.map((hero,index)  =>
            new MarvelHero(
                hero.name,
                hero.description,
                infoPhotos[index].urls.small,
             )));
    },[]);

    return <div >
            <h1>Marvel</h1>
            <div className = 'list-heroes'>
                {
                    createMarvelList?.map(hero => <PreViewHero dataHero = {hero}/>)
                }
            </div>
        </div>
    }

export default Marvel;


