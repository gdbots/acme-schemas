'use strict';

import Fb from 'gdbots/pbj/field-builder';
import MessageType from 'gdbots/pbj/type/message-type';
import Mixin from 'gdbots/pbj/mixin';
import Role from '/role';
import SchemaId from 'gdbots/pbj/schema-id';
import SystemUtils from 'gdbots/common/util/system-utils';

export default class RoleUpdatedV1Mixin extends SystemUtils.mixinClass(Mixin)
{
  /**
   * {@inheritdoc}
   */
  getId() {
    return SchemaId.fromString('pbj:gdbots:iam:mixin:role-updated:1-0-0');
  }

  /**
   * {@inheritdoc}
   */
  getFields() {
    return [
      Fb.create('new_node', MessageType.create())
        .required()
        .instance(Role)
        .build(),
      /*
       * The entire node, as it appeared before it was modified.
       */
      Fb.create('old_node', MessageType.create())
        .instance(Role)
        .build()
    ];
  }
}
