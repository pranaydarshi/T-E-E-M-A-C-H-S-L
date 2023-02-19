// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD5Q6PDqrzdJyWerd1JHINtAC0l8Jt9Azg",
    authDomain: "excel-database-e17ab.firebaseapp.com",
    projectId: "excel-database-e17ab",
    storageBucket: "excel-database-e17ab.appspot.com",
    messagingSenderId: "85662866595",
    appId: "1:85662866595:web:4b0cb7d54d63409c533316"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


import { getDatabase, set, ref, get, child, update, remove } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js"
let db = getDatabase();

console.log(getDatabase())

let input = document.getElementById("input");
let selectedfile;
input.addEventListener("change", (event) => {
    selectedfile = event.target.files[0];
})
let cash = 0;
let btn = document.querySelector("#convert")
let final;
let rowObject
let res = ""
let empid, name, desg, company, landowner, phno, cheque, recpt, date;
const result = ""
btn.addEventListener("click", (event) => {
    console.log("Button invoked")
    console.log(selectedfile)
    if (selectedfile) {
        console.log("File launched")
        let fileReader = new FileReader();
        fileReader.readAsBinaryString(selectedfile);
        fileReader.onload = (event) => {
            let data = event.target.result;
            let workbook = XLSX.read(data, { type: "binary" })
            workbook.SheetNames.forEach(sheet => {
                rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet])
                res = JSON.stringify(rowObject, null, 3)
                final = JSON.parse(res)


            })
            console.log("Set method is getting ready")
            for (let i = 0; i < final.length; i++) {
                empid = final[i].empid;
                name = final[i].name
                desg = final[i].designation;
                company = final[i].company;
                landowner = final[i].landowned;
                phno = final[i].phoneno;
                cash = final[i].cash;
                cheque = final[i].cheque;
                recpt = final[i].recept_cash
                date = final[i].date
                set(ref(db, "Employees/" + empid), {
                    empid, name, desg, company, landowner, phno, cash, cheque, recpt, date
                }).then(() => {
                    console.log("worked");
                }).catch(err => {
                    console.log(err)
                })
            }

            console.log(final)

        }
    }




})


