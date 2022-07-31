import {useContacts} from './data/useContacts'
import {isErrorFeedback, isLoadingFeedback} from './helpers/Feedback'
import LoadMoreButton from './ui/LoadMoreButton'
import LoadingView from './ui/LoadingView'
import NavigationPanel from './ui/NavigationPanel'
import ErrorView from './ui/ErrorView'
import ErrorToast from './ui/ErrorToast'
import ContactsView from './ui/ContactsView'

function App() {
  const {data, feedback, fetchNextPage} = useContacts()

  if (!data && isLoadingFeedback(feedback)) {
    return <LoadingView />
  }

  if (!data && isErrorFeedback(feedback)) {
    return <ErrorView refetch={fetchNextPage} />
  }

  return (
    <>
      <ContactsView contacts={data} />
      <NavigationPanel>
        <LoadMoreButton loadMoreFunction={fetchNextPage} feedback={feedback} />
      </NavigationPanel>
      <ErrorToast show={isErrorFeedback(feedback)} retry={fetchNextPage} />
    </>
  )
}

export default App
