

// let person ={
//     name:"seif",
//     age:25,
//     salary:0
// }

// let ar=[1,2,3,4]

// ar.forEach( function (element,x,y){
//   console.log(x);
//   console.log(y);

// })
// // person=new Map(Object.entries(person))
// // for (const x of person) {
    
// //     console.log("off"+x);
// // }

// for (const x in person) {
//     console.log("in"+person[x]);
    
// }


// // let newsList=[]

// // async function getnews()
// // {
// //     let response=await fetch('https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=1d2c37a4a4874379acb400eb87870c4d')
// //     let data=await response.json();
// //     newsList=data.articles
// //     console.log(newsList);
// //     displaynews()
// // }
// // getnews()

// // function displaynews()
// // {
// //     let temp="";
// //     newsList.forEach((element)=>{
// //          temp +=`<div class="col-xl-4">
// //         <img src="${element.urlToImage}" alt="" class="w-100">
// //         <h2>${element.title}</h2>
// //         <p>${element.description}</p>
// //         </div>`

// //     })
   
// //     document.getElementById("rowData").innerHTML   +=temp;
// // }




// $(".item img").click(function(){
//     let imgPath=$(this).attr('src')
//     $("#mainImage").attr("src",imgPath)
// })






























// // function getIdOne() {
// //     return new Promise(function (callback) {
// //         var myhttp = new XMLHttpRequest();
// //         myhttp.open('GET', "https://jsonplaceholder.typicode.com/posts")
// //         myhttp.send()
// //         myhttp.addEventListener('readystatechange', function () {
// //             if (myhttp.readyState == 4 && myhttp.status == 200) {
// //                 console.log(JSON.parse(myhttp.response)[0].id);
// //                 callback()
// //             }
            
// //         })
// //     })
// // }

// // function getIdTwo() {
// //     return new Promise(function (callback) {
// //         var myhttp = new XMLHttpRequest();
// //         myhttp.open('GET', "https://jsonplaceholder.typicode.com/posts")
// //         myhttp.send()
// //         myhttp.addEventListener('readystatechange', function () {
// //             if (myhttp.readyState == 4 && myhttp.status == 200) {
// //                 console.log(JSON.parse(myhttp.response)[1].id);
// //             }
// //             callback()
// //         })
// //     })
// // }

// // function getIdThree() {
// //     return new Promise(function (callback) {
// //         var myhttp = new XMLHttpRequest();
// //         myhttp.open('GET', "https://jsonplaceholder.typicode.com/posts")
// //         myhttp.send()
// //         myhttp.addEventListener('readystatechange', function () {
// //             if (myhttp.readyState == 4 && myhttp.status == 200) {
// //                 console.log(JSON.parse(myhttp.response)[2].id);
// //             }
// //             callback()
// //         })
// //     })
// // }
// // function end()
// // {
// //     console.log("aboSeiof");
// // }

// // getIdThree().then(getIdTwo).then(getIdOne).then(end)


// // let person ={
// //     name:'dseif',
// //     age:18,
// //     calcSalary:function(){
// //        let calcTany =()=>{
// //            console.log(this);
// //        }
// //        calcTany();
// //        console.log();
// //     }
// // }
// // person.calcSalary()



hello();

async function locatio(loc){
   let response= await fetch(`https://api.weatherapi.com/v1/current.json?key=b73aee4d88ec4d97b7c12221212804&q=${loc}`)
    let results=await response.json()
    console.log(results);
}




async function hello()
{
    await locatio("cairo");
    await locatio("london");
}