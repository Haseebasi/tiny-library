import HeroImageSquare from "@/public/hero-image-square.png"

import Link from "next/link"

export default function AboutPage() {
    return (
        <main>
            <section className="container max-w-4xl px-4 py-8 mx-auto">
                <h1 className="mb-6 text-4xl font-bold text-center">
                    About Tiny Library
                </h1>

                <div className="grid items-center gap-8 mb-12 md:grid-cols-2">
                    <div className="relative h-[300px] w-full">
                        <img
                            src={HeroImageSquare.src}
                            alt="PrintForge Community - A group of makers collaborating on 3D printing projects"
                            className="absolute inset-0 w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    
                    <div className="flex flex-col items-center text-center md:items-start md:text-left">
                        <p
                            className="mb-4 text-sm text-gray-600 uppercase"
                            aria-hidden="true"
                        >
                            About Tiny Library
                        </p>
                        <h2 className="mb-4 text-2xl font-semibold font-montserrat-alternates">
                            Small shelf, big impact
                        </h2>
                        <p className="mb-6 text-gray-700">
                            Tiny Library started as a simple idea: make it easier for curious readers to actually find books they’ll love, not just scroll endless lists. Every title here is chosen with care, not algorithms.
                        </p>
                        <div className="flex gap-4">
                            <Link
                                href="/about/contacts"
                                className="px-6 py-3 text-black transition duration-100 bg-white border-2 border-black hover:bg-black hover:text-white"
                            >
                                Contact us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="border-gray-200" aria-hidden="true" />

            <section className="py-12" aria-labelledby="key-features">
                <div className="px-6 mx-auto max-w-7xl">
                    <h2 id="key-features" className="sr-only">
                        Key Features
                    </h2>
                    <div className="grid gap-6 md:gap-0 md:grid-cols-3">
                        <article className="p-6 bg-white">
                            <h3 className="mb-3 text-xl font-semibold font-montserrat-alternates">
                                Curated, not crowded
                            </h3>
                            <p className="text-gray-600">
                                Tiny Library keeps the catalogue intentionally small so every book feels like a recommendation.
                            </p>
                        </article>
                        <article className="p-6 bg-white border-gray-400 md:border-x">
                            <h3 className="mb-3 text-xl font-semibold font-montserrat-alternates">
                                Easy to browse
                            </h3>
                            <p className="text-gray-600">
                                Clear categories and simple descriptions make it quick to choose what you actually want to read next.
                            </p>
                        </article>
                        <article className="p-6 bg-white">
                            <h3 className="mb-3 text-xl font-semibold font-montserrat-alternates">
                                Readers first
                            </h3>
                            <p className="text-gray-600">
                                Every part of Tiny Library is designed to help you spend less time searching and more time reading.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            <hr className="border-gray-200" aria-hidden="true" />

            <section className="container max-w-3xl px-4 py-8 mx-auto">
                <div className="prose max-w-none">
                    <h2 className="mb-4 text-2xl font-semibold">Our ethos</h2>
                    <p className="mb-4 text-gray-700">
                        At Tiny Library, we believe a good book shouldn’t be hard to find. Our ethos is to create a small, carefully curated space where every title earns its place on the shelf and readers can trust that anything they pick up is worth their time.
                    </p>
                    <p className="text-gray-700">
                        Instead of overwhelming you with thousands of options, Tiny Library focuses on a modest collection that feels personal and approachable. We want readers to feel like they’ve stepped into a cosy, well‑loved library where someone has already done the hard work of sorting through the noise.
                    </p>
                </div>
            </section>
            
            
        </main>
    )
}