function validTime(time) {
    return time.split(':').every((el,idx)=>{
        return (idx==0)?Number(el)<24:Number(el)<60
    })
}
