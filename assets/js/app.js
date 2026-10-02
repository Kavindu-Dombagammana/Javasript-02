//Week 02

// let studentList = [
//     {
//         name:"Pawan",
//         age:21,
//         location:"Colombo",
//         score:[
//             {
//                 subject:"Maths",
//                 marks:79
//             },
//             {
//                 subject:"Science",
//                 marks:58
//             }
//         ]
//     },
//     {
//         name:"Samara",
//         age:19,
//         aggress:"Gampaha",
//         score:[
//             {
//                 subject:"Science",
//                 marks:33
//             },
//             {
//                 subject:"History",
//                 marks:20
//             }
//         ]

//     }
// ]

// console.log(studentList[0].age);
// console.log(studentList[0].score[1].subject);


// DOM - (Document Object Model)
//This access the html site
//console.log(document);

//access the title tag in html

// let title = document.getElementById("title");

// title.innerText = "Kavindu";

// let userDetails = [];
// function btnSubmitOnAction() {
//     let txtEmail = document.getElementById("txtEmail").value;
//     let txtPassword = document.getElementById("txtPassword").value;

//     // console.log(txtEmail);
//     // console.log(txtPassword);
    
//     let user = {
//         email:txtEmail,
//         password :txtPassword
//     }

//     userDetails.push(user);
//     console.log(userDetails);
    
    
// }
let customerList=[];
function addCustomerOnAction() {
    let txtName = document.getElementById("txtName").value;
    let txtAddress = document.getElementById("txtAddress").value;
    let txtAge = document.getElementById("txtAge").value;
    let txtEmail = document.getElementById("txtEmail").value;
    let txtSalary = document.getElementById("txtSalary").value;

    let customer = {
        name :txtName,
        address : txtAddress,
        age: txtAge,
        email : txtEmail,
        salary : txtSalary
    }
    customerList.push(customer);
    console.log(customerList);
    loadTableOnAction();
}
function loadTableOnAction(){
    let tblCustomer = document.getElementById("tblCustomer");

    let body ="";
    for (let i = 0; i < customerList.length; i++) {
        
    body +=`
            <tr>
                <td>${customerList[i].name}</td>
                <td>${customerList[i].address}</td>
                <td>${customerList[i].age}</td>
                <td>${customerList[i].email}</td>
                <td>${customerList[i].salary}</td>
            </tr>    
        `
    }
    tblCustomer.innerHTML=body;

}
