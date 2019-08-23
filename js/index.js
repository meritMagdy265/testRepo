var allData;
var allNews;
var row = document.getElementById("rowData");
var categorylinks = document.getElementsByClassName("nav-category");
var countrylinks = document.getElementsByClassName("nav-country");
 //getPost();
var category ="general";
var country ="eg";

//function getPost(){
//    var req = new XMLHttpRequest();
//req.open("get","https://jsonplaceholder.typicode.com/posts");
//req.send();
//    
//    req.onreadystatechange=function(){
//    if(req.readyState==4&&req.status==200)
//        {
//            allData=JSON.parse(req.response);
//            console.log(allData);
//           // displayPosts();
//        }
//    else
//        {
//            console.log("error");
//        }
//}
//}

//function displayPosts()
//{
//    var temp="";
//    for(var i=0;i<allData.length;i++)
//        {
//            temp+=`<div class="col-md-4">
//                    <div class="post">
//                        <h2>`+allData[i].title+`</h2>
//                        <p>`+allData[i].body+`</p>
//                    </div>
//                </div>`
//        }
//    row.innerHTML=temp;
//}
 getNews(category,country );



for(var i=0;i<categorylinks.length;i++)
    {
        categorylinks[i].addEventListener("click",function(e){
            
         category=e.target.innerHTML;
         getNews(category,country);
            //alert(category);
        })
    }

for(var i=0;i<countrylinks.length;i++)
    {
       countrylinks[i].addEventListener("click",function(e){
            
         country=e.target.innerHTML;
         getNews(category,country);
            //alert(category);
        })
    }
function getNews(cat,code){
    var req = new XMLHttpRequest();
    var URL ="https://newsapi.org/v2/top-headlines?country="+code+"&category="+cat+"&apiKey=b7c845476e414bd088ff8f62a7b11958";
    console.log(URL);
req.open("get",URL);
req.send();
    
    req.onreadystatechange=function(){
    if(req.readyState==4&&req.status==200)
        {
           
            allNews=JSON.parse(req.response);
            allNews=allNews.articles;
            //console.log(allNews.articles);
           displayNews();
        }
    else
        {
            console.log("error");
        }
}
}

function displayNews()
{
    var temp="";
    for(var i=0;i<allNews.length;i++)
        {
            temp+=`<div class="col-md-4"><a href=`+allNews[i].url+`>
                    <div class="post">
                      <img src=`+allNews[i].urlToImage+` class="img-fluid"/>
                        <h4>`+allNews[i].title+`</h4>
                        <p>`+allNews[i].description+`</p>
                    </div>
                </a></div>`;
        }
    row.innerHTML=temp;
}




