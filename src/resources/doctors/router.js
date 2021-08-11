const router = require("express").Router();

const { createAppointment } = require("./controller");

router.post(("/", createAppointment));

module.exports = router;
