export const Customer = (customer, assignedEmployees) => {
  return `
    <fieldset style="margin:10px" class="employeeAndComputer">
      <h3>${customer.name}</h3>
  <h4>Assigned Employees to Date:</h4>
      <ul>
        ${assignedEmployees
          .map((e) => `<li>${e.firstName} ${e.lastName}</li>`)
          .join('')}
      </ul>

    </fieldset>
  `
}
