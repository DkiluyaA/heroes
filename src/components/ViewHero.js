
export const ViewHero = ({dataHero}) => {
    const {name,description,url} = dataHero;

    return <div className = 'view-hero' >
        <div className = 'hero-header' >
            <img src = {url}
                 alt = "View hero"
                 className = 'hero-img'
            />
            <h2 className = 'hero-name' >{name}</h2>
        </div>
        <p className = 'hero-description' >{description}</p>
    </div>
}
