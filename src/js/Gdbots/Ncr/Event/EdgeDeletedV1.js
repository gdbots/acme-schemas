'use strict';

import Edge from '/edge';
import EdgeDeleted from '/edge-deleted';
import EventV1Mixin from '/event-v1-mixin';
import MessageType from 'gdbots/pbj/type/message-type';
import Schema from 'gdbots/pbj/schema';
import SystemUtils from 'gdbots/common/util/system-utils';

export default class EdgeDeletedV1 extends SystemUtils.mixinClass(EdgeDeleted)
{
  /**
   * @return Schema
   */
  static defineSchema() {
    return new Schema('pbj:gdbots:ncr:event:edge-deleted:1-0-0', this.name,
      [
        Fb.create('edge', MessageType.create())
          .required()
          .instance(Edge)
          .build()
      ],
      [
        EventV1Mixin.create()
      ]
    );
  }
}
