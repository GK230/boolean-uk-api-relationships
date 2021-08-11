const { appointment, doctor } = require("../../utils/dbClient");

const createAppointment = async (req, res) => {
  const { doctorId, reason, date, practiceName } = req.body;

  const newAppointment = {
    reason,
    practiceName,
    date: new Date(date).toISOString(),
  };

  const app = await appointment.create({
    data: {
      ...newAppointment,
      doctor: { connect: { id: parseInt(doctorId) } },
    },
  });
  res.json({ data: app });
};

module.exports = {
  createAppointment,
};
