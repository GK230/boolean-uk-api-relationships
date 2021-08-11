const { PrismaClient } = require("@prisma/client");

const dbClient = new PrismaClient();

async function seed() {
  const strange = await dbClient.doctor.create({
    data: {
      firstName: "Dr",
      lastName: "Strange",
      speciality: "magic",
      appointments: {
        create: {
          practiceName: "GoodGuys Medical",
          reason: "Wonder Woman has a bad knee",
          date: "2020-03-19T14:21:00+02:00",
          time: "2020-03-19T14:21:00+02:00",
        },
        create: {
          practiceName: "Wayne Private Care",
          reason: "Batman is depressed",
          date: "2020-03-19T14:21:00+02:00",
          time: "2020-03-19T14:21:00+02:00",
        },
      },
    },
  });
  const mccoy = await dbClient.doctor.create({
    data: {
      firstName: "Dr",
      lastName: "McCoy",
      speciality: "humans",
      appointments: {
        create: {
          practiceName: "Starship Enterprise Medical",
          reason: "Mr Spock is broken",
          date: "2020-03-19T14:21:00+02:00",
          time: "2020-03-19T14:21:00+02:00",
        },
      },
    },
  });

  //   const wonder = await dbClient.appointment.upsert({
  //     where: {
  //       id: 1,
  //     },
  //     create: {
  //       practiceName: "GoodGuys Medical",
  //       date: "2020-03-19T14:21:00+02:00",
  //       time: "2020-03-19T14:21:00+02:00",
  //       reason: "Wonder Woman has a bad knee",
  //       doctor: 1,
  //     },
  //   });
  //   const spock = await dbClient.appointment.upsert({
  //     where: {
  //       id: 2,
  //     },
  //     create: {
  //       practiceName: "Starship Enterprise Medical",
  //       date: "2020-03-19T14:21:00+02:00",
  //       time: "2020-03-19T14:21:00+02:00",
  //       reason: "Mr Spock is broken",
  //       doctor: 2,
  //     },
  //   });
  //   const batman = await dbClient.appointment.upsert({
  //     where: {
  //       id: 3,
  //     },
  //     create: {
  //       practiceName: "GoodGuys Medical",
  //       date: "2020-03-19T14:21:00+02:00",
  //       time: "2020-03-19T14:21:00+02:00",
  //       reason: "Batman feels depressed",
  //       doctor: 1,
  //     },
  //   });
//   console.log({ strange, mccoy, wonder, spock, batman });
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await dbClient.$disconnect();
  });
