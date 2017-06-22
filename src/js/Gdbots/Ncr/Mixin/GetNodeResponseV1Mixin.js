'use strict';

import Fb from 'gdbots/pbj/field-builder';
import MessageType from 'gdbots/pbj/type/message-type';
import Mixin from 'gdbots/pbj/mixin';
import Node from '/node';
import SchemaId from 'gdbots/pbj/schema-id';
import SystemUtils from 'gdbots/common/util/system-utils';

export default class GetNodeResponseV1Mixin extends SystemUtils.mixinClass(Mixin)
{
  /**
   * {@inheritdoc}
   */
  getId() {
    return SchemaId.fromString('pbj:gdbots:ncr:mixin:get-node-response:1-0-0');
  }

  /**
   * {@inheritdoc}
   */
  getFields() {
    return [
      Fb.create('node', MessageType.create())
        .instance(Node)
        .overridable(true)
        .build()
    ];
  }
}
