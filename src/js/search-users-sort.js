'use strict';

import Enum from 'gdbots/common/enum';
import SystemUtils from 'gdbots/common/util/system-utils';

/**
 * @method static SearchUsersSort UNKNOWN()
 * @method static SearchUsersSort RELEVANCE()
 * @method static SearchUsersSort CREATED_AT_DESC()
 * @method static SearchUsersSort CREATED_AT_ASC()
 * @method static SearchUsersSort UPDATED_AT_DESC()
 * @method static SearchUsersSort UPDATED_AT_ASC()
 * @method static SearchUsersSort FIRST_NAME_DESC()
 * @method static SearchUsersSort FIRST_NAME_ASC()
 * @method static SearchUsersSort LAST_NAME_DESC()
 * @method static SearchUsersSort LAST_NAME_ASC()
 */
export default class SearchUsersSort extends SystemUtils.mixinClass(Enum) {}

SearchUsersSort.initEnum({
    UNKNOWN: 'unknown',
    RELEVANCE: 'relevance',
    CREATED_AT_DESC: 'created-at-desc',
    CREATED_AT_ASC: 'created-at-asc',
    UPDATED_AT_DESC: 'updated-at-desc',
    UPDATED_AT_ASC: 'updated-at-asc',
    FIRST_NAME_DESC: 'first-name-desc',
    FIRST_NAME_ASC: 'first-name-asc',
    LAST_NAME_DESC: 'last-name-desc',
    LAST_NAME_ASC: 'last-name-asc',
});
