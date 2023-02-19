import { app } from "./firebase.js";
import { getDatabase, set, ref, get, child, update, remove } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js"
// import React from "react"
// import {res} from './app.js'

let name, empid, desg, phno, company, dob, membership_yes, gunta_5g, gunta_10g, gunta_20g, gunta_40g, email, teea, membership_no
let db = getDatabase();
let cnt = 0;
let add = document.querySelector(".insert")
let details = document.querySelector("#details")
details.innerHTML=
`
  <h1 id="h1">Welcome To TEEMACHSL</h1>
  <h5 id="h5">100 Acres of Land at Nedunoor (v) Kandukoor (M) RR District</h5>
`
let membership = ""
let gunta = ""
function readDetails() {
  name = document.getElementById("name").value;
  desg = document.getElementById("desg").value;
  phno = document.getElementById("phno").value;
  empid = document.getElementById("empid").value;
  company = document.getElementById("company").value;
  dob = document.querySelector("#dob").value;
  membership_yes = document.getElementById("yes").value;
  membership_no = document.getElementById("no").value;
  if (membership_yes.length > 0) {
      membership = membership_yes;
  }
  
 
  else if(membership_no.length > 0){
    membership = membership_no;
  }
  email = document.getElementById("empemail").value;
  teea = document.querySelector("#teea").value
  gunta_10g = document.getElementById("10g").value;
  gunta_5g = document.getElementById("5g").value;
  gunta_20g = document.getElementById("20g").value;
  gunta_40g = document.getElementById("40g").value;
  if(gunta_10g.length>0){
      gunta = gunta_10g
  }
  else if(gunta_5g.length>0){
    gunta = gunta_5g
  }
  else if(gunta_20g.length>0){
    gunta = gunta_20g
  }
  else if(gunta_40g.length>0){
    gunta = gunta_40g
  }

}

