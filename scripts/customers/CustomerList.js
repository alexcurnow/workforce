import { useEmployees } from '../employees/employeeDataProvider.js'
import { useCustomers } from '../customers/customerProvider.js'
import { useEmployeeCustomers } from '../customers/employeeCustomerProvider.js'
import { Customer } from './Customer.js'

const contentTarget = document.querySelector('.container')

export const CustomerList = () => {
  const employees = useEmployees()
  const customers = useCustomers()
  const customerRelationships = useEmployeeCustomers()

  const render = () => {
    customers.map((customer) => {
      let relationships = customerRelationships.filter(
        (cr) => cr.customerId === customer.id
      )

      let assignedEmployees = relationships.map((rel) => {
        return employees.find((employee) => employee.id === rel.employeeId)
      })

      return (contentTarget.innerHTML += Customer(customer, assignedEmployees))
    })
  }
  render()
}
