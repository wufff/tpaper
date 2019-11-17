import axios from 'axios';

var instance = axios.create({
  baseURL: 'http://www.wayperfect.com:888/',
  timeout: 5000,
  headers: {'Content-Type': 'application/x-www-form-urlencoded'}
});


export function get(url) {
	 return function (params){
	      return axios.get(url,{
	      	 params
	      }).then((res) => {
	      	 const { errno,data } = res.data;
	      	 if(errno == 0){
	      	 	  return data;
	      	 }
	      }).catch(()=>{
	      	 
	      })
	 }
}