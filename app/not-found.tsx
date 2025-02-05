import { AnimatedBackground } from '@/components/animated-background'
import BrandLogo from '@/components/logo'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFoundPage() {
    return (
        <div>
            <AnimatedBackground type={"space"}>
                <div className='flex flex-col items-center text-center justify-center h-screen'>

                     <BrandLogo/>
                    <br />
                    <div className='space-y-2'>
                        <h1 className='text-2xl md:text-6xl'>404</h1>
                        <h2 >Not Found</h2>
                    </div>
                    <br />
                    <p >Could not find requested resource :(</p>
                    <br />
                    <Button>
                        <Link href="/">Back to Home</Link>
                    </Button>
                </div>
            </AnimatedBackground>
        </div>
    )
}