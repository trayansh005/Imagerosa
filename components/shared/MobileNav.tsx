"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "@/constants";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <header className="header">
            <Link href="/" className="flex items-center gap-2 md:py-2">
                <Image src="/logo.png" alt="logo" width={128} height={28} />
            </Link>
            <nav className="flex gap-2">
                <SignedIn>
                    <UserButton afterSignOutUrl="/" />
                    <Sheet>
                        <SheetTrigger>
                            <Image
                                src="/assets/icons/menu.svg"
                                alt="menu"
                                width={32}
                                height={32}
                                className="cursor-pointer"
                            />
                        </SheetTrigger>
                        <SheetContent className="sheet-content sm:w-64">
                            <>
                                <Image src="/logo.png" alt="logo" width={152} height={23} />
                                <ul className="header-nav_elements">
                                    {navLinks.map((link) => {
                                        const isActive = link.route == pathname;

                                        return (
                                            <li
                                                key={link.route}
                                                className={`${
                                                    isActive && "gradient-text"
                                                } p-18 flex whitespace-nowrap text-dark-700`}
                                            >
                                                <Link
                                                    className="sidebar-link cursor-pointer"
                                                    href={link.route}
                                                >
                                                    <Image
                                                        src={link.icon}
                                                        height={28}
                                                        width={28}
                                                        alt="logo"
                                                    />
                                                    {link.label}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                    <li className="flex-center gap-2 cursor-pointer p-4">
                                        <UserButton afterSignOutUrl="/" showName />
                                    </li>
                                </ul>
                            </>
                        </SheetContent>
                    </Sheet>
                </SignedIn>
            </nav>
        </header>
    );
};

export default MobileNav;
