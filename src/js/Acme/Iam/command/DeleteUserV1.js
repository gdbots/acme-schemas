'use strict';

import CommandV1Mixin from '/command-v1-mixin';
import DeleteNodeV1Mixin from '/delete-node-v1-mixin';
import DeleteUser from '/delete-user';
import DeleteUserV1Mixin from '/delete-user-v1-mixin';
import Schema from 'gdbots/pbj/schema';
import SystemUtils from 'gdbots/common/util/system-utils';

export default class DeleteUserV1 extends SystemUtils.mixinClass(DeleteUser)
{
  /**
   * @return Schema
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:command:delete-user:1-0-0', this.name,
      [],
      [
        CommandV1Mixin.create(), 
        DeleteNodeV1Mixin.create(), 
        DeleteUserV1Mixin.create()
      ]
    );
  }
}
