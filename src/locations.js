import { useQuery } from '@tanstack/vue-query'

const fetchLocations = async () =>
    await fetch('https://api-staging.megaport.com/v2/locations').then(async (response) => {
        const { data } = await response.json()

        // randomise first element of data array
        const id = Math.floor(Math.random() * 2000) + 1
        data[0] = {
            id: `${id}`,
            name: `Random Location ${id}`
        }

        return data
    })

export const useLocations = () => {
    return useQuery({ queryKey: ['locations'], queryFn: fetchLocations })
}


