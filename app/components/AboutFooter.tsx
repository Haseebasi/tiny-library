import TLLogo from "@/public/tinylibrary-logo.png"
export default function AboutFooter(){
    return(<section className="py-8">
                <div className="flex justify-center">
                    <img 
                        src={TLLogo.src} 
                        alt="TinyLibrary logo" 
                        className="h-50 w-auto object-contain"
                    />
                </div>
            </section>)
}