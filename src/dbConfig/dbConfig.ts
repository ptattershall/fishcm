import mongoose from "mongoose";

const connectString = process.env.MONGO_URI!+"FISHDB?retryWrites=true&w=majority";

export async function connect() {
    try {
        await mongoose.connect(connectString);
        const connection = mongoose.connection;
        connection.once("connected", () => {
            console.log(">>> DB is connected");
        })

        connection.on("error", (err) => {
            console.log(err);
            process.exit(0);
        })

    } catch (error) {
        console.log("Something went wrong!");
        console.log(error);
    }
}