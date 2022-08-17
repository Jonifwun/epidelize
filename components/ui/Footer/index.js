
const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-1 rounded-md mb-1">
        <div className="container mx-auto px-6">
        <div className="mt-5 flex flex-col items-center">
            <div className="py-1">
            <p className="mb-6 text-white text-sm text-primary-2 font-bold">
                © {new Date().getFullYear()} Epidel
            </p>
            </div>
        </div>
        </div>
    </footer>
  )
}

export default Footer