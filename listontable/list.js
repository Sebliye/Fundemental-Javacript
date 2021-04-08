window.onload()=function(){
     let arr=["shiro","keywete","doro","tibs"]

let dispaly=""
for(let elem of arr){
     console.log(elem);
     dispaly=dispaly + "<td>" + elem + "</td>"
}
console.log(dispaly)
document.getElementById('list').innerHTML=dispaly

}


