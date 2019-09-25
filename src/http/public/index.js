import { removeAuthToken, setAuthToken } from './authToken';
import Connection from './connection/connection';
import Draft from './draft/draft';
import Station from './station/station';
import Town from './town/town';
import User from './user/user';

export default {
  connection: Connection,
  station: Station,
  town: Town,
  draft: Draft,
  user: User,
  setAuthToken,
  removeAuthToken
};
