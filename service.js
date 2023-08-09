

/*
function oldGetImages(){


   const promise =  $.ajax('https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=10'
   return promise
    //promise - обещание что когда-то асинхронная операция закончится и через промис можно будет к ней достучаться
}
*/

function getImages(){


    const promise =  axios.get('https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=10')
    return promise.then((response)=> {
        return response.data
    })
    //promise - обещание что когда-то асинхронная операция закончится и через промис можно будет к ней достучаться
}

function getTasks(){
    const promise =  axios.get('https://repetitora.net/api/JS/Tasks?widgetId=4345')
    return promise.then((response)=> {
        return response.data
    })
}

/*
function createPostTasks(title){
    const promise =  axios.post(`https://repetitora.net/api/JS/Tasks?widgetId=4345&title=${title}`)
    return promise.then((response)=> {
        return response.data
    })
}*/
