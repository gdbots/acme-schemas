'use strict';

import EventV1Mixin from '/event-v1-mixin';
import Schema from 'gdbots/pbj/schema';
import SystemUtils from 'gdbots/common/util/system-utils';
import UserRolesGranted from '/user-roles-granted';
import UserRolesGrantedV1Mixin from '/user-roles-granted-v1-mixin';

export default class UserRolesGrantedV1 extends SystemUtils.mixinClass(UserRolesGranted)
{
  /**
   * @return Schema
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:event:user-roles-granted:1-0-0', this.name,
      [],
      [
        EventV1Mixin.create(), 
        UserRolesGrantedV1Mixin.create()
      ]
    );
  }
}
