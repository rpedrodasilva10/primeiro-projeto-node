import { Router } from 'express';
import { startOfHour, parseISO, isEqual } from 'date-fns';
import Appointment from '../models/Appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

const appointmentsRouter = Router();
const appointments: Appointment[] = [];
const appointmentsRepository = new AppointmentsRepository();
/**
 * Create a new appointment
 */
appointmentsRouter.post('/', (request, response) => {
  const { date, provider } = request.body;

  const parsedDate = startOfHour(parseISO(date));

  if (appointmentsRepository.alreadyBookedHour(parsedDate)) {
    return response
      .status(400)
      .json({ message: 'Date already busy!', data: date });
  }

  const newAppointment = appointmentsRepository.create(provider, parsedDate);

  appointments.push(newAppointment);

  return response
    .status(201)
    .json({ message: 'Successfully created', data: newAppointment });
});

/**
 * Get all appointments
 */
appointmentsRouter.get('/', (request, response) =>
  response.json({ data: appointments })
);
export default appointmentsRouter;
