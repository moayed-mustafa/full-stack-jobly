import {useEffect} from 'react'
import Api from '../Api'


const FetchData = (setCompanies, setJobs)=> {

    useEffect(() => {
        console.log('...fetching')
        let mounted = true

        async function getCompanies () {
            let result = await Api.getAllCompanies()
            setCompanies(result)
            return result
        }
        async  function getJobs () {
            let result = await Api.getAllJobs()
            setJobs(result)
            return result
        }


        async function fireFunctions() {
            if (mounted) {
                await getCompanies();
                await getJobs();
            }
        }

        fireFunctions()

        return ()=> {mounted = false}

    },[])

}

export default FetchData