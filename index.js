// Write your solution in this file!

const employee = {
    name: 'Dennis',
    streetAddress: 'Tassia',
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    //return { ...employee, [key]: value };
    const employee2 = {
        name : 'Sam',
        streetAddress:'11 Broadway',
    }
    //const newEmployee = {...employee, ...employee2};
    return {...employee2, [key]: value};
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  console.log('Initial employee object:', employee);
  
  const updatedEmployee1 = updateEmployeeWithKeyAndValue(employee, 'age', 30);
  console.log('Updated employee object (non-destructive):', updatedEmployee1);
  
  const updatedEmployee2 = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'age', 30);
  console.log('Updated employee object (destructive):', updatedEmployee2);
  
  const employeeWithoutStreet = deleteFromEmployeeByKey(employee, 'streetAddress');
  console.log('Employee without street (non-destructive):', employeeWithoutStreet);
  
  const employeeWithoutStreetDestructive = destructivelyDeleteFromEmployeeByKey(employee, 'streetAddress');
  console.log('Employee without street (destructive):', employeeWithoutStreetDestructive);
  