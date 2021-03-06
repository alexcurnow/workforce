let computers = []

export const getComputers = () => {
  return fetch('http://localhost:8088/computers')
    .then((res) => res.json())
    .then((parsedComputers) => (computers = parsedComputers))
}

export const useComputers = () => computers.slice()
