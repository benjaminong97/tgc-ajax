async function run(){
    //getting the json file data
    // let artwork = axios.get('artwork.json').data;
    let artwor = await axios.get('artwork.json');
    //display title in h1, dsplay image in <img> tag
    document.querySelector('#load-image-btn').addEventListener('click', function(){
        artwork = artwor.data
        
        artDiv = document.querySelector('#artwork')
        let h1 = document.createElement('h1')
        h1.innerHTML = artwork.title
        let imgUrl = artwork.image_url
        let img = document.createElement('img')
        img.src = imgUrl
        artDiv.appendChild(h1)
        artDiv.appendChild(img)
    })
}
run();