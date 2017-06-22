'use strict';

import CommandV1Mixin from '/command-v1-mixin';
import GrantRolesToUser from '/grant-roles-to-user';
import GrantRolesToUserV1Mixin from '/grant-roles-to-user-v1-mixin';
import Schema from 'gdbots/pbj/schema';
import SystemUtils from 'gdbots/common/util/system-utils';

export default class GrantRolesToUserV1 extends SystemUtils.mixinClass(GrantRolesToUser)
{
  /**
   * @return Schema
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:command:grant-roles-to-user:1-0-0', this.name,
      [],
      [
        CommandV1Mixin.create(), 
        GrantRolesToUserV1Mixin.create()
      ]
    );
  }
}
