'use strict';

import EventV1Mixin from '/event-v1-mixin';
import NodeDeletedV1Mixin from '/node-deleted-v1-mixin';
import RoleDeleted from '/role-deleted';
import RoleDeletedV1Mixin from '/role-deleted-v1-mixin';
import Schema from 'gdbots/pbj/schema';
import SystemUtils from 'gdbots/common/util/system-utils';

export default class RoleDeletedV1 extends SystemUtils.mixinClass(RoleDeleted)
{
  /**
   * @return Schema
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:event:role-deleted:1-0-0', this.name,
      [],
      [
        EventV1Mixin.create(), 
        NodeDeletedV1Mixin.create(), 
        RoleDeletedV1Mixin.create()
      ]
    );
  }
}
