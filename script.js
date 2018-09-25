function submit() {
    var Name = document.getElementById('name').value;
    var Email = document.getElementById('Email').value;
    
    
    document.write("<h1>Thank You!<h1/>");
    document.write("<p>Now, your data will send via email.<p/>");
    
    document.write("<h3>Here is your data:</h3>");
    
    document.write(Name + "<br/>");
    document.write(Email + "<br/>");
                                      
}

