// import mongoose from 'mongoose';

// const MONGO_URI = 'URL';

// console.log("DEBUG - MONGO_URI =", MONGO_URI);

// if (!MONGO_URI) {
//   throw new Error('MONGO_URI is not defined');
// }

// let cached = (global as any).mongoose || { conn: null, promise: null };

// export async function connectToDatabase() {
//   if (cached.conn) return cached.conn;

//   if (!cached.promise) {
//     cached.promise = mongoose.connect(MONGO_URI).then((mongoose) => {
//       console.log("MongoDB connected!");
//       return mongoose;
//     });
//   }

//   cached.conn = await cached.promise;
//   return cached.conn;
// }

