import { ZapIcon } from "lucide-react"

const RateLimitUI = () => {
    return (
        <div className="max-w-6xl px-4 py-8 mx-auto">
            <div className="bg-primary/10 border border-primary/30 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row items-center p-6">
                    <div className="flex-shrink-0 bg-primary/20 p-4 rounded-full mb-4 md:mb-0 md:mr-6">
                        <ZapIcon className="size-10 text-primary" />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h3 className="text-xl font-bold mb-2">Rate limit reached</h3>
                        <p className="text-base-content mb-1">
                            You've made a lot of requests in a short amount of time. Please wait a moment.
                        </p>
                        <p className="text-sm text-base-content/70">
                            Try again in a few minutes for best experience.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RateLimitUI