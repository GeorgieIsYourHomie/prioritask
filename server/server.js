const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

const sessionMiddleware = require("./modules/session-middleware");
const passport = require("./strategies/user.strategy");

// Route includes
const userRouter = require("./routes/user.router"); // user router
const checklistsRouter = require("./routes/checklists.router"); // checklists router
const prioritiesRouter = require("./routes/priorities.router"); // priorities router
const tasksRouter = require("./routes/tasks.router"); // tasks router

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use("/api/user", userRouter); // user route
app.use("/checklists", checklistsRouter); // checklists route
app.use("/priorities", prioritiesRouter); // priorities route
app.use("/tasks", tasksRouter); // tasks route

// Serve static files
app.use(express.static("build"));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
