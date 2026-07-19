import mongoose from "mongoose";

interface MongooseCache {
  connection: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  var mongooseCache: MongooseCache | undefined;
}

const databaseUrl: string = (() => {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error(
      "Please define the DATABASE_URL environment variable inside .env"
    );
  }
  return url;
})();

const cached: MongooseCache =
  global.mongooseCache || (global.mongooseCache = { connection: null, promise: null });

async function connectMongo() {

  if (cached.connection) {
    return cached.connection;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(databaseUrl, opts).then((mongoose) => {
      return mongoose;
    });
  }

  cached.connection = await cached.promise;

  return cached.connection;

}

export default connectMongo;
