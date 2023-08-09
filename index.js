//get-paramnetr ?page=2&city=Mosciw - query string
const resultBlock = document.querySelector('#result');
const pageNumber = document.querySelector('#page-number');
const clickMeButton = document.querySelector('#click-me');
const getTasksButton = document.querySelector('#get-tasks');
clickMeButton.addEventListener('click', ()=>{
   const promise =  getImages();
   promise.then(onDataReceived)
});

getTasksButton.addEventListener('click', ()=>{
    const promise =  getTasks();
    promise.then(onDataReceived)
});

function onDataReceived(data){
    data.forEach(el=>{
            const img =  document.createElement('img')
            img.src=el.photos;
            document.querySelector('#result').appendChild(img);
        }
    )
}

createPostTasks('learnJS').then((data)=>{console.log(data)})

function onTasksReceived(tasks){
    tasks.forEach(el=>{
            const li = document.createElement('li')
        li.innerHTML=el.title
            document.querySelector('#tasks-result').appendChild(li);
        }
    )
}



/*a = 8;
console.log(a);*/

//https://repetitora.net/api/JS/Images
 //setTimeout(function(){},1000)





