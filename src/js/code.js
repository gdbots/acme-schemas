'use strict';

import Enum from 'gdbots/common/enum';
import SystemUtils from 'gdbots/common/util/system-utils';

/**
 * @method static Code OK()
 * @method static Code CANCELLED()
 * @method static Code UNKNOWN()
 * @method static Code INVALID_ARGUMENT()
 * @method static Code DEADLINE_EXCEEDED()
 * @method static Code NOT_FOUND()
 * @method static Code ALREADY_EXISTS()
 * @method static Code PERMISSION_DENIED()
 * @method static Code UNAUTHENTICATED()
 * @method static Code RESOURCE_EXHAUSTED()
 * @method static Code FAILED_PRECONDITION()
 * @method static Code ABORTED()
 * @method static Code OUT_OF_RANGE()
 * @method static Code UNIMPLEMENTED()
 * @method static Code INTERNAL()
 * @method static Code UNAVAILABLE()
 * @method static Code DATA_LOSS()
 */
export default class Code extends SystemUtils.mixinClass(Enum) {}

Code.initEnum({
    OK: 0,
    CANCELLED: 1,
    UNKNOWN: 2,
    INVALID_ARGUMENT: 3,
    DEADLINE_EXCEEDED: 4,
    NOT_FOUND: 5,
    ALREADY_EXISTS: 6,
    PERMISSION_DENIED: 7,
    UNAUTHENTICATED: 16,
    RESOURCE_EXHAUSTED: 8,
    FAILED_PRECONDITION: 9,
    ABORTED: 10,
    OUT_OF_RANGE: 11,
    UNIMPLEMENTED: 12,
    INTERNAL: 13,
    UNAVAILABLE: 14,
    DATA_LOSS: 15,
});
