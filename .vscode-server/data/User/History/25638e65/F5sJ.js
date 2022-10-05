const employee = {
    name: "denno",
    streetAddress: "Embu"
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = { ...employee };
    newEmployee[key] = "value";
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, valu) {

    employee[key] = value;
    return employee;
}
