import React, { Component } from 'react'
import { connect } from 'react-redux'

class Venues extends Component {
  
  render() {
    const venues = this.props.venues

    return (
      <div>
        <ol>
          { venues.map((venue) => {
              return <li key={venue.id}>{venue.name}</li>
            })
          }
        </ol>
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    venues: state.venuesReducer.venues
  }
}

export default connect(stateToProps)(Venues)
