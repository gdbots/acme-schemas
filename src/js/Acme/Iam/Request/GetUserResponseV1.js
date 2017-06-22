'use strict';

import GetNodeResponseV1Mixin from '/get-node-response-v1-mixin';
import GetUserResponse from '/get-user-response';
import GetUserResponseV1Mixin from '/get-user-response-v1-mixin';
import ResponseV1Mixin from '/response-v1-mixin';
import Schema from 'gdbots/pbj/schema';
import SystemUtils from 'gdbots/common/util/system-utils';

export default class GetUserResponseV1 extends SystemUtils.mixinClass(GetUserResponse)
{
  /**
   * @return Schema
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:request:get-user-response:1-0-0', this.name,
      [],
      [
        ResponseV1Mixin.create(), 
        GetNodeResponseV1Mixin.create(), 
        GetUserResponseV1Mixin.create()
      ]
    );
  }
}
