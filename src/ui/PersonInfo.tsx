import React from 'react'
import {Contact} from '../types'
import classNames from 'classnames'

import css from './PersonInfo.module.css'

type Props = {
  data: Contact
  onClick: (contact: Contact) => void
  selected?: boolean
}

const ConatctAvatar = ({fullName}: {fullName: string}) => {
  const initials = fullName
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()

  return (
    <div>
      <div className={css.avatar}>{initials}</div>
    </div>
  )
}

const PersonInfo = ({data, selected, onClick}: Props) => (
  <div
    onClick={() => onClick(data)}
    className={classNames(css.personInfo, selected && css.selected)}>
    <div className={css.nameAvatarContainer}>
      <ConatctAvatar fullName={data.firstNameLastName} />
      <div className={css.nameContainer}>
        <div className={css.firstNameLastName}>{data.firstNameLastName}</div>
        <div className={css.jobTitle}>{data.jobTitle.toUpperCase()}</div>
      </div>
    </div>
    <div className={css.emailAddress}>{data.emailAddress}</div>
  </div>
)

export default PersonInfo
