import { render, screen } from "@testing-library/react";
import Homepage from "../pages/Homepage/Homepage";


describe("Homepage should", ()=> {
    test("render Hello text", () => {
        render(<Homepage />)
        expect(screen.getByText("Hello from front page")).toBeInTheDocument();
    })
    test("renders homepage with username", () => {
        render(<Homepage user="Pavel" />)
        expect(screen.getByText("Hello Pavel")).toBeInTheDocument();
    })
})
