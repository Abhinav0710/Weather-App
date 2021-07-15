const request= require('request')

const forecast= (latitude,longitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=e9a503f373e9c4cba1660d3de7af1287&query='+ latitude +','+ longitude +'&units=m'
    request ({url,json: true },(error,{body})=>{
        if(error){
            callback('Unable to connect to the services!',undefined)
        }
        else if(body.error){
            callback('Unable to find location!',undefined)
        }else {
          callback(undefined,
            body.current.weather_descriptions[0]+'. It is currently '+body.current.temperature+' degrees out.It feels like '+body.current.feelslike+' degrees right now.'
          )
        }
    })

}

module.exports=forecast