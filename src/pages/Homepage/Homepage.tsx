import { Http2ServerRequest } from "http2";
import { PropsWithChildren } from "react";

interface HomepageProp {
    user?: string
}

export default function Homepage(props?:HomepageProp) {
    const user = props?.user ? props.user : null
    if (user) {
        return (
            <h2>Hello {user}</h2>
        )
    }
    return (
        <h2>Hello from front page</h2>
    )    
}