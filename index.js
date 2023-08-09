//get-paramnetr ?page=2&city=Mosciw - query string
const resultBlock = document.querySelector('#result');
const pageNumber = document.querySelector('#page-number');
const clickMeButton = document.querySelector('#click-me');
clickMeButton.addEventListener('click', ()=>{
    getImages(onDataReceived);
});

function onDataReceived(data){
    data.forEach(el=>{
            const img =  document.createElement('img')
            img.src=el.photos;
            document.querySelector('#result').appendChild(img);
        }
    )
}



/*a = 8;
console.log(a);*/

//https://repetitora.net/api/JS/Images
 //setTimeout(function(){},1000)





