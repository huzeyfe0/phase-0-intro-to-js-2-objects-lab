// Write your solution in this file!
const employee = {
    name: "Huzeyfe Abdullahoglu",
    streetAdress: "istanbul, Kayasehir"
}
//1
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObj = { ...employee };
    newObj[key] = value;
    return newObj;
}

//2
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee
}
//3
function deleteFromEmployeeByKey(employee, key){
    const newEmp = { ...employee }
    delete newEmp[key]
    return newEmp
}

//4git 
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}