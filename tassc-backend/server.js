const express = require("express");
const { sequelize } = require("./models");
const cors = require("cors");

const app = express();
const PORT = 5000;

const corsOptions = {
  origin: "http://localhost:4200",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
ns;
app.use(cors(corsOptions));

app.use(express.json());

// Import routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/tasks", require("./routes/tasks"));

sequelize.sync().then(() => {
  console.log("Database synced!");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
