export const GET_RANDOM_CONTACT_API = 'https://randomuser.me/api';
export const GET_MULTIPLE_10_CONTACTS_API = 'https://randomuser.me/api?result=10';
export const getContactsAPI = function (count) {
	return (GET_RANDOM_CONTACT_API + (count ?  "?results=" + count : ""));
}

export const getImageURL = function (url) {
	return (url+"").replace("thumb/", "");//.replace("thumb/", "med/) // .replace("thumb/", ")
}

