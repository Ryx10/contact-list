export enum FeedbackStatuses {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export type Feedback = {
  status: FeedbackStatuses
  message?: string
}

export const isLoadingFeedback = (feedback: Feedback) =>
  feedback.status === FeedbackStatuses.LOADING
export const isErrorFeedback = (feedback: Feedback) =>
  feedback.status === FeedbackStatuses.ERROR
