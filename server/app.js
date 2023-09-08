const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const user_data = {};

app.post("/user_data", (req, res) => {
 const {
  user_id,
  college_email_id,
  college_roll_number,
  num_array,
  alpha_array,
 } = req.body;

 const highest_alpha = alpha_array.reduce((maxAlpha, currentAlpha) => {
  return currentAlpha > maxAlpha ? currentAlpha : maxAlpha;
 }, "");

 user_data.user_id = user_id;
 user_data.college_email_id = college_email_id;
 user_data.college_roll_number = college_roll_number;
 user_data.num_array = num_array;
 user_data.alpha_array = alpha_array;
 user_data.highest_alpha = highest_alpha;

 res.json({
  status: "Success",
  user_id,
  college_email_id,
  college_roll_number,
  num_array,
  alpha_array,
  highest_alpha,
 });
});

app.get("/operation_code", (req, res) => {
 res.json({ operation_code: "1" });
});

app.listen(port, () => {
 console.log(`Server is running on port ${port}`);
});
