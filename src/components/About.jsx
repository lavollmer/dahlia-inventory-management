import Header from "./Header"
import Footer from "./Footer"

const About = () => {
    return (
        <>
            <Header />
            <div className="about">
                <div>
                    <h1>About</h1>
                    <p>Welcome! I'm Laura, a home gardener and dahlia enthusiast in my third year of growing these beautiful, bold blooms. I'm also the creator of this Dahlia Inventory Management app, a tool designed specifically for fellow gardeners who love growing and organizing their dahlia collections.</p>
                </div>
                <div>
                    <h2>From Backyard Blooms to a Better Way to Organize Dahlias</h2>
                    <p>My journey with dahlias began just a few seasons ago, when I planted a handful of tubers in a small garden bed. It didn’t take long for me to fall in love with the incredible variety of colors, shapes, and personalities that dahlias bring to the garden. But as my collection of dahlia varieties grew, I quickly realized how difficult it was to manage all the details—names, bloom colors, tuber storage, swap lists, and planting locations. I searched for a simple garden tracking app or dahlia inventory tool, but none were tailored to the unique needs of dahlia growers.</p>
                </div>
                <div className="built-by-garden">
                    <h2>Built by a Gardener, for Gardeners</h2>
                    <p>That’s why I created this Dahlia Inventory Management app—a tool that helps gardeners:</p>
                    <ul>
                        <li>Track dahlia varieties and bloom details</li>

                        <li>Organize tuber storage and planting locations</li>

                        <li>Plan garden layouts and wishlists</li>

                        <li>Keep a digital record from season to season</li>
                    </ul>
                    <p>Whether you’re a beginner planting your first dahlia or an experienced grower managing dozens (or hundreds!) of varieties, this app was made to simplify and enhance your gardening experience.</p>
                </div>
                <div>
                    <h2>Join Me on the Dahlia Journey</h2>
                    <p>This project is truly a labor of love, built from hands-on experience and a desire to support the amazing community of flower growers. I hope this tool helps you grow smarter, stay organized, and fall even more in love with dahlias.</p>
                </div>
                <div>
                    <p>Thanks for stopping by, and happy planting!</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About