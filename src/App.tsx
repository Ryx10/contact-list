import PersonInfo from './PersonInfo'
import {useContacts} from './data/useContacts'
import {useState} from 'react'
import {isErrorFeedback, isLoadingFeedback} from './helpers/Feedback'
import LoadMoreButton from './ui/LoadMoreButton'
import LoadingView from './ui/LoadingView'
import NavigationPanel from './ui/NavigationPanel'
import ErrorView from './ui/ErrorView'
import ErrorToast from './ui/ErrorToast'

function App() {
  const {data, feedback, fetchNextPage} = useContacts()
  const [selected] = useState([])

  if (!data && isLoadingFeedback(feedback)) {
    return <LoadingView />
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
      <ErrorToast show={isErrorFeedback(feedback)} retry={fetchNextPage} />
    </>
  )
}

export default App
