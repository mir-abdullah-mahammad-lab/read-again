'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navlink = ({href, children, className}) => {
    const pathname = usePathname()
    // console.log(pathname)
    const isActive = href === pathname
    return (
        <Link href={href} className={`${isActive? "bg-green-100":""} ${className}`}>{children}</Link>
    );
};

export default Navlink;