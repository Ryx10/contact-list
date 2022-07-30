import mockData from './mockData.json'

import {renderHook} from '@testing-library/react-hooks'
import {useContacts} from './useContacts'
import {FeedbackStatuses} from '../helpers/Feedback'

describe('useContacts', () => {
  it('return loading initially', () => {
    const {result} = renderHook(() => useContacts())
    expect(result.current).toStrictEqual({
      feedback: {status: FeedbackStatuses.LOADING},
      data: [],
    })
  })

  it('return first batch of data after "fetching" is done', async () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0)
    const {result, waitForNextUpdate} = renderHook(() => useContacts())
    await waitForNextUpdate()

    expect(result.current).toStrictEqual({
      feedback: {status: FeedbackStatuses.SUCCESS},
      data: mockData.slice(10, 20),
    })
  })

  it('return error if happens', async () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(1)
    const {result, waitForNextUpdate} = renderHook(() => useContacts())
    await waitForNextUpdate()

    expect(result.current).toStrictEqual({
      feedback: {
        status: FeedbackStatuses.ERROR,
        message: 'Something went wrong',
      },
      data: [],
    })
  })
})
