import {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Api from '../Api'


// *todo: you're making two functions inside most of the funcitons that interact with
//  * the api, maybe you have done this thinking that you'll not have to deal with
// * promises directly, but you're doing that anyways on your submit functions
// * anytime you're calling those function onSubmit, so remove those!

const FetchData = (setCompanies, setJobs)=> {

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


    }
  function FetchJobsByHandle (handle, setter){
      console.log('FetchJobsByHandle')
      async function getData() {
            let result = await Api.getCompany(handle)
            console.log(result)
            setter(result)
            return result

        }
        getData()

  }



function updateUser(data) {
    async function update() {
        let username = JSON.parse(window.localStorage.getItem("username"))
        let result = await Api.updateUser(data, username)
        return result
    }
    return update()
}

function applyForJob(id) {
    async function applying() {
        // call the username from localstorage
        let data = { username:JSON.parse(window.localStorage.getItem("username")) }
         await Api.apply(id, data)

    }
    applying()

}

//   todo: make a function to get a company
async function getCompany(handle) {
    console.log('getCompany')
    // async function getOneCompany() {
       let result = await Api.getCompany(handle)
        return result
    // }
    // return getOneCompany()
}


export  {FetchData, FetchJobsByHandle, updateUser, applyForJob, getCompany}