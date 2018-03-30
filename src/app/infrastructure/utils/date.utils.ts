import * as moment from 'moment';

import { ObjectUtils } from './object.utils';

export class DateUtils {
  private static readonly DefaultDateTimeFormat = 'DD.MM.YYYY HH:mm';

  public static toDefaultDateDescription(date: Date | undefined | null): string {
    if (ObjectUtils.isNullOrUndefined(date)) {
      return 'Undefined';
    }

    const result = moment(date!).format(this.DefaultDateTimeFormat);
    return result;
  }
}
