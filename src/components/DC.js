import React, {useEffect, useState} from "react";

import Hero from "../interface/Hero";
import {DCList} from "../initData/DCdata";
import {PreViewHero} from "./PreViewHero";
import {getPhotos} from "../api/getPhotos";

const DC =  () => {
    let infoPhotos;
    let [createDClList, seCreateDClList] = useState([])

    useEffect(async() => {
        infoPhotos = await getPhotos();
        seCreateDClList(DCList.map((hero,index) =>
            new Hero(hero.name,hero.description,false,infoPhotos[index].urls.thumb)));
    },[]);

    return <div >
        <h1>DC</h1>
        <div className = 'list-heroes' >
            {
                createDClList?.map(hero => <PreViewHero dataHero = {hero} />)
            }
        </div>
    </div>
}

export default DC;


