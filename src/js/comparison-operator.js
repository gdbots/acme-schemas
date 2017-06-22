'use strict';

import Enum from 'gdbots/common/enum';
import SystemUtils from 'gdbots/common/util/system-utils';

/**
 * @method static ComparisonOperator UNKNOWN()
 * @method static ComparisonOperator EQUAL_TO()
 * @method static ComparisonOperator NOT_EQUAL_TO()
 * @method static ComparisonOperator GREATER_THAN()
 * @method static ComparisonOperator GREATER_THAN_OR_EQUAL_TO()
 * @method static ComparisonOperator LESS_THAN()
 * @method static ComparisonOperator LESS_THAN_OR_EQUAL_TO()
 * @method static ComparisonOperator EXISTS()
 * @method static ComparisonOperator IN()
 * @method static ComparisonOperator CONTAINS()
 * @method static ComparisonOperator NOT_CONTAINS()
 * @method static ComparisonOperator WITHIN()
 */
export default class ComparisonOperator extends SystemUtils.mixinClass(Enum) {}

ComparisonOperator.initEnum({
    UNKNOWN: 'unknown',
    EQUAL_TO: 'eq',
    NOT_EQUAL_TO: 'ne',
    GREATER_THAN: 'gt',
    GREATER_THAN_OR_EQUAL_TO: 'gte',
    LESS_THAN: 'lt',
    LESS_THAN_OR_EQUAL_TO: 'lte',
    EXISTS: 'exists',
    IN: 'in',
    CONTAINS: 'contains',
    NOT_CONTAINS: 'not_contains',
    WITHIN: 'within',
});
