const initialState = {
  venues: []
}

export default (state = initialState, action) => {

  switch (action.type) {
    
    case 'VENUES_RECEIVED':
      console.log('VENUES_RECEIVED: ' + JSON.stringify(action.venues))
      let updated = Object.assign({}, state)
      updated['venues'] = action.venues
      return updated

    default:
      return state
  }
}
