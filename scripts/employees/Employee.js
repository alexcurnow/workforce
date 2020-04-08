export const Employee = (employee, employeeComputer, department) => {
  return `
    <fieldset style="margin:10px" class="employeeAndComputer">
      <h3>${employee.firstName} ${employee.lastName}</h3>
      <p><b>Age:</b> ${employee.age}</p>
      <p>Currently using a ${employeeComputer.year} ${employeeComputer.model}</p>
      <p>Works in the ${department.name} department</p>

    </fieldset>
  `
}
