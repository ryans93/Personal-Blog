// TODO: Create a variable that selects the main element, and a variable that selects the back button element
let main = document.getElementsByTagName("main")[0];
let back = document.getElementById("back");
// TODO: Create a function that builds an element and appends it to the DOM
function buildBlog(){

}
// TODO: Create a function that handles the case where there are no blog posts to display
function noPosts() {

}
// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList(){
    let blogs
}

renderBlogList();

back.addEventListener("click", function (e){
    e.preventDefault();
    redirectPage("./index.html");
})