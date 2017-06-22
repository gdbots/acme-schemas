'use strict';

import Enum from 'gdbots/common/enum';
import SystemUtils from 'gdbots/common/util/system-utils';

/**
 * @method static Month UNKNOWN()
 * @method static Month JANUARY()
 * @method static Month FEBRUARY()
 * @method static Month MARCH()
 * @method static Month APRIL()
 * @method static Month MAY()
 * @method static Month JUNE()
 * @method static Month JULY()
 * @method static Month AUGUST()
 * @method static Month SEPTEMBER()
 * @method static Month OCTOBER()
 * @method static Month NOVEMBER()
 * @method static Month DECEMBER()
 */
export default class Month extends SystemUtils.mixinClass(Enum) {}

Month.initEnum({
    UNKNOWN: 0,
    JANUARY: 1,
    FEBRUARY: 2,
    MARCH: 3,
    APRIL: 4,
    MAY: 5,
    JUNE: 6,
    JULY: 7,
    AUGUST: 8,
    SEPTEMBER: 9,
    OCTOBER: 10,
    NOVEMBER: 11,
    DECEMBER: 12,
});
