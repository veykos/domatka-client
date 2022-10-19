import {render, screen} from "@testing-library/react"
import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from "../pages/Navbar/Navbar"

describe('Navbar should', () => { 
    test("display the logo", ()=> {
        render(
        <Router>
        <Navbar />
        </Router>
        )
        expect(screen.getByText("Logo Placeholder")).toBeInTheDocument();
    })
    test("displays properly when no user prop", () => {
        render(
            <Router>
            <Navbar />
            </Router>
        )
        expect(screen.getByText("Login")).toBeInTheDocument();
        expect(screen.getByText("Signup")).toBeInTheDocument();
    })
    test("displays properly when has a user prop", () => {
        render(
            <Router>
                <Navbar user="Pavel"/>
            </Router>
        )
        expect(screen.getByText("Dashboard")).toBeInTheDocument();
        expect(screen.getByText("Logout")).toBeInTheDocument();
    })
 })