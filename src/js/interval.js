'use strict';

import Enum from 'gdbots/common/enum';
import SystemUtils from 'gdbots/common/util/system-utils';

/**
 * @method static Interval UNKNOWN()
 * @method static Interval MINUTELY()
 * @method static Interval HOURLY()
 * @method static Interval DAILY()
 * @method static Interval WEEKLY()
 * @method static Interval MONTHLY()
 * @method static Interval YEARLY()
 */
export default class Interval extends SystemUtils.mixinClass(Enum) {}

Interval.initEnum({
    UNKNOWN: 'unknown',
    MINUTELY: 'minutely',
    HOURLY: 'hourly',
    DAILY: 'daily',
    WEEKLY: 'weekly',
    MONTHLY: 'monthly',
    YEARLY: 'yearly',
});
