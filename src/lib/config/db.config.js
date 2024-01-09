import mongoose from 'mongoose';
import chalk from 'chalk';

const mongoUri = 'mongodb://127.0.0.1:27017/blog_api';

export const connectToDatabase = async () =>
{
    try
    {
        await mongoose.connect( mongoUri );

        mongoose.connection.on( 'open', () =>
        {
            console.info(chalk.bgBlueBright(`📢 Database connection has been established!`));
        })
        
        mongoose.connection.on( 'error', () =>
        {
            console.error(chalk.redBright('☣️ Database connection stages'))
        })
    } catch (e) {
        process.exit(1)
    }
}