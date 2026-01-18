import Header from "../components/Header";
import Footer from "../components/Footer";

export const Page = () => {
    return (
        <div className="text-black min-h-screen">
            <Header />
            <div className="mx-auto max-w-7xl my-10 text-2xl min-h-screen">
                <p className="text-4xl font-extrabold text-center">Our TEDx Gallery</p>
                <p className="text-red-700 text-center text-lg"> Explore our collection of memorable moments captured at TEDx CIS Dubai events.</p>

                <p className="text-center text-7xl font-extrabold  mt-40 min-h-screen">
                    Coming Soon...
                </p>
            </div>
            <div >
                <Footer />
            </div>
        </div>
    )
}

export default Page;