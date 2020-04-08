let employeeCustomers = []

export const getEmployeeCustomers = () =>
  fetch('http://localhost:8088/employeeCustomers')
    .then((res) => res.json())
    .then(
      (parsedEmployeeCustomers) => (employeeCustomers = parsedEmployeeCustomers)
    )

export const useEmployeeCustomers = () => employeeCustomers.slice()
