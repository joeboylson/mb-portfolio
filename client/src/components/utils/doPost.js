import axios from 'axios'
import { apiUrl } from '../App/App'; 


const doPost = (route, data, onSuccess, onError) => {

  axios.post(`${apiUrl}${route}`, data)
  .then(function (response) {
    
    if (!response.data.success) {
      return onError(response.data.errors);
    }
    return onSuccess();
  })
  .catch(function (error) {
    return onError(error);
  });

}

export { doPost }