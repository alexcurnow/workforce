let locations = []

export const getLocations = () =>
  fetch('http://localhost:8088/locations')
    .then((res) => res.json())
    .then((parsedLocations) => (locations = parsedLocations))

export const useLocations = () => locations.slice()