add.addEventListener("click", () => {
  cnt++;


  details.innerHTML =
    ` 
    <style>
    th,tr{
      border:2px solid black;
    }
    #table{
      padding:20px;
      background-color: white;
       box-shadow: 10px 15px 50px;
       text-align: center;
       border-radius: 60px;
       width:500px;
       border:10px solid green;
    }
</style>
       
<table id="table" class="text-center" align="center" cellspacing="0" cellpadding="15">

<tr>
    <th  colspan="3"id="alert">Details Form</th>
</tr>
<tr>
    <th>1.</th>
    <th  class="label">Enter Name</th>
    <th scope="col"> <input class="child" type="text" name="" id="name" placeholder="Enter Here..."
            autocomplete="off">
    </th>

</tr>
<tr>
    <th>2.</th>
    <th class="label">Enter Employee ID</th>
    <th><input type="text" id="empid" placeholder="Enter Here..."></th>
</tr>
<tr>
    <th>3.</th>
    <th class="label">Enter Phone Number</th>
    <th><input class="child" type="number" name="" id="phno" placeholder="Enter Here..." autocomplete="off">


</tr>
<tr>
    <th>4.</th>
    <th class="label">Select Organization</th>
    <th style="width:100%">
        <select name="" id="company">
            <option value="Company">Select Here...</option>
            <option value="TSTRANSCO">TSTRANSCO</option>
            <option value="TSGENCO">TSGENCO</option>
            <option value="TSSPDCL">TSSPDCL</option>
            <option value="TSNPDCL">TSNPDCL</option>
        </select>
    </th>
</tr>
<tr>
    <th>5.</th>
    <th class="label">Select Designation</th>
    <th>
        <select name="cars" id="desg" width="100" required>
            <option id="des" value="Enter Designation">Select Here...</option>
            <option value="CGM">CGM</option>
            <option value="SE">SE</option>
            <option value="DE">DE</option>
            <option value="ADE">ADE</option>
        </select>
    </th>
</tr>
<tr>
    <th>6.</th>
    <th class="label">Enter Email ID</th> 
    <th><input type="email" name="" id="empemail" placeholder="Enter Here..."></th>
</tr>
<tr>
    <th>7.</th>
    <th class="label">Date Of Birth</th>
    <th><input type="date" name="" id="dob" placeholder="Date of Birth"></th>
</tr>
<tr>
    <th>8.</th>
    <th class="label">Enter Branh you belongs to in TEEA</th>
    <th><input type="text" id="teea" placeholder="Enter Here..."></th>
</tr>
<tr>
    <th>9.</th>
    <th class="label">Do you have Memebership in TEEMACHSL</th>
    <th>
        <input  type="radio" name="membership" id="yes" value="Yes" > <span style="font-size:20px"> Yes</span>  <br><br> <input type="radio" name="membership" id="no" value="No"><span style="font-size:20px">No</span>
    </th>
<tr>
    <th>10.</th>
    <th class="label">What Size of Housing farm land you require</th>
    <th><input type="radio" name="gunta" id="5g" value="05 Gunta(605 Sy.yd)" >05 Gunta(605 Sy.yd) <br>
    <input type="radio" name="gunta" id="10g" value="10 Gunta(1210 Sy.yd)">10 Gunta(1210 Sy.yd) <br>
    <input type="radio" name="gunta" id="20g" value="20 Gunta(2420 Sy.yd) ">20 Gunta(2420 Sy.yd) <br>
    <input type="radio" name="gunta" id="40g" value="40 Gunta(4840 Sy.yd)">40 Gunta(4840 Sy.yd)
    </th>
</tr>
</tr>
<tr>
    <th colspan="3"><button type="submit" id="insert" class="btn btn-warning">Submit</button>
        <button type="reset" id="reset" class="btn btn-warning">Reset</button>
    </th>

</tr>


</table>



              
           `









  let add1 = document.getElementById("insert")
  add1.addEventListener("click", () => {
    console.log("button invoked");
    readDetails()
    if (name.length > 0 && desg.length > 0 && phno.length > 0 && empid.length > 0 && (membership_yes.length > 0 || membership_no.length > 0) && (gunta_10g.length > 0 || gunta_5g > 0 || gunta_20g.length > 0 || gunta_40g.length > 0) && teea.length > 0 && email.length > 0 && company.length > 0 && dob.length > 0) {

      set(ref(db, "Members/" + empid), {
        name, empid, desg, phno, company, dob, email, teea,membership,gunta
      }).then(() => {

        let th = document.getElementById("alert")
        th.innerHTML = "SUCCESSFULLY UPDATED"
        alert("successfully Upadated")
        setTimeout(() => {
          th.innerHTML = ""
        }, 3000)
      }).catch(() => {
        let th = document.getElementById("alert")
        th.innerHTML = "FAILED TO UPDATED"
        setTimeout(() => {
          th.innerHTML = ""
        }, 3000)
      });
    }
    else {
      setTimeout(() => {
        alert("Please Fill All The Details")
      }, 3000)
    }
  })
  let reset = document.querySelector("#reset")
  reset.addEventListener("click", () => {
    console.log("Reset is Invoked")
    document.querySelector("#name").value = "";
    document.getElementById("empid").value = "";
    document.querySelector("#desg").selectedIndex = 0
    document.querySelector("#phno").value = ""
    document.getElementById("company").selectedIndex=0;
    document.getElementById("empemail").value=""
    document.getElementById("dob").value=""
    document.getElementById("teea").value=""

  })

})


