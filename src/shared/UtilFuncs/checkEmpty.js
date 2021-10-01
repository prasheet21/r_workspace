export function checkEmpty(data){
    
    for (let item in data){
        let act_data = data[item]
        if (act_data == null || data[item] == "")
            return false ;
    }
    return true ;
}