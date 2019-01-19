import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import {apiConstant} from '../app/globalConstant'

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: Http) { }

  
  callApi=(endpoint,options)=>{
    if(options.method==="GET"){
      return this.getData(`${apiConstant.apiCommonUrl+endpoint}`,options.params)
    }
    if(options.method==="POST"){
      return this.postData(`${apiConstant.apiCommonUrl+endpoint}`,options.data)
    }
  }


  postData = (url, data) => {
    return this.http.post(url, data)
  }

  getData=(url,options)=>{
    return this.http.get(url,options)
  }

}
