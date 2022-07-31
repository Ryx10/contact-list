import {Feedback, isLoadingFeedback} from '../helpers/Feedback'
import Button from './common/Button'
type Props = {
  loadMoreFunction: () => void
  feedback: Feedback
}

const LoadMoreButton = ({loadMoreFunction, feedback}: Props) => {
  return (
    <Button onClick={loadMoreFunction} disabled={isLoadingFeedback(feedback)}>
      {isLoadingFeedback(feedback) ? 'Loading' : 'Load more'}
    </Button>
  )
}

export default LoadMoreButton
