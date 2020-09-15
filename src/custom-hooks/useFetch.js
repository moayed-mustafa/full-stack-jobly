import {useEffect} from 'react'
import { useParams } from 'react-router-dom'
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

    },[setJobs, setCompanies])

}
  function FetchJobsByHandle (handle, setter){
    useEffect(() => {
        async function getData() {
            let result = await Api.getCompany(handle)
            setter(result)
            return result

        }
        getData()

    }, [])
  }


//   todo: make a function to update the user
function updateUser(data) {
    async function update() {
        let username = JSON.parse(window.localStorage.getItem("username"))
        let result = await Api.updateUser(data, username)
        return result
    }
    return update()
}


export  {FetchData, FetchJobsByHandle, updateUser}