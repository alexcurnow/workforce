import { getComputers } from './computers/computerDataProvider.js'
import { getEmployees } from './employees/employeeDataProvider.js'
import { EmployeeList } from './employees/EmployeeList.js'
import { getDepartments } from './departments/departmentProvider.js'
import { getLocations } from './locations/locationProvider.js'

getComputers()
  .then(getEmployees)
  .then(getDepartments)
  .then(getLocations)
  .then(EmployeeList)
