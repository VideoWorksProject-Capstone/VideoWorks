export default function Register(){
    //language=HTML
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8"/>
            <title>Register</title>
        </head>
        <body>
        <form id="register-form">
            <label for="name">Name</label>
            <input id="name" name="name" type="text"/>
            <label for="username">Username</label>
            <input id="username" name="username" type="text"/>
            <label for="email">Email</label>
            <input id="email" type="email" name="email">
            <label for="password">Password</label>
            <input id="password" name="password" type="password"/>
            <label for="dob">Date of Birth</label>
            <input id="dob" name="dob" type="text"/>
            <input id="register-btn" type="button" value="Register"/>
        </form>
        </body>
        </html>
    `;
}

export function RegisterEvent(){
    $(document).on('click', '.button', function(e){
        const reqBody = {
            name: $('#name').val(),
            username: $('#user').val(),
            email: $('#email').val(),
            password: $('#pass').val(),
            dob: $('#dateofbirth').val()
        }

        const options = {
            headers: {
                "Content-Type":"application/json"
            },
            method: 'POST',
            body: JSON.stringify(reqBody)
        }

        fetch("http://localhost:8080/api/users/create", request)
            .then(response => {
                console.log(response)
                console.log(response.status);
                if (response.status === 500) {
                    document.getElementById("emailOrUsernameExists").style.display = "block";
                    document.getElementById("emailOrUsernameExists").style.color = "red";
                    return;
                }
                createView( "/login")
            });
    });
}