'use strict';

import Fb from 'gdbots/pbj/field-builder';
import MessageType from 'gdbots/pbj/type/message-type';
import Mixin from 'gdbots/pbj/mixin';
import SchemaId from 'gdbots/pbj/schema-id';
import SystemUtils from 'gdbots/common/util/system-utils';
import User from '/user';

export default class CreateUserV1Mixin extends SystemUtils.mixinClass(Mixin)
{
  /**
   * {@inheritdoc}
   */
  getId() {
    return SchemaId.fromString('pbj:gdbots:iam:mixin:create-user:1-0-0');
  }

  /**
   * {@inheritdoc}
   */
  getFields() {
    return [
      Fb.create('node', MessageType.create())
        .required()
        .instance(User)
        .build()
    ];
  }
}
