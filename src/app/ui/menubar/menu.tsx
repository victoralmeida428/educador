import Link from "next/link";

interface MenuItem {
    label: string,
    href: string
}

export default function MenuBar(){
    const menuItems: MenuItem[] = [
        {label: "Home", href:"/"},
        {label: "About", href:"/#about"},
        {label: "Contact", href: "/#contact"}
    ]
    return (
        <nav className="bg-gray-800 h-10 flex align-middle items-center w-full">
            <ul className="flex justify-start flex-row ms-3">
                {menuItems.map((item) => (
                    <li key={item.href}>
                        <Link href={item.href} className="text-white me-3 hover:text-gray-400">
                        {item.label}
                        </Link>
                    </li>
                ))}

            </ul>
        </nav>
    );
}