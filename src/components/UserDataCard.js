import React from 'react'
import PropTypes from 'prop-types'

const UserDataCard = ({ url }) => <div>{url}</div>

UserDataCard.propTypes = {
  url: PropTypes.string,
}

export { UserDataCard }
