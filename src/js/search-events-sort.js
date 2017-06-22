'use strict';

import Enum from 'gdbots/common/enum';
import SystemUtils from 'gdbots/common/util/system-utils';

/**
 * @method static SearchEventsSort UNKNOWN()
 * @method static SearchEventsSort RELEVANCE()
 * @method static SearchEventsSort DATE_DESC()
 * @method static SearchEventsSort DATE_ASC()
 */
export default class SearchEventsSort extends SystemUtils.mixinClass(Enum) {}

SearchEventsSort.initEnum({
    UNKNOWN: 'unknown',
    RELEVANCE: 'relevance',
    DATE_DESC: 'date-desc',
    DATE_ASC: 'date-asc',
});
