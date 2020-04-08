import { useComputers } from '../computers/computerDataProvider.js'
import { useEmployees } from './employeeDataProvider.js'
import { Employee } from './Employee.js'
import { useDepartments } from '../departments/departmentProvider.js'
import { useLocations } from '../locations/locationProvider.js'
import { useCustomers } from '../customers/customerProvider.js'
import { useEmployeeCustomers } from '../customers/employeeCustomerProvider.js'

const contentTarget = document.querySelector('.container')

export const EmployeeList = () => {
  const employees = useEmployees()
  const computers = useComputers()
  const departments = useDepartments()
  const locations = useLocations()
  const customers = useCustomers()
  const customerRelationships = useEmployeeCustomers()

  const render = () => {
    employees.map((employee) => {
      let foundComputer = computers.find(
        (comp) => comp.id === employee.computerId
      )

      let relatedDepartment = departments.find((department) => {
        return department.id === employee.departmentId
      })

      let relatedLocation = locations.find(
        (location) => location.id === employee.locationId
      )

      let relationships = customerRelationships.filter(
        (cr) => cr.employeeId === employee.id
      )

      let assignedCustomers = relationships.map((rel) => {
        return customers.find((customer) => customer.id === rel.customerId)
      })

      return (contentTarget.innerHTML += Employee(
        employee,
        foundComputer,
        relatedDepartment,
        relatedLocation,
        assignedCustomers
      ))
    })
  }
  render()
}
