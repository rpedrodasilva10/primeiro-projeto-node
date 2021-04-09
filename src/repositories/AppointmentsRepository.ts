import { isEqual } from 'date-fns';
import Appointment from '../models/Appointment';

class AppointmentsRepository {
  private appointments: Appointment[];
  constructor() {
    this.appointments = [];
  }

  public create(provider: string, date: Date): Appointment {
    const newAppointment = new Appointment(provider, date);
    this.appointments.push(newAppointment);

    return newAppointment;
  }

  public alreadyBookedHour(parsedDate: Date): boolean {
    const alreadyBusyOnDate = this.appointments.find((appointment) =>
      isEqual(appointment.date, parsedDate)
    );

    return alreadyBusyOnDate ? true : false;
  }
}

export default AppointmentsRepository;
