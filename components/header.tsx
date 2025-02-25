import Link from "next/link";
import BrandLogo from "./logo";


export default function Header() {
    // const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        {
            title: "About",
            href: "/about"
        },
        {
            title: "Developers",
            href: "/developers"
        },
        {
            title: "Github",
            href: "https://github.com/muthaiyanmani/shareme"
        }
    ]

    return <header >
        <div className="container">
            <div className="flex justify-between items-center py-4">

                <BrandLogo />

                <div className="flex items-center gap-4">
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8 xl:gap-12">
                        {navLinks.map((link, index) => (
                            link.href.startsWith('https://') ?
                                <a key={index} href={link.href} target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                                    {link.title}
                                </a> :

                                <Link
                                    key={index}
                                    href={link.href}
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    {link.title}
                                </Link>
                        ))}
                    </nav>

                    {/* <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild className="md:hidden">
                            <Button variant="ghost" size="icon">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                            <SheetHeader>
                                <SheetTitle>DropIt</SheetTitle>
                            </SheetHeader>
                            <nav className="flex flex-col gap-4 mt-8">

                                {navLinks.map((link, index) => (
                                    link.href.startsWith('https://') ?
                                        <a key={index} href={link.href} target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                                            {link.title}
                                        </a> :
                                        <Link
                                            key={index}
                                            href={link.href}
                                            className="text-muted-foreground hover:text-foreground transition-colors"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.title}
                                        </Link>
                                ))}

                                <Button
                                    className="w-full mt-4"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Sign Up
                                </Button>
                            </nav>
                        </SheetContent>
                    </Sheet> */}
                </div>
            </div>
        </div>
    </header>
}