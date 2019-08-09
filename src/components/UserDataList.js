import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { UserDataCard } from './UserDataCard'

const UserDataList = ({ users }) => {
  return (
    <Fragment>
      {console.log('UserList: ', users)}
      {users.map(user => (
        <UserDataCard key={user.id} {...user} />
      ))}
    </Fragment>
  )
}

UserDataList.propTypes = {
  users: PropTypes.array,
}

UserDataList.defaultProps = {
  users: [],
}

export { UserDataList }
