function savedata() {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    if (fname == "" || lname == "" || email == "" || message == "") {
        alert("All Field Are Reqired")
    }
    else {
        alert(fname + " Your Form Submitted Successfully");
        var data = localStorage.getItem("data");
        if(data == null)
        {
            dataobj  = [];
        }
        else
        {
            dataobj = JSON.parse(data);
        }
        dataobj.push(fname,lname,email,message);
        localStorage.setItem("data",JSON.stringify(dataobj))
        document.getElementById('myform').reset();
    }
}

