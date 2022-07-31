type Props = {
  selectedCount: number
}

const ContactsHeader = ({selectedCount}: Props) => (
  <div className="selected">Selected contacts: {selectedCount}</div>
)

export default ContactsHeader
