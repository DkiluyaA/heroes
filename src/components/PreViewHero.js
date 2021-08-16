import {SimpleModal} from "./SimpleModal";
import {useState} from "react";

export const PreViewHero = ({dataHero}) => {
    const [open,setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCloseButton = () => {
        if(dataHero.onClose()===undefined){
           return;
        }else setOpen(false);
    };

    return <div className='pre-view-hero'>
        <div className='pre-hero-header' onClick={handleOpen}>
            <img src={dataHero.url}
                 alt="View hero"
                 className='hero-img'
            />
            <h2 className='hero-name'>{dataHero.name}</h2>
        </div>
        <SimpleModal
            openModal={open}
            onClose={handleClose}
            handleCloseButton={handleCloseButton}
            dataHero={dataHero}
        />
    </div>
}
