const initialState = {
    name: '',
    street: '',
    city: '',
    st: '',
    zip: Number(),
    url: '',
    mortgage: Number(),
    rent: Number()
    
}

const UPDATE_INFO = "UPDATE_INFO"
const UPDATE_URL =  "UPDATE_URL"
const UPDATE_MONEY = "UPDATE_MONEY"
const RESET_FORM = "RESET_FORM"

export default function reducer(state = initialState, action){
    switch(action.type){
     case UPDATE_INFO:
        return Object.assign({}, state, {name: action.payload.name, street: action.payload.street, city: action.payload.city, st: action.payload.st, zip: action.payload.zip})
     case UPDATE_URL:
        return Object.assign({}, state, {url:action.payload})
     case UPDATE_MONEY:
        return Object.assign({}, state, {mortgage: action.payload.mortgage, rent: action.payload.rent})
     case RESET_FORM:
        return Object.assign({}, state, {name: action.payload.name, street: action.payload.street, city: action.payload.city, st: action.payload.st, zip: action.payload.zip, url:action.payload.url,mortgage: action.payload.mortgage, rent: action.payload.rent})
        default: return state
    }
  
}

export function updateInfo(name, street, city, st, zip){

    
    return {
        type: UPDATE_INFO,
        payload: {
            name: name,
            street: street,
            city: city,
            st: st,
            zip: zip
        }
    }
   
}

export function updateUrl(url){
    return {
        type: UPDATE_URL,
        payload: url
    }
}

export function updateMoney(mortgage, rent){
    console.log("function fired")
    return {
        type: UPDATE_MONEY,
        payload: {
            mortgage: mortgage,
            rent: rent
        }
    }
}

export function resetForm(){
    console.log("function fired")
    return {
        type: RESET_FORM,
        payload: {
            name: '',
            street: '',
            city: '',
            st: '',
            zip: Number(),
            url: '',
            mortgage: '',
            rent:''
        }
    }
}