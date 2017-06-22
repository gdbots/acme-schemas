'use strict';

import Enum from 'gdbots/common/enum';
import SystemUtils from 'gdbots/common/util/system-utils';

/**
 * @method static EdgeMultiplicity UNKNOWN()
 * @method static EdgeMultiplicity MULTI()
 * @method static EdgeMultiplicity SIMPLE()
 * @method static EdgeMultiplicity MANY2ONE()
 * @method static EdgeMultiplicity ONE2MANY()
 * @method static EdgeMultiplicity ONE2ONE()
 */
export default class EdgeMultiplicity extends SystemUtils.mixinClass(Enum) {}

EdgeMultiplicity.initEnum({
    UNKNOWN: 'unknown',
    MULTI: 'multi',
    SIMPLE: 'simple',
    MANY2ONE: 'many2one',
    ONE2MANY: 'one2many',
    ONE2ONE: 'one2one',
});
