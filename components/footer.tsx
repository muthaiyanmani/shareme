

export default function Footer() {
    return <footer className="justify-center p-2 gap-1 flex text-sm text-white mt-4">
        <p>built with love by</p> <a target="_blank" className="font-bold" href={`https://muthaiyan.pro?ref=${window.location.href}`}>muthaiyanmani</a>
    </footer>
}