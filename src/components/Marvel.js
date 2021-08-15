import React, {useEffect, useState} from "react";

import Hero from "../interface/Hero";
import {PreViewHero} from "./PreViewHero";
import {MarvelList} from "../initData/Marveldata";
import {getPhotos} from "../api/getPhotos";

const Marvel =  () => {
    let infoPhotos;
    let [createMarvelList, seCreateMarvelList] = useState([])

    useEffect(async() => {
        infoPhotos = await getPhotos();
        seCreateMarvelList(MarvelList.map((hero,index) =>
            new Hero(hero.name,hero.description,true,infoPhotos[index].urls.small)));
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


