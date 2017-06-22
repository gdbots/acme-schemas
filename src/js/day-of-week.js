'use strict';

import Enum from 'gdbots/common/enum';
import SystemUtils from 'gdbots/common/util/system-utils';

/**
 * @method static DayOfWeek UNKNOWN()
 * @method static DayOfWeek SUNDAY()
 * @method static DayOfWeek MONDAY()
 * @method static DayOfWeek TUESDAY()
 * @method static DayOfWeek WEDNESDAY()
 * @method static DayOfWeek THURSDAY()
 * @method static DayOfWeek FRIDAY()
 * @method static DayOfWeek SATURDAY()
 * @method static DayOfWeek SUNDAY_TOO()
 */
export default class DayOfWeek extends SystemUtils.mixinClass(Enum) {}

DayOfWeek.initEnum({
    UNKNOWN: 0,
    SUNDAY: 0,
    MONDAY: 1,
    TUESDAY: 2,
    WEDNESDAY: 3,
    THURSDAY: 4,
    FRIDAY: 5,
    SATURDAY: 6,
    SUNDAY_TOO: 7,
});
