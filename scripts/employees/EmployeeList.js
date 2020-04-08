import { useComputers } from '../computers/computerDataProvider.js'
import { useEmployees } from './employeeDataProvider.js'
import { Employee } from './Employee.js'
import { useDepartments } from '../departments/departmentProvider.js'

const contentTarget = document.querySelector('.container')

export const EmployeeList = () => {
  const employees = useEmployees()
  const computers = useComputers()
  const departments = useDepartments()

  const render = () => {
    employees.map((employee) => {
      let foundComputer = computers.find(
        (comp) => comp.id === employee.computerId
      )

      let relatedDepartment = departments.find((department) => {
        return department.id === employee.departmentId
      })

      return (contentTarget.innerHTML += Employee(
        employee,
        foundComputer,
        relatedDepartment
      ))
    })
  }
  render()
}
