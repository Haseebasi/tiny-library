export default function ContactPage() {
    return (
        <main className="container max-w-2xl px-4 py-12 mx-auto">
            <section className="space-y-6">
                <div>
                    <p className="text-sm font-medium tracking-wider text-gray-600 uppercase mb-2">
                        Ways to reach us
                    </p>
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                        Contact
                    </h1>
                </div>

                <ul className="list-disc pl-5 space-y-3 text-gray-700">
                    <li>
                        <span className="font-semibold text-gray-900">Book suggestions:</span> Tell us what we should add to the shelf.
                    </li>
                    <li>
                        <span className="font-semibold text-gray-900">Corrections:</span> Spotted an error? Let us know so we can fix it.
                    </li>
                    <li>
                        <span className="font-semibold text-gray-900">Careers:</span> Interested in joining Tiny Library? Send a short note and we’ll get back to you.
                    </li>
                </ul>

                <div className="space-y-3 pt-2 text-gray-700">
                    <p>
                        Email: <a href="mailto:hello@tinylibrary.example" className="underline hover:text-black">hello@tinylibrary.example</a>
                    </p>
                    <p className="text-gray-600">
                        We’re a small team, so we don’t list a phone number—email is best.
                    </p>
                </div>
            </section>
        </main>
    )
}