'use strict';

import EventV1Mixin from '/event-v1-mixin';
import NodeDeletedV1Mixin from '/node-deleted-v1-mixin';
import Schema from 'gdbots/pbj/schema';
import SystemUtils from 'gdbots/common/util/system-utils';
import UserDeleted from '/user-deleted';
import UserDeletedV1Mixin from '/user-deleted-v1-mixin';

export default class UserDeletedV1 extends SystemUtils.mixinClass(UserDeleted)
{
  /**
   * @return Schema
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:event:user-deleted:1-0-0', this.name,
      [],
      [
        EventV1Mixin.create(), 
        NodeDeletedV1Mixin.create(), 
        UserDeletedV1Mixin.create()
      ]
    );
  }
}
