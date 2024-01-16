import { config } from "dotenv";
config( {
    path: './.env.local'
});

const appConfig = {
    server: {
        port: Number( process.env.PORT ),
        environment: process.env.NODE_ENV
    },
    provider: {
        mongodburl: process.env.MONGODB_URI,
        mail: {
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            auth: {
                username: process.env.MAIL_USERNAME,
                password: process.env.MAIL_PASSWORD
            }
        },
        cache: {
            redis: {},
            memcache: {}
        },
        jwt: {
            secret: process.env.JWT_SECRET,
            expiresIn: process.env.JWT_EXPIRY
        }
    }
};

export default appConfig;