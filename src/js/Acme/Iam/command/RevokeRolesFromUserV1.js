'use strict';

import CommandV1Mixin from '/command-v1-mixin';
import RevokeRolesFromUser from '/revoke-roles-from-user';
import RevokeRolesFromUserV1Mixin from '/revoke-roles-from-user-v1-mixin';
import Schema from 'gdbots/pbj/schema';
import SystemUtils from 'gdbots/common/util/system-utils';

export default class RevokeRolesFromUserV1 extends SystemUtils.mixinClass(RevokeRolesFromUser)
{
  /**
   * @return Schema
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:command:revoke-roles-from-user:1-0-0', this.name,
      [],
      [
        CommandV1Mixin.create(), 
        RevokeRolesFromUserV1Mixin.create()
      ]
    );
  }
}
