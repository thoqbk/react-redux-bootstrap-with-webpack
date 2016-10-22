import 'whatwg-fetch';
import config from "../config/app.js";

export default {
  post: (relative_url, data) => {
    return fetch(config.apiServerAddress + relative_url, {
      method: "POST",
      credentials: 'include',
      body: JSON.stringify(data)
    })
    .then((response) => {
      return response.json();
    });
  },
  buildNewStateFx: (initialStateConfig) => {
    return (state) => {
      let retVal = {};
      for(let property in initialStateConfig) {
        let defaultValue = initialStateConfig[property];
        if(state == null) {
          retVal[property] = defaultValue;
        } else {
          retVal[property] = state[property];
        }
      }
      return retVal;
    }
  }
}
