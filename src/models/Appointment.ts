import { v4 as uuidv4 } from 'uuid';
class Appointment {
  id: string;

  provider: string;

  date: Date;

  constructor(provider: string, date: Date) {
    this.provider = provider;
    this.date = date;
    this.id = uuidv4();
  }
}

export default Appointment;
