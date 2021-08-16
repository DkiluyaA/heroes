import React, {useEffect, useState} from "react";

import {DCList} from "../initData/DCdata";
import {PreViewHero} from "./PreViewHero";
import {getPhotos} from "../api/getPhotos";
import {DCHero} from "./DCHero";

const DC =  () => {
    let infoPhotos: { urls: { small: string; }; }[];
    let [createDClList, seCreateDClList] = useState([])

    // @ts-ignore
    useEffect(async (): Promise<any> => {
        infoPhotos = await getPhotos();

        // @ts-ignore
        seCreateDClList(DCList.map((hero,index) =>
            new DCHero(
                hero.name,
                hero.description,
                infoPhotos[index].urls.small,
            )));
    },[]);

    return <div >
        <h1>DC</h1>
        <div className = 'list-heroes' >
            {
                createDClList?.map(hero => <PreViewHero dataHero = {hero}/>)
            }
        </div>
    </div>
}

export default DC;


