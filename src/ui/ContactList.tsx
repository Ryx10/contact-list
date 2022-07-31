import type {Contact} from '../types'
import PersonInfo from './PersonInfo'
import {FixedSizeList as List} from 'react-window'
import Autosizer from 'react-virtualized-auto-sizer'

import css from './ContactList.module.css'

type Props = {
  selectedContacts: Array<Contact>
  notSelectedContacts: Array<Contact>
  selectContact: (contact: Contact) => void
  deselectContact: (contact: Contact) => void
}

const ContactList = ({
  selectedContacts,
  notSelectedContacts,
  selectContact,
  deselectContact,
}: Props) => {
  const items = [
    ...selectedContacts.map((contact) => (
      <PersonInfo
        key={contact.id}
        data={contact}
        onClick={deselectContact}
        selected
      />
    )),
    ...notSelectedContacts.map((contact) => (
      <PersonInfo key={contact.id} data={contact} onClick={selectContact} />
    )),
  ]

  return (
    <div className={css.list}>
      <Autosizer>
        {({height, width}: {height: number; width: number}) => (
          <List
            height={height}
            itemCount={notSelectedContacts.length}
            itemSize={175}
            width={width}>
            {({index, style}: {index: number; style: object}) => (
              <div style={style}>{items[index]}</div>
            )}
          </List>
        )}
      </Autosizer>

      {/*{selectedContacts.map((personInfo) => (*/}
      {/*  <PersonInfo*/}
      {/*    key={personInfo.id}*/}
      {/*    data={personInfo}*/}
      {/*    onClick={deselectContact}*/}
      {/*    selected*/}
      {/*  />*/}
      {/*))}*/}
      {/*{notSelectedContacts.map((personInfo) => (*/}
      {/*  <PersonInfo*/}
      {/*    key={personInfo.id}*/}
      {/*    data={personInfo}*/}
      {/*    onClick={selectContact}*/}
      {/*  />*/}
      {/*))}*/}
    </div>
  )
}

export default ContactList
