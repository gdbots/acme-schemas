'use strict';

import Fb from 'gdbots/pbj/field-builder';
import MessageType from 'gdbots/pbj/type/message-type';
import Mixin from 'gdbots/pbj/mixin';
import SchemaId from 'gdbots/pbj/schema-id';
import SystemUtils from 'gdbots/common/util/system-utils';
import TextType from 'gdbots/pbj/type/text-type';
import UserAgent from '/user-agent';

export default class UaParserV1Mixin extends SystemUtils.mixinClass(Mixin)
{
  /**
   * {@inheritdoc}
   */
  getId() {
    return SchemaId.fromString('pbj:gdbots:enrichments:mixin:ua-parser:1-0-0');
  }

  /**
   * {@inheritdoc}
   */
  getFields() {
    return [
      Fb.create('ctx_ua', TextType.create())
        .overridable(true)
        .build(),
      Fb.create('ctx_ua_parsed', MessageType.create())
        .instance(UserAgent)
        .build()
    ];
  }
}
