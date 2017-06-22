'use strict';

import Enum from 'gdbots/common/enum';
import SystemUtils from 'gdbots/common/util/system-utils';

/**
 * @method static Trinary UNKNOWN()
 * @method static Trinary TRUE_VAL()
 * @method static Trinary FALSE_VAL()
 */
export default class Trinary extends SystemUtils.mixinClass(Enum) {}

Trinary.initEnum({
    UNKNOWN: 0,
    TRUE_VAL: 1,
    FALSE_VAL: 2,
});
