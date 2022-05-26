//writing the json loader
async function run() {
    let response = await axios.get('contact.txt');
    content = response.data
    document.querySelector('#load-btn').addEventListener('click', function(){
        document.querySelector('#content').innerHTML=content
    })
    
}

run();
