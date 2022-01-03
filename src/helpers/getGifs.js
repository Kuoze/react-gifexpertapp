export const getGifs = async ( category ) => {
    const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&offset=10&api_key=CrL3rBQuvCrgJRV5INFLE32JX8DrJTzk`;

    const resp = await fetch(apiUrl);

    if (resp.ok) {
        const { data } = await resp.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            };
        });

        return gifs;
    }
}

  // const getGifs = async () => {
    //     const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&offset=10&api_key=CrL3rBQuvCrgJRV5INFLE32JX8DrJTzk`;

    //     const resp = await fetch(apiUrl);

    //     if (resp.ok) {
    //         const { data } = await resp.json();

    //         const gifs = data.map(img => {
    //             return {
    //                 id: img.id,
    //                 title: img.title,
    //                 url: img.images?.downsized_medium.url
    //             };
    //         });

    //         setImages(gifs);
    //     }

    // }