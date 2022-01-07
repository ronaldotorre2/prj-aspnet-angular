import { PersonContact } from './personEnum';

export class Contact {
  id: number;
  type: PersonContact;
  description: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}
