

function getImages(successCallback){
    $.ajax('https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=10', {
        success: function (data){
            successCallback(data)
        }
    });
}