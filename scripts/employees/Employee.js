export const Employee = (
  employee,
  employeeComputer,
  department,
  location,
  assignedCustomers
) => {
  return `
    <fieldset style="margin:10px" class="employeeAndComputer">
      <h3>${employee.firstName} ${employee.lastName}</h3>
      <p><b>Age:</b> ${employee.age}</p>
      <p>Currently using a ${employeeComputer.year} ${
    employeeComputer.model
  }</p>
      <p>Works in the ${department.name} department out of our office in ${
    location.location
  }</p>
  <h4>Assigned Customers to Date:</h4>
      <ul>
        ${assignedCustomers.map((c) => `<li>${c.name}</li>`).join('')}
      </ul>

    </fieldset>
  `
}
