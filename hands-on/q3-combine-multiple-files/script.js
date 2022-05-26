// note when u put await before each file 
//- files are loaded sequentially 
//--> will take longer if u have multiple files
// can put all the awaits after all the axios get has been started
// first come first serve --> promises might be better (syntax wise)
// axios better for load everything then process everything

document.querySelector('#load-btn')
    .addEventListener('click', function(){
        async function sync(){
            let file1 = await axios.get('file1.txt')
            console.log(file1.data)
            document.querySelector('#content').innerHTML += file1.data
            
            let file2 = await axios.get('file2.txt')
            document.querySelector('#content').innerHTML += file2.data
        }
        sync()
    })
