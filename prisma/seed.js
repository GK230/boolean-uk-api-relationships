const { PrismaClient } = require("@prisma/client");

const dbClient = new PrismaClient();

async function seed() {
  const strange = await dbClient.doctor.create({
    data: {
      firstName: "Dr",
      lastName: "Strange",
      speciality: "magic",
      appointments: {
        create: [
          {
            practiceName: "GoodGuys Medical",
            reason: "Wonder Woman has a bad knee",
            date: "2020-03-19T14:21:00+02:00",
          },
          {
            practiceName: "GoodGuys Medical",
            reason: "Batman is depressed",
            date: "2020-05-20T14:21:00+02:00",
          },
          {
            practiceName: "GoodGuys Medical",
            reason: "Wonder Woman has a twisted ankle",
            date: "2020-08-19T14:21:00+02:00",
          },
        ],
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
          date: "2020-04-20T14:21:00+02:00",
        },
      },
    },
  });
  //   const batman = await dbClient.patient.create({
  //       data: {
  //           firstName: "Bat",
  //           lastName: "Man",
  //           DOB: "1973-04-20T14:21:00+02:00",
  //           appointments:

  //       }
  //   })
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await dbClient.$disconnect();
  });
