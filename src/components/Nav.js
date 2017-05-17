import React, { Component } from 'react'
import superagent from 'superagent'
import { CLIENT_ID, CLIENT_SECRET, FOUR_SQUARE_URL } from '../fsTokens'
import { connect } from 'react-redux'

class Nav extends Component {
  constructor() {
    super()
    this.state = {
      zipCode: ''
    }
  } 

  updateZipCode(event) {
    this.setState({
      zipCode: event.target.value
    })
  }

  searchVenues(event) {
    event.preventDefault()
    
    console.log(this.state.zipCode)

    const params = {
      v: '20170101',
      m: 'foursquare',
      near: this.state.zipCode,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET
    }

    // returns venues from the Four Square API
    superagent
    .get(FOUR_SQUARE_URL)
    .query(params)
    .set('Accept', 'application/json')
    .end((err, res) => {
      //console.log('RESPONSE: ' + JSON.stringify(res))
      const venues = res.body.response.venues || []
      this.props.venuesReceived(venues)
    })
  }
  
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <form className="navbar-form navbar-left" role="search">
              <div className="form-group">
                <input type="text"  
                  placeholder="Zip Code"
                  onChange={this.updateZipCode.bind(this)}
                />
              </div>
              <button type="submit" onClick={this.searchVenues.bind(this)}>
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>  
    )
  }
}

const stateToProps = (state) => {
  return {
    venues: state.venuesReducer.venues
  }
}

const dispatchToProps = (dispatch) => {
  return {
    venuesReceived: (venues) => dispatch({type: 'VENUES_RECEIVED', venues: venues })
      //actions.venuesReceived(venues))
  }
}

export default connect(stateToProps, dispatchToProps)(Nav)
