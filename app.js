
const fs = require('fs');
const XLSX = require('xlsx');
const jsontoxml = require('jsontoxml');
const workbook = XLSX.readFile("Book1.xlsx")
let worksheet = []
for(let sheetname of workbook.SheetNames){
    worksheet[sheetname] =XLSX.utils.sheet_to_json(workbook.Sheets[sheetname])
}
let data = JSON.stringify(worksheet.Sheet1)

  const res = (JSON.parse(data))
