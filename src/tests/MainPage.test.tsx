import {fireEvent, render,screen, } from '@testing-library/react'
import MainPage from '../pages/MainPage/MainPage'

describe('Main page should', () => {
    test('Render a form',() => {
        render(<MainPage />)
        expect(screen.getByRole('form')).toBeInTheDocument();
    })
    test('Render the counter', () => {
        render(<MainPage />)
        expect(screen.getByText("0")).toBeInTheDocument();
    })
    test('Renders properly the timer with decimal places', () => {
        render(<MainPage />)
        const worktimeInput = screen.getByLabelText('worktime-input')
        const mainCounter = screen.getByLabelText('main-counter')
        fireEvent.change(worktimeInput, {target: {value: 23}})
        expect(mainCounter.innerHTML).toBe('23:00')
    })
    // test('Changing the input also changes the counter', () => {
    //     render(<MainPage />)
    //     const worktimeInput = screen.getByLabelText('worktime-input')
    //     const mainCounter = screen.getByLabelText('main-counter')
    //     fireEvent.change(worktimeInput, {target: {value: 23}})
    //     expect(mainCounter.innerHTML).toBe('23')
    // })
})