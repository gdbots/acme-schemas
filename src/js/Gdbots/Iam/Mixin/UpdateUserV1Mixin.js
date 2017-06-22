'use strict';

import Fb from 'gdbots/pbj/field-builder';
import MessageType from 'gdbots/pbj/type/message-type';
import Mixin from 'gdbots/pbj/mixin';
import SchemaId from 'gdbots/pbj/schema-id';
import SystemUtils from 'gdbots/common/util/system-utils';
import User from '/user';

export default class UpdateUserV1Mixin extends SystemUtils.mixinClass(Mixin)
{
  /**
   * {@inheritdoc}
   */
  getId() {
    return SchemaId.fromString('pbj:gdbots:iam:mixin:update-user:1-0-0');
  }

  /**
   * {@inheritdoc}
   */
  getFields() {
    return [
      Fb.create('new_node', MessageType.create())
        .required()
        .instance(User)
        .build(),
      /*
       * The entire node, as it appeared before it was modified.
       */
      Fb.create('old_node', MessageType.create())
        .instance(User)
        .build()
    ];
  }
}
