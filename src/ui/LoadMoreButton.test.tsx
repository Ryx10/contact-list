import {render, fireEvent, screen} from '@testing-library/react'
import LoadMoreButton from './LoadMoreButton'
import {FeedbackStatuses} from '../helpers/Feedback'

describe('LoadMoreButton', () => {
  it('fires callback when click', () => {
    const loadMoreFunction = jest.fn()
    const feedback = {status: FeedbackStatuses.SUCCESS}
    render(
      <LoadMoreButton
        feedback={feedback}
        loadMoreFunction={loadMoreFunction}
      />,
    )

    fireEvent.click(screen.getByText('Load more'))
    expect(loadMoreFunction).toHaveBeenCalledTimes(1)
  })

  it('is disabled when receiving loading feedback', () => {
    const loadMoreFunction = jest.fn()
    const feedback = {status: FeedbackStatuses.LOADING}
    render(
      <LoadMoreButton
        feedback={feedback}
        loadMoreFunction={loadMoreFunction}
      />,
    )

    fireEvent.click(screen.getByText('Loading'))

    expect(loadMoreFunction).not.toHaveBeenCalled()
    expect(screen.getByText('Loading').closest('button')).toBeDisabled()
  })
})
