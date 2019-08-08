import { removeAuthToken, setAuthToken } from './authToken';
import Connection from './connection/connection';
import Country from './country/country';
import Draft from './draft/draft';
import Line from './line/line';
import Station from './station/station';
import Town from './town/town';
import User from './user/user';

export default {
  connection: Connection,
  country: Country,
  draft: Draft,
  line: Line,
  station: Station,
  town: Town,
  user: User,
  setAuthToken,
  removeAuthToken
}
