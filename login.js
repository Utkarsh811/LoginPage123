var count = 2; // By default you can login 2 times 

function validate() {
    var user = document.login.username.value;
    var password = document.login.password.value;
    var valid = false;
    var usernameArray = ["y"] // username 
    var passwordArray = ["y"] //password


    //checking username and password 
    for (var i = 0; i < usernameArray.length; i++)

        if (user == usernameArray[i])
        if (password == passwordArray[i]) {
            valid = true;
            break;
        }

    if (valid) {
        alert("Welcome to Yajat's website . Your Login is  successfull");
        window.location = "./todo.html"
        return false;
    }
    var again = "tries";
    if (count == 1) {
        again = "try"
    }
    if (count >= 1) {
        alert("Wrong password or username")
        count--;
    }
}