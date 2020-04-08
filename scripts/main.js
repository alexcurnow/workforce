import { getComputers } from './computers/computerDataProvider.js'
import { getEmployees } from './employees/employeeDataProvider.js'
import { EmployeeList } from './employees/EmployeeList.js'
import { getDepartments } from './departments/departmentProvider.js'
import { getLocations } from './locations/locationProvider.js'
import { getCustomers } from './customers/customerProvider.js'
import { getEmployeeCustomers } from './customers/employeeCustomerProvider.js'

getComputers()
  .then(getEmployees)
  .then(getDepartments)
  .then(getLocations)
  .then(getCustomers)
  .then(getEmployeeCustomers)
  .then(EmployeeList)
