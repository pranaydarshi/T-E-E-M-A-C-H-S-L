let input = document.getElementById("input");
let selectedfile;
input.addEventListener("change",(event)=>{
    selectedfile = event.target.files[0];
})
let cash = 0;
let btn = document.querySelector("#convert")
let final;
let res = ""
const result = ""
btn.addEventListener("click",(event)=>{
    console.log("Button invoked")
    console.log(selectedfile)
    let convert = new Promise((resolve, reject) => {
        console.log("promise created")
        resolve("Success")
    })
    convert.then((result)=> {
            console.log(result)
           
                if(selectedfile){
                    console.log("File launched")
                    let fileReader = new FileReader();
                    fileReader.readAsBinaryString(selectedfile);
                    fileReader.onload = (event)=>{
                        let data = event.target.result;
                        let workbook = XLSX.read(data,{type:"binary"})
                        workbook.SheetNames.forEach(sheet=>{
                            let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet])
                           let result =JSON.stringify(rowObject,null,3)
                            final = JSON.parse(result)
                            
                            
                        })
                        cash = final[0].cash;
                        res = res + " "+cash.toString();
                        console.log("Cash: ",cash)
                        let fin = Promise.resolve(res);
                      fin.then((res) => {
                            result = res;
                          
                      })
                    }
                }
           
    })

    
})

