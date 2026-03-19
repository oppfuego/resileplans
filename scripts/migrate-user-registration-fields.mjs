import mongoose from "mongoose";

const mongoUri = process.env.MONGODB_URI;

if (!mongoUri) {
    throw new Error("MONGODB_URI is required to run this migration.");
}

async function run() {
    await mongoose.connect(mongoUri);

    const users = mongoose.connection.collection("users");
    const result = await users.updateMany(
        {},
        [
            {
                $set: {
                    phoneNumber: { $ifNull: ["$phoneNumber", "$phone"] },
                    phone: { $ifNull: ["$phone", "$phoneNumber"] },
                    dateOfBirth: { $ifNull: ["$dateOfBirth", null] },
                    "address.postCode": { $ifNull: ["$address.postCode", "$address.zip"] },
                    "address.zip": { $ifNull: ["$address.zip", "$address.postCode"] },
                },
            },
        ]
    );

    console.log("User registration migration complete.", {
        matchedCount: result.matchedCount,
        modifiedCount: result.modifiedCount,
    });
}

run()
    .catch((error) => {
        console.error("User registration migration failed.", error);
        process.exitCode = 1;
    })
    .finally(async () => {
        await mongoose.disconnect();
    });
