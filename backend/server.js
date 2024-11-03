// const express = require("express");
// const app  = express();
// const connectDatabase = require('./config/dbConfig');
// app.use(express.json());
// require("dotenv").config({ path: './config/.env' });

// const cors = require('cors');


// const allowedOrigins = [
//   "https://bookmydoc-six.vercel.app/",
//     "http://localhost:3000",
//   ];
//   app.use(
//     cors({
//       origin: allowedOrigins,
//       credentials: true,
//     })
//   );

// //connecting to database
// connectDatabase();


// const userRouter = require('./routes/userRoutes');
// const adminRouter = require('./routes/adminRoutes');
// const doctorRouter = require('./routes/doctorRoutes');

// app.use("/api/user", userRouter);
// app.use("/api/admin", adminRouter);
// app.use("/api/doctor", doctorRouter);


// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//     console.log("Server is running on Port:", PORT);
// })


const express = require("express");
const app = express();
const connectDatabase = require('./config/dbConfig');
const cors = require('cors');
require("dotenv").config({ path: './config/.env' });

app.use(express.json());

// CORS configuration
const allowedOrigins = [
  "https://bookmydoc-six.vercel.app",
  "http://localhost:3000",
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

// Connect to the database
connectDatabase();

// Routes
const userRouter = require('./routes/userRoutes');
const adminRouter = require('./routes/adminRoutes');
const doctorRouter = require('./routes/doctorRoutes');

app.use("/api/user", userRouter);
app.use("/api/admin", adminRouter);
app.use("/api/doctor", doctorRouter);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is running on Port:", PORT);
});
