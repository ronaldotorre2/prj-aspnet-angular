import { Address } from './address';
import { Contact } from './contact';
import { PersonGender, PersonStateCivil, PersonType } from './personEnum';

export class Person {
  id: number;
  type: PersonType;
  name: string;
  socialName: string;
  gender: PersonGender;
  birthDate: Date;
  document1: string;
  document2: string;
  document3: string;
  hometownState: number;
  hometownCity: string;
  image: string;
  stateCivi: PersonStateCivil;
  spouseName: string;
  professional: number;
  motherName: string;
  fatherName: string;
  addresses: Address;
  contacts: Array<Contact>;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}
