'use strict';

import CommandV1Mixin from '/command-v1-mixin';
import Schema from 'gdbots/pbj/schema';
import SystemUtils from 'gdbots/common/util/system-utils';
import UpdateNodeV1Mixin from '/update-node-v1-mixin';
import UpdateUser from '/update-user';
import UpdateUserV1Mixin from '/update-user-v1-mixin';

export default class UpdateUserV1 extends SystemUtils.mixinClass(UpdateUser)
{
  /**
   * @return Schema
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:command:update-user:1-0-0', this.name,
      [],
      [
        CommandV1Mixin.create(), 
        UpdateNodeV1Mixin.create(), 
        UpdateUserV1Mixin.create()
      ]
    );
  }
}
