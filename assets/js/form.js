// TODO: Create a variable that selects the form element
let form = document.getElementsByTagName("form")[0];
// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
form.addEventListener("submit", function(e) {
    e.preventDefault();
    let blog = {
        username: document.getElementById("username").value.trim(),
        title: document.getElementById("title").value.trim(),
        content: document.getElementById("content").value.trim()
    }
    console.log(blog)
    for (data in blog){
        if (blog[data] === ""){
            document.getElementById("error").textContent = `You need to enter the ${data}.`
            return;
        }
    }
    storeLocalStorage(blog);
    redirectPage("./blog.html")
})
// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
