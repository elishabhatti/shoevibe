export const env = Object.freeze({
    PORT: process.env.PORT,
    DATABASE_URL: process.env.DATABASE_URL || "",
    CLIENT_ORIGIN: process.env.CLIENT_ORIGIN,
});

export const globalLimiter = Object.freeze({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: "⚠️ Too many requests from this IP, please try again later.",
    standardHeaders: true,
    legacyHeaders: false,
});
