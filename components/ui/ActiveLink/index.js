import Link from "next/link"
import React from 'react'
import { useRouter}  from "next/router"


export default function ActiveLink ({children, activeLinkClass, ...props}) {
    const { pathname } = useRouter()
    let className = children.props.className || ''
    if (pathname === props.href) {
        className = `${className} ${ activeLinkClass ? activeLinkClass : 'text-indigo-600 font-semibold'}`
    }

    return (
        <Link {...props}>
            {
                React.cloneElement(children, {className})
                // Could just use 'children' here but by doing it this way you can pass additional props to it
            }
        </Link>
    )
}