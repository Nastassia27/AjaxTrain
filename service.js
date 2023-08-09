

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

//get запрос забирает данные с сервака

function createPostTasks(title){
    const promise =  axios.post(`https://repetitora.net/api/JS/Tasks`,{
        title:'learnJS',
        widgetId: 54783
    })
    return promise.then((response)=> {
        return response.data
    })
}
//post запрос предназначен чтобы на сервак отправить много данных
//get post различаются тем что в пост мы можем пережать много параметров в request payload нагрузка
//get запрос характеризуется только юрл строкой - адресом, если что-то хотим передать засовываем в сам линк

function updateTask(title){
    const promise =  axios.put(`https://repetitora.net/api/JS/Tasks`,{
        title:'learnJS',
        widgetId: 54783
    })
    return promise.then((response)=> {
        return response.data
    })
}
//put - обновить
//delete - удалить
//rest-api - у вех запросов одна ссылка меняется только запрос

//у delete нет body, поэтому передаем параметры в ссылку
function deleteTask(id){
    const promise =  axios.delete(`https://repetitora.net/api/JS/Tasks?widgetId=43r43&taskId='cdvdsvdsv'`,)
    return promise.then((response)=> {
        return response.data
    })
}