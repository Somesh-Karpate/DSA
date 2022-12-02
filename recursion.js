function range(start_num,end_num){
    if(end_num - start_num ===0){
        return [start_num];
    }
    else{
        let list = range(start_num,end_num-1);
        list.push(end_num);
        return list;
    }
}
console.log(range(1,5));