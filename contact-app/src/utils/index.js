const dummy = {
			"gender": "male",
            "name": {
                "title": "mr",
                "first": "philip",
                "last": "pedersen"
            },
            "location": {
                "street": "3547 agervej",
                "city": "gl. rye",
                "state": "nordjylland",
                "postcode": 87050
            },
            "email": "philip.pedersen@example.com",
            "login": {
                "username": "organictiger994",
                "password": "andrews",
                "salt": "mwdoNFyq",
                "md5": "1ae8795083ac5a8e2f320196e28eb02f",
                "sha1": "35aec58169905679482d5a004e53700d2f5d9e5a",
                "sha256": "b07119f64774c3d60d75b1ad7772e474db40908334cf3e2549f75d4c477057b5"
            },
            "dob": "1960-11-17 01:51:11",
            "registered": "2012-10-13 10:08:02",
            "phone": "38350078",
            "cell": "39455549",
            "id": {
                "name": "CPR",
                "value": "977228-7892"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/12.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/12.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/12.jpg"
            },
            "nat": "DK" };


export const parseContactsResponse = function(response=dummy){
    if(!(response)){
      return [];
    } else if(!Array.isArray([response])){
      response = [response];
    }    
    var data = response.map((contact)=>{
      return {
           name: contact.name.title + " " + contact.name.first + " " + contact.name.last, 
           phone: contact.phone,
           registered: contact.registered,
           dob: contact.dob,
           gender: contact.gender,
           cell: contact.cell,
           email: contact.email,
           address: contact.location.street + ", " + contact.location.city + ", " + contact.location.state + ", "+ contact.location.postcode,
           image: contact.picture.thumbnail, //.replace("thumb/", "med/) // .replace("thumb/", ") 
           "login-username": contact.login.username,
           "login-password": contact.login.password,
           "id-name": contact.id.name,
           "id-value": contact.id.value
           //Todo 

      }
    })
    return data;
  }
  export const capitalizeFirstLetter = function(string="") {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  export const toTitleCase = function(str="") {
    return str.replace(/\w\S*/g, function(txt){return capitalizeFirstLetter(txt);});
  }
  /*
  String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}*/