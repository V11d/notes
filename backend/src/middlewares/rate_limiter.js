import rate_limit from '../config/upstash.js'
import http_status from 'http-status'

const rate_limiter = async (req, res, next) => {
    try {
        const success = await rate_limit.limit('my-rate-limit')
        if (!success) {
            return res.status(http_status.TOO_MANY_REQUESTS).json({
                message: 'Too many requests, please try again later.'
            })
            next()
        }
    } catch (error) {
        console.error('Rate limiter error:', error)
        res.status(http_status.INTERNAL_SERVER_ERROR).json({ message: 'Internal server error' })

    }
}

export default rate_limiter