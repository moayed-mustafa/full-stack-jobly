import axios from 'axios'

/*
    * an interface to communicate with the backend from the react app
    * almost like an ORM
    */
class JoblyApi {

    // MAIN METHOD
    static async request(endpoint, paramsOrData = {}, verb = "get") {
      paramsOrData._token = ( // for now, hardcode token for "testing"
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc" +
      "3RpbmciLCJpc19hZG1pbiI6ZmFsc2UsImlhdCI6MTU1MzcwMzE1M30." +
      "COmFETEsTxN_VfIlgIKw0bYJLkvbRQNgO1XCSE8NZ0U");

      console.debug("API Call:", endpoint, paramsOrData, verb);

      try {
        return (await axios({
          method: verb,
          url: `http://localhost:3001${endpoint}`,
          [verb === "get" ? "params" : "data"]: paramsOrData})).data;
          // axios sends query string data via the "params" key,
          // and request body data via the "data" key,
          // so the key we need depends on the HTTP verb
      }

      catch(err) {
        console.error("API Error:", err.response);
        let message = err.response.data.message;
        throw Array.isArray(message) ? message : [message];
      }
    }

    // making the companies methods
    static async getCompany(handle) {
      let res = await this.request(`companies/${handle}`);
      return res.company;
    }

    //----------------------------------------------------------------------------------------------------------------
    static async getAllCompanies() {
        let res = await this.request('/companies')
        return res.companies
    }
        //----------------------------------------------------------------------------------------------------------------
    // post a company
    static async createCompany(data) {
        let res = await this.request('/companies', data, "post")
        return res.company
    }
        //----------------------------------------------------------------------------------------------------------------
    // patch a company
    static async updateCompany(handle) {
        let res = await this.request(`/companies/${handle}`, "patch")
        return res.company
    }
        //----------------------------------------------------------------------------------------------------------------
    // delete a company
    static async deleteCompany(handle) {
         await this.request(`/companies/${handle}`,"delete")
        // return res.company
    }

    //================================================================================================================================================
    // making the jobs methods
    static async getJob(id) {
        let res = await this.request(`jobs/${id}`);
        return res.job;
      }

      //----------------------------------------------------------------------------------------------------------------
      static async getAllJobs() {
          let res = await this.request('/jobs')
          return res.jobs
      }
          //----------------------------------------------------------------------------------------------------------------
      // post a job
    static async createJob(data) {
          let res = await this.request('/jobs', data, "post")
          return res.job
      }
          //----------------------------------------------------------------------------------------------------------------
      // patch a job
      static async updateJob(data) {
          let res = await this.request('/jobs', data, "patch")
          return res.company
      }
          //----------------------------------------------------------------------------------------------------------------
      // apply for a job
      static async apply(id) {
          let res = await this.request(`/jobs/${id}/apply`, "post")
          return res.company
      }
          //----------------------------------------------------------------------------------------------------------------
      // delete a job
      static async deleteJob(id) {
           await this.request(`/jobs/${id}`,"delete")
          // return res.company
      }
    //================================================================================================================================================
    // making the users methods
    static async getUser(username) {
        let res = await this.request(`users/${username}`);
        return res.job;
      }

      //----------------------------------------------------------------------------------------------------------------
      static async getAllUsers() {
          let res = await this.request('/users')
          return res.users
      }
          //----------------------------------------------------------------------------------------------------------------
      // post a company
    static async signup(data) {

          let res = await this.request('/users', data, "post")
          return res.job
      }
          //----------------------------------------------------------------------------------------------------------------
      // patch a company
      static async updateUser(username) {
          let res = await this.request(`/users/${username}` , "patch")
          return res.company
      }
          //----------------------------------------------------------------------------------------------------------------
      // delete a company
      static async deleteUser(username) {
           await this.request(`/users/${username}`,"delete")
          // return res.company
      }

        //================================================================================================================================================
        // auth
    static async login(data) {
        let _token = await this.request('/login', data, "post")
        return _token


      }

  }

 export default JoblyApi