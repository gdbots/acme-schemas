'use strict';

import Enum from 'gdbots/common/enum';
import SystemUtils from 'gdbots/common/util/system-utils';

/**
 * @method static NodeStatus UNKNOWN()
 * @method static NodeStatus PUBLISHED()
 * @method static NodeStatus SCHEDULED()
 * @method static NodeStatus DRAFT()
 * @method static NodeStatus EXPIRED()
 * @method static NodeStatus DELETED()
 */
export default class NodeStatus extends SystemUtils.mixinClass(Enum) {}

NodeStatus.initEnum({
    UNKNOWN: 'unknown',
    PUBLISHED: 'published',
    SCHEDULED: 'scheduled',
    DRAFT: 'draft',
    EXPIRED: 'expired',
    DELETED: 'deleted',
});
