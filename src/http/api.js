import { removeAuthToken, setAuthToken } from './authToken';
import Country from './country/country';
import Generation from './generation/generation';
import Line from './line/line';
import Station from './station/station';
import Town from './town/town';
import User from './user/user';

export default {
  country: Country,
  generation: Generation,
  line: Line,
  town: Town,
  station: Station,
  user: User,
  setAuthToken,
  removeAuthToken
}
