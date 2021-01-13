var data = {"countries":[
    {"Pakistan":{
        "capital":"Islamabad",
        "cities":[
            {"karachi":{"area":"3780"}},
            {"Islamabad":{"area":"220"}},
            {"Lahore":{"area":"1772"}},
        ]}
    }
    
]}

//var data2 = {"name": "shafey","id":1}

function jsonbreak(obj){
    Object.keys(obj).forEach(function(key1){
        if(typeof obj[key1] == "object"){
            if(typeof obj[key1].length != "undefined"){
                console.log(key1)
                obj[key1].forEach(function(key2){
                    console.log(key2)
                    jsonbreak(key2)
                })
                
            }else{
                console.log(key1)
                jsonbreak(obj[key1])
            }
        }else{
            //console.log(key1)
            console.log(key1 + " : " + obj[key1])
        }
    })

}

jsonbreak(data)






















// var data = {"countries":[
//     {"Pakistan":{
//         "capital":"Islamabad",
//         "cities":[
//             {"karachi":{"area":"3780"}},
//             {"Islamabad":{"area":"220"}},
//             {"Lahore":{"area":"1772"}},
//         ]}
//     },
//     {"Bangladesh":{
//         "capital":"Dhaka",
//         "cities":[
//             {"Dhaka":{"area":"306"}},
//             {"chittakong":{"area":"171"}},
//             {"Khulna":{"area":"88"}},
//         ]
//     }},
// ]}