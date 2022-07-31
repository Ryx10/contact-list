import {render, fireEvent, screen} from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
  it('renders', () => {
    render(<Button onClick={() => {}}>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('fires callback when click', () => {
    const clickMockFn = jest.fn()
    render(<Button onClick={clickMockFn}>Click me</Button>)

    fireEvent.click(screen.getByText('Click me'))
    expect(clickMockFn).toHaveBeenCalledTimes(1)
  })

  it('is disabled when receiving disabled prop and callback is not fired', () => {
    const clickMockFn = jest.fn()
    render(
      <Button onClick={clickMockFn} disabled>
        Click me
      </Button>,
    )

    fireEvent.click(screen.getByText('Click me'))

    expect(clickMockFn).not.toHaveBeenCalled()
    expect(screen.getByText('Click me').closest('button')).toBeDisabled()
  })
})
