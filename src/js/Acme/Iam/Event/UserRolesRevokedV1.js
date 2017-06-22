'use strict';

import EventV1Mixin from '/event-v1-mixin';
import Schema from 'gdbots/pbj/schema';
import SystemUtils from 'gdbots/common/util/system-utils';
import UserRolesRevoked from '/user-roles-revoked';
import UserRolesRevokedV1Mixin from '/user-roles-revoked-v1-mixin';

export default class UserRolesRevokedV1 extends SystemUtils.mixinClass(UserRolesRevoked)
{
  /**
   * @return Schema
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:event:user-roles-revoked:1-0-0', this.name,
      [],
      [
        EventV1Mixin.create(), 
        UserRolesRevokedV1Mixin.create()
      ]
    );
  }
}
