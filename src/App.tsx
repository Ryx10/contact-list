import PersonInfo from './PersonInfo'
import {useContacts} from './data/useContacts'
import {useState} from 'react'
import {isErrorFeedback, isLoadingFeedback} from './helpers/Feedback'

function App() {
  const {data, feedback} = useContacts()
  const [selected] = useState([])

  if (isLoadingFeedback(feedback)) {
    return <>Loading</>
  }

  if (isErrorFeedback(feedback)) {
    return <pre>{feedback.message}</pre>
  }

  return (
    <div className="App">
      <div className="selected">Selected contacts: {selected.length}</div>
      <div className="list">
        {data.map((personInfo) => (
          <PersonInfo key={personInfo.id} data={personInfo} />
        ))}
      </div>
    </div>
  )
}

export default App
