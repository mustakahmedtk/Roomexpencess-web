import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http'
import { apiConstant } from '../app/globalConstant'

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(
    private http: Http

  ) { }


  callApi = (endpoint, options) => {
   const newOptions=this.getHeaders(options.params)
    if (options.method === "GET") {
      return this.getData(`${apiConstant.apiCommonUrl + endpoint}`, newOptions)
    }
    if (options.method === "POST") {
      return this.postData(`${apiConstant.apiCommonUrl + endpoint}`, options.data)
    }
  }


  postData = (url, data) => {
    return this.http.post(url,data,this.getHeaders(null))
  }

  getData = (url, options) => {
    return this.http.get(url, options)
  }

  storeDataToLocal = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
  }

  getDataFromLocal = (key) => {
    return JSON.parse(localStorage.getItem(key))
  }


  getHeaders = (params) => {
    let token = this.getDataFromLocal('token')
    let headers = new Headers({
      "Authorization": `${token}`
    })
    if (params !== null) {
      let request = new RequestOptions({ headers, params })
      return request
    } else {
      let request = new RequestOptions({ headers })
      return request;
    }


  }

}