let view = document.querySelector(".view")
view.addEventListener("click", () => {
  console.log("View Buttton invoked")

  details.innerHTML =
    ` 
  
   
   
  <table id ="table" class="text-center" align="center" cellpadding="15" >
   
  <tr>
  <th id="alert"></th>
   </tr>
  <tr>
  </th>
  
     </tr>
     
     <tr>
    
     </th>
     </tr>
     <tr>
     <th><input class="child" type="text" name="" id="empid" placeholder="Enter Employee ID" autocomplete="off"  >

       
       </tr>
       <tr>
       <th><button type="submit" id="getDetails" class="btn btn-warning">Get Details</button>
       <button type="reset" id="reset" class="btn btn-warning">Reset</button>
       </th>
       
       </tr>
      
       </table> 

          
       `
  let getDetails = document.querySelector('#getDetails')
  getDetails.addEventListener("click", (e) => {
    let emp = []
    
    get(child(ref(db), "Members")).then((snapshot) => {
      //  let test =  snapshot.val()
      console.log(snapshot.exists())
      let emplid = document.querySelector('#empid').value

      if (snapshot.exists()) {
        if (emplid.length > 0) {

          //   let detail = Object.values(test)
          //   console.log(detail[0].phno)
         
          details.innerHTML =
            `
          <style>
          th,tr,td{
            border:2px solid black;
          }
          table{
            
            width: 300px;
            padding:30px;
          }
          </style>
          <table id="table" class="text-center" align="center" cellspacing="0" cellpadding="15">

<tr>
    <th  colspan="3"id="alert">Details Form</th>
</tr>
<tr>
    <th>1.</th>
    <th>Employee Name</th>
    <th id="nameDetails">

</tr>
<tr>
    <th>2.</th>
    <th>Employee ID</th>
    <th id="empidDetails"></th>
</tr>
<tr>
    <th>3.</th>
    <th>Employee PhoneNumber</th>
    <th id="phnoDetails"></th>


</tr>
<tr>
    <th>4.</th>
    <th>Employee Organaization</th>
    <th id="orgDetails">
      
    </th>
</tr>
<tr>
    <th>5.</th>
    <th>Employee Designation</th>
    <th id="desgDetails">
        
    </th>
</tr>
<tr>
    <th>6.</th>
    <th>Employee Email</th>
    <th id="emailDetails"></th>
</tr>
<tr>
    <th>7.</th>
    <th>Employee DOB</th>
    <th id="dobDetails"></th>
</tr>
<tr>
    <th>8.</th>
    <th>Employee Branch</th>
    <th id="branchDetails"></th>
</tr>
<tr>
    <th>9.</th>
    <th>Employee Membership</th>
    <th id="membershipDetails">
    </th>
<tr>
    <th>10.</th>
    <th>Guntas</th>
    <th id="guntaDetails">
    </th>
</tr>
</tr>


</table>
     `

     let alert = document.querySelector("#alert");
     let getName = snapshot.val()[emplid].name;
     let getDesg = snapshot.val()[emplid].desg;
     let getemail = snapshot.val()[emplid].email;
     let getdob = snapshot.val()[emplid].dob;
     let get_yes = snapshot.val()[emplid].membership;
     let get_no = snapshot.val()[emplid].membership;
     let getphno = snapshot.val()[emplid].phno;
     let gunta_10g = snapshot.val()[emplid].gunta;
     let gunta_5g = snapshot.val()[emplid].gunta;
     let gunta_20g = snapshot.val()[emplid].gunta;
     let gunta_40g = snapshot.val()[emplid].gunta;
     let getcompany = snapshot.val()[emplid].company;
     let teea = snapshot.val()[emplid].teea;
     let getEmpid = snapshot.val()[emplid].empid;


     alert.innerHTML = "THE EMPLYOEE DETAILS ARE"
     document.getElementById("nameDetails").innerHTML = getName;
     document.getElementById("empidDetails").innerHTML = getEmpid;
     document.getElementById("desgDetails").innerHTML = getDesg;
     document.getElementById("emailDetails").innerHTML = getemail;
     document.getElementById("dobDetails").innerHTML = getdob;
     document.getElementById("orgDetails").innerHTML = getcompany;
     document.getElementById("branchDetails").innerHTML = teea
     if (get_yes.length > 0) {
       document.getElementById("membershipDetails").innerHTML = get_yes;
     }
     else if(get_no.length > 0) {
       document.getElementById("membershipDetails").innerHTML = get_no;

     }
     document.getElementById("phnoDetails").innerHTML = getphno;
     if (gunta_5g.length > 0) {
       document.getElementById("guntaDetails").innerHTML = gunta_5g;
     }
     else if (gunta_20g.length > 0) {
       document.getElementById("guntaDetails").innerHTML = gunta_20g
     }
     else if (gunta_10g) {
       document.getElementById("guntaDetails").innerHTML = gunta_10g
     }
     else if (gunta_40g.length > 0) {
       document.getElementById("guntaDetails").innerHTML = gunta_40g;
     }


        }


        else {
          setTimeout(() => {

            alert("Please Enter Employee ID ")
          })
        }
      }
      else {
        alert("No data found")
      }


    }).catch((err) => {
      details.innerHTML = `

      <h4 style="color:green"">Sorry Please Try Again</h6>
      `

      alert("No such data exist")
      console.log(err)
    })
  })
  let reset = document.getElementById("reset")
  reset.addEventListener("click",()=>{
    document.getElementById("empid").value = ""
  })

})

let upd = document.querySelector(".update")




