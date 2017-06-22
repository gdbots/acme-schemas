'use strict';

import Enum from 'gdbots/common/enum';
import SystemUtils from 'gdbots/common/util/system-utils';

/**
 * @method static PhoneType UNKNOWN()
 * @method static PhoneType MOBILE()
 * @method static PhoneType HOME()
 * @method static PhoneType WORK()
 * @method static PhoneType FAX()
 */
export default class PhoneType extends SystemUtils.mixinClass(Enum) {}

PhoneType.initEnum({
    UNKNOWN: 'unknown',
    MOBILE: 'mobile',
    HOME: 'home',
    WORK: 'work',
    FAX: 'fax',
});
