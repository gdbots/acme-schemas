'use strict';

import Enum from 'gdbots/common/enum';
import SystemUtils from 'gdbots/common/util/system-utils';

/**
 * @method static StreamControl UNKNOWN()
 * @method static StreamControl CTRL_STOP()
 * @method static StreamControl CTRL_CONTINUE()
 */
export default class StreamControl extends SystemUtils.mixinClass(Enum) {}

StreamControl.initEnum({
    UNKNOWN: 0,
    CTRL_STOP: 0,
    CTRL_CONTINUE: 1,
});
