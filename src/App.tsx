import PersonInfo from './PersonInfo'
import {useContacts} from './data/useContacts'
import {useState} from 'react'
import {isErrorFeedback, isLoadingFeedback} from './helpers/Feedback'
import LoadMoreButton from './ui/LoadMoreButton'
import Loader from './ui/Loader'
import NavigationPanel from './ui/NavigationPanel'
import ErrorView from './ui/ErrorView'

function App() {
  const {data, feedback, fetchNextPage} = useContacts()
  const [selected] = useState([])

  if (!data && isLoadingFeedback(feedback)) {
    return <Loader />
  }

  if (!data && isErrorFeedback(feedback)) {
    return <ErrorView refetch={fetchNextPage} />
  }

  return (
    <>
      <div className="App">
        <div className="selected">Selected contacts: {selected.length}</div>
        <div className="list">
          {data &&
            data.map((personInfo) => (
              <PersonInfo key={personInfo.id} data={personInfo} />
            ))}
        </div>
      </div>
      <NavigationPanel>
        <LoadMoreButton loadMoreFunction={fetchNextPage} feedback={feedback} />
      </NavigationPanel>
    </>
  )
}

export default App
