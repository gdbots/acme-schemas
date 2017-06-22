'use strict';

import GetNodeRequestV1Mixin from '/get-node-request-v1-mixin';
import GetUserRequest from '/get-user-request';
import GetUserRequestV1Mixin from '/get-user-request-v1-mixin';
import RequestV1Mixin from '/request-v1-mixin';
import Schema from 'gdbots/pbj/schema';
import SystemUtils from 'gdbots/common/util/system-utils';

export default class GetUserRequestV1 extends SystemUtils.mixinClass(GetUserRequest)
{
  /**
   * @return Schema
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:request:get-user-request:1-0-0', this.name,
      [],
      [
        RequestV1Mixin.create(), 
        GetNodeRequestV1Mixin.create(), 
        GetUserRequestV1Mixin.create()
      ]
    );
  }
}
