document.getElementById('myBtnSub').addEventListener('click', function (e) {
    ValidateForm();

    e.preventDefault();
})


function ValidateForm() {
    

    // Fetching the values from window

    let fname = myTrim(document.getElementById("txtFName").value);
    let lname = myTrim(document.getElementById("txtLName").value);
    let address1 = myTrim(document.getElementById("txtAdd").value);
    let address2 = myTrim(document.getElementById("txtAdd2").value);
    let phonenumber = myTrim(document.getElementById("txtPhNo").value);
    let alternatenumber = myTrim(document.getElementById("txtAlthNo").value);
    let dateofbirth = document.getElementById("txtDob").value;
    // let age = document.getElementById("txtAge").value;
    let gender = document.getElementById("ddlGender").value;
    
    




    // V- Validation
    const Vfname = document.getElementById("txtFName");
    const Vlname = document.getElementById("txtLName");
    const Vaddress1 = document.getElementById("txtAdd");
    const Vaddress2 = document.getElementById("txtAdd2");
    const Vphonenumber = document.getElementById("txtPhNo");
    const Valternatenumber = document.getElementById("txtAlthNo");
    const Vdateofbirth = document.getElementById("txtDob");
    const Vgender = document.getElementById("ddlGender");

     // For First Name
    if (fname == ""){
        // alert.className = 'border border-danger';
        Vfname.style.borderColor = 'red';
        Vfname.style.background = "#FFCECE"
    }
    else {
        Vfname.style.borderColor = 'green';
        Vfname.style.background = "";
    }

     // For Last Name
    if (lname == "") {
        Vlname.style.borderColor = 'red';
        Vlname.style.background = "#FFCECE"
    }
    else {
        Vlname.style.borderColor = 'green';
        Vlname.style.background = "";
    }
     // For Address 1
    if (address1 == "") {
        Vaddress1.style.borderColor = 'red';
        Vaddress1.style.background = "#FFCECE";
    }
     else {
        Vaddress1.style.borderColor = 'green';
        Vaddress1.style.background = "";
    }


    // For Address 2
    if (address2 == "") {
        Vaddress2.style.borderColor = 'red';
        Vaddress2.style.background = "#FFCECE";
    }
    else {
        Vaddress2.style.borderColor = 'green';
        Vaddress2.style.background = "";
    }

    // For Phone Number
    if (phonenumber == "") {
        Vphonenumber.style.borderColor = 'red';
        Vphonenumber.style.background = "#FFCECE";
    }
    else {
        Vphonenumber.style.borderColor = 'green';
        Vphonenumber.style.background = "";
    }
    
    // For Alternate Number
    if (alternatenumber == "") {
       Valternatenumber.style.borderColor = 'red';
       Valternatenumber.style.background = "#FFCECE";
    }
    else {
        Valternatenumber.style.borderColor = 'green';
        Valternatenumber.style.background = "";
    }
    // For DOB
    if (dateofbirth == "") {
        Vdateofbirth.style.borderColor = 'red';
        Vdateofbirth.style.background = "#FFCECE";
    }
    else {
        Vdateofbirth.style.borderColor = 'green';
        Vdateofbirth.style.background = "";

    }
    // For Gender
    if (gender == 0 || gender == null) {
        Vgender.style.borderColor = 'red';
        Vgender.style.background = "#FFCECE";

    }
    else {
        Vgender.style.borderColor = 'green';
        Vgender.style.background = "";
    }


    const ph = /^\d{10}$/;
    if (phonenumber.match(ph)) {
        
    }
    else {
        Vphonenumber.style.borderColor = 'red';
        Vphonenumber.style.background = "#FFCECE";
    }

    const alt = /^\d{10}$/;
    if (alternatenumber.match(alt)) {
        
    }
    else {
        Valternatenumber.style.borderColor = 'red';
        Valternatenumber.style.background = "#FFCECE";
    }


    function myTrim(x) {
        return x.replace(/^\s+|\s+$/gm,'');
    }


    document.getElementById("tblbody").innerHTML += '<tr><td>' + fname + '</td> <td>' + lname + '</td> <td>' + address1 + '</td> <td>' + address2 + '</td> <td>' + dateofbirth + '</td></tr>';


}           