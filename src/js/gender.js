'use strict';

import Enum from 'gdbots/common/enum';
import SystemUtils from 'gdbots/common/util/system-utils';

/**
 * @method static Gender UNKNOWN()
 * @method static Gender MALE()
 * @method static Gender FEMALE()
 * @method static Gender NOT_SPECIFIED()
 */
export default class Gender extends SystemUtils.mixinClass(Enum) {}

Gender.initEnum({
    UNKNOWN: 0,
    MALE: 1,
    FEMALE: 2,
    NOT_SPECIFIED: 9,
});
