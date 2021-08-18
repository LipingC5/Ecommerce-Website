
const url = ' https://api.printful.com/store/Authorization:33ifdfg2-uzh3-vrc2:egvl-nue7rka5wpjb';

fetch(url, {method: 'GET'})
       .then((response) => {
          if(response.ok){
              console.log('success');
          }
          else{
              console.log('Not successful');
          }
      })
      .then()
      .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"));