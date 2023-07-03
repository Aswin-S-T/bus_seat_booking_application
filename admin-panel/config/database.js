// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'mongoose',
//       settings: {
//         uri: env('DATABASE_URI'), // MongoDB Atlas connection URL
//       },
//       options: {
//         ssl: true, // Set this to true if your MongoDB Atlas cluster requires SSL
//       },
//     },
//   },
// });


module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose", // Use the "mongoose" connector for MongoDB
      settings: {
        client: "mongo",
        host: env("DATABASE_HOST", "127.0.0.1"), // MongoDB host address
        srv: env.bool("DATABASE_SRV", false), // Set this to true if using SRV connection string (MongoDB Atlas)
        port: env.int("DATABASE_PORT", 27017), // MongoDB port
        database: env("DATABASE_NAME", "strapi-bus-booking-admin-panel"), // Name of the MongoDB database you want to use with Strapi
        username: env("DATABASE_USERNAME", ""), // MongoDB username (if applicable)
        password: env("DATABASE_PASSWORD", ""), // MongoDB password (if applicable)
      },
      options: {
        authenticationDatabase: env("AUTHENTICATION_DATABASE", null), // MongoDB authentication database (if applicable)
        ssl: env.bool("DATABASE_SSL", false), // Set this to true if you're using SSL
      },
    },
  },
});

// module.exports = ({ env }) => ({
//   defaultConnection: "default",
//   connections: {
//     default: {
//       connector: "mongoose",
//       settings: {
//         client: "mongo",
//         uri: env(
//           "mongodb+srv://aswins:WLG4pjHMuyceMJjF@cluster0.sieuzrd.mongodb.net/?retryWrites=true&w=majority"
//         ), // MongoDB Atlas connection URL
//       },
//       options: {
//         ssl: true, // Set this to true if your MongoDB Atlas cluster requires SSL
//       },
//     },
//   },
// });

