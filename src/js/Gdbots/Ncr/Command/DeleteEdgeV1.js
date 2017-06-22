'use strict';

import CommandV1Mixin from '/command-v1-mixin';
import DeleteEdge from '/delete-edge';
import Edge from '/edge';
import MessageType from 'gdbots/pbj/type/message-type';
import Schema from 'gdbots/pbj/schema';
import SystemUtils from 'gdbots/common/util/system-utils';

export default class DeleteEdgeV1 extends SystemUtils.mixinClass(DeleteEdge)
{
  /**
   * @return Schema
   */
  static defineSchema() {
    return new Schema('pbj:gdbots:ncr:command:delete-edge:1-0-0', this.name,
      [
        Fb.create('edge', MessageType.create())
          .required()
          .instance(Edge)
          .build()
      ],
      [
        CommandV1Mixin.create()
      ]
    );
  }
}