upd.addEventListener("click", () => {
  console.log("Updt is invoked")
  details.innerHTML =
    `
    <table id ="table" class="text-center" align="center" cellpadding="15" >
   
    <tr>
    <th id="alert"></th>
     </tr>
     <tr>     <th><input class="child" type="text" name="" id="uptempid" placeholder="Enter Employee ID" autocomplete="off"  ></th>
     </tr>
    <tr><th><input type="text" id="cash" placeholder="Enter Amount" autocomplete="off">
    </th>
    
       </tr>
       
       <tr>
      
       </th>
       </tr>
       <tr>
       <th><input class="child" type="text" name="" id="recptno" placeholder="Enter Transaction ID" autocomplete="off"  >
  
         
         </tr>
         <tr>
         <th><button type="submit" id="updateDetails" class="btn btn-warning">Update</button>
         <button type="reset" id="reset" class="btn btn-warning">Reset</button>
         </th>
         
         </tr>
        
         </table> 
    `
  let upddetails = document.querySelector("#updateDetails")
  upddetails.addEventListener("click", () => {


    let uptemp = document.querySelector("#uptempid").value;
    let cash = document.querySelector("#cash").value;
    let recp = document.querySelector("#recptno").value;
    let alt = document.querySelector("#alert")
    
    if(uptemp.length>0 && cash.length>0 && recp.length>0){
    update(ref(db, "Members/" + uptemp), {
      uptemp,recp,alt
      
    }).then(() => {
      
     
      let th = document.getElementById("alert")
      th.innerHTML = "SUCCESSFULLY UPDATED"
      setTimeout(() => {
        th.innerHTML = ""
      }, 3000)
    }).catch(() => {
      let th = document.getElementById("alert")
      th.innerHTML = "FAILED TO UPDATED"
      setTimeout(() => {
        th.innerHTML = ""
      }, 3000)
    });
  }
    else{
      alert("Please Fill The Details")
    }
    
  })

  let reset = document.querySelector("#reset")
  reset.addEventListener("click", () => {
    document.querySelector("#uptempid").value = ""
    document.querySelector("#cash").value = ""
    document.querySelector("#recptno").value = ""
  })

})

let payment = document.querySelector(".payment")
payment.addEventListener("click", ()=>{
  console.log("payment button invoked")

  details.innerHTML = 
  `
  <style>

    #table{
      height:150px;
    }
  </style>
  <table id="table">
  <tr>
      <th id="alert"></th>
  </tr>
  <tr>
      <th><input type="text" id="paempid" placeholder="Enter Employee ID..."></th>
  </tr>
  <tr>
  <th><button type="submit" id="submit" class="btn btn-warning">Submit</button>
  <button type="reset" id="reset" class="btn btn-warning">Reset</button>
  </th>
  </tr>
</table>
  `

  let payv = document.getElementById("submit")
  payv.addEventListener("click",()=>{
    console.log("payment view button invoked")

   
         get(child(ref(db),"Members")).then((snapshot)=>{
          console.log(snapshot.val())
          let paempid = document.getElementById("paempid").value;
          if(paempid.length>0){

          if(snapshot.exists){
            if(snapshot.val().exists){

            
          details.innerHTML = 
          `
          <style>
                th,tr{
                  border:2px solid black;
                }
            table{
              height:150px;
              width:350px;
              padding:5px;
              border: 3px solid white;
            }
          </style>
          <table id="table">
          <tr>
              <th id="alert" colspan="3">Payment Details</th>
          </tr>
          <tr>
              <th>1.</th>
              <th>Employee Name</th>
              <th id="paname"></th>
          </tr>
          <tr>
            <th>2.</th>
            <th>Cash paid</th>
              <th id="pacash">
                 
              </th>
          </tr>
          <tr>
          <th>3.</th>
          <th>Receipt No</th>
              <th id="parecpt"></th>
          </tr>
       </table>          
          `
        
            
            document.getElementById("paname").innerHTML = snapshot.val()[paempid].name;
            document.getElementById("pacash").innerHTML = snapshot.val()[paempid].cash;
            document.getElementById("parecpt").innerHTML = snapshot.val()[paempid].recp;
           
          }else{
            alert("Sorry no such data exists")
          }
        }else{
          alert("Sorry Data does'nt exist")
        }
      }else{
        alert("Please Fill The Employee ID")
      }
    }).catch((err)=>{
        console.log(err)
    })
  })

  let reset = document.querySelector("#reset")
  reset.addEventListener("click", () => {
    document.querySelector("#paempid").value = ""
    
  })
})