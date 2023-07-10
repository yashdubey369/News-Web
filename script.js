let p=fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=78a14a144c6e4fab977cc5b55711da5d')
.then((response)=>{
    // console.log(response.json());
    return response.json();

})
.then((data)=>{
    console.log(data);
    showArticles(data.articles);
    // return data;
})
// console.log(p.data.articlesart);
function showArticles(articles) {
    for (let i = 0; i < articles.length; i++) {
        const arti = articles[i];
        
        //Creating and adding Div in container:
        var div = document.createElement("div");
        div.setAttribute("Id","article"+i)
        div.setAttribute("class","articles")
        document.getElementById("container").appendChild(div);
        
        //Creating and adding heading with anchor tag in div:
        var a = document.createElement("a");
        a.setAttribute("class","hover-underline-animation");
        a.setAttribute("href",arti.url);
        a.innerText=arti.title;
        div.appendChild(a);
        
        // document.getElementById("article"+i).appendChild(div);
        
        // var h   = document.createElement("H3");
        // h.innerHTML = arti.title;
        // document.getElementById("article"+i).appendChild(h);
        // var hr=document.createElement("hr");
        // div.appendChild(hr)

        //Creating and adding img in div:
        var img=document.createElement("Img");
        img.setAttribute("src",arti.urlToImage)
        document.getElementById("article"+i).appendChild(img);
        // console.log(img);


        
    }
    console.log(articles); 
    
}
