// others
import { EDatabaseColumns } from '../constants';

// services
import databaseErrorHandler from './databaseErrorHandler';
import databaseSuccessHandler from './databaseSuccessHandler';

const databaseHandler = (
  firebase: any,
  actions: (data: any) => void,
  ref: EDatabaseColumns = EDatabaseColumns.ALL
) => {
  firebase
    .database()
    .ref(ref)
    .on(
      'value',
      (response: void) => databaseSuccessHandler(response, actions),
      databaseErrorHandler
    );
};

export default databaseHandler;
