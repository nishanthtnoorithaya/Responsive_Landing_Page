function emails()
{
    var email = document.getElementById('input').value;
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    document.getElementById("emaillabel").innerText=" ";
    document.getElementById('emaillabel').style.cssText="color:orange;font-weight: bold";
    document.getElementById('button').innerText='Subscribe Now';
    if(email=="")
    {
        document.getElementById("emaillabel").innerText=" ";
        return true;
    }
    else if(!reg.test(email)) 
    {
        document.getElementById('emaillabel').innerText='Invalid Email Address';
        return true;
    }
    return email;
}

function submit()
{
    var email = document.getElementById('input').value;
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if(reg.test(email))
    {
        document.getElementById('button').innerHTML='Subscribed<i class="fa fa-check" aria-hidden="true"></i>';
        document.getElementById('emaillabel').innerText="";
        document.getElementById('input').value="";
        return true;
    }
    else if(email=="")
    {
        document.getElementById('emaillabel').innerText='Enter the Email Address';
        document.getElementById('emaillabel').style.cssText="color:orange;font-weight: bold";
        return true;
    }
}

function opennav()
{
        var x = document.getElementById("Sidenav");
        if (x.style.display === "block")
        {
            x.style.display = "none";
        } 
        else 
        {
            x.style.display = "block";
          
        }
}