let main = document.getElementsByTagName("main")[0];
let back = document.getElementById("back");
// TODO: Create a function that builds an element and appends it to the DOM
function buildBlog(blog){
    let article = document.createElement("article");
    let quote = document.createElement("blockquote");
    quote.textContent = blog.content;
    let h2 = document.createElement("h2");
    h2.textContent = blog.title;
    let p = document.createElement("p");
    p.textContent = `Posted by: ${blog.username}`;
    article.appendChild(h2);
    article.appendChild(quote);
    article.appendChild(p);
    main.appendChild(article);

}
// TODO: Create a function that handles the case where there are no blog posts to display
function noPosts() {
    let h2 = document.createElement("h2");
    h2.textContent = "There aren't any blog posts yet 😨";
    let a = document.createElement("a");
    a.textContent = "Click here to make a post 👈";
    a.setAttribute("href", "./index.html");
    main.appendChild(h2);
    main.appendChild(a);
}
function renderBlogList(){
    let blogs = readLocalStorage();
    if (blogs.length == 0){
        return noPosts();
    }
    blogs.forEach(blog => {
        buildBlog(blog);
    });
}

renderBlogList();

back.addEventListener("click", function (e){
    e.preventDefault();
    redirectPage("./index.html");
})