const isTrainingValid = (training) => {
  if (!training) throw new Error("Missing training");
  if (
    !training.title ||
    !training.startDate ||
    !training.endDate ||
    !training.startTime ||
    !training.endTime ||
    !training.language ||
    !training.location ||
    !training.level ||
    !training.trainer
  )
    throw new Error("Missing required field");
};

const isStartAndEndDateValid = (startDate, endDate) => {
  const convertedStartDate = new Date(startDate);
  const convertedEndDate = new Date(endDate);
  const currentDate = new Date();

  if (!startDate > currentDate) throw new Error("Invalid start date");

  if (!endDate > currentDate) throw new Error("Invalid end date");

  if (convertedStartDate > convertedEndDate)
    throw new Error("Invalid start or end date");

  return;
};

const isStartAndEndTimeValid = (startTime, endTime) => {
  const regex = new RegExp(/^([01]\d|2[0-3]):?([0-5]\d)$/);

  if (!regex.test(startTime)) throw new Error("Invalid start time");

  if (!regex.test(endTime)) throw new Error("Invalid end time");

  if (!Number(startTime.substring(0, 2)) <= Number(endTime.substring(0, 2)))
    throw new Error("Invalid start or end time");

  if (
    Number(startTime.substring(0, 2)) === Number(endTime.substring(0, 2)) &&
    !Number(startTime.substring(3, 5)) >= Number(endTime.substring(3, 5))
  )
    throw new Error("Invalid start or end time");

  return;
};
export { isTrainingValid, isStartAndEndDateValid, isStartAndEndTimeValid };
