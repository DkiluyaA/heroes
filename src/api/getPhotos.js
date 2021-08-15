export const  getPhotos = async () => {
    const photosRes =  await fetch(`https://api.unsplash.com/photos?client_id=cvO2a2x4cTrWJHzVvNDLMl5fRxEhSWcLdiacx7H40Yo&per_page=12&page=${Math.floor(Math.random() * 300) + 1}`);
    const infoPhotos = await photosRes.json();
    return infoPhotos;
}
