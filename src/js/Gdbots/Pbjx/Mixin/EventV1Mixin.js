'use strict';

import App from '/app';
import Cloud from '/cloud';
import Fb from 'gdbots/pbj/field-builder';
import Format from 'gdbots/pbj/enum/format';
import MessageRefType from 'gdbots/pbj/type/message-ref-type';
import MessageType from 'gdbots/pbj/type/message-type';
import MicrotimeType from 'gdbots/pbj/type/microtime-type';
import Mixin from 'gdbots/pbj/mixin';
import SchemaId from 'gdbots/pbj/schema-id';
import StringType from 'gdbots/pbj/type/string-type';
import SystemUtils from 'gdbots/common/util/system-utils';
import TextType from 'gdbots/pbj/type/text-type';
import TimeUuidType from 'gdbots/pbj/type/time-uuid-type';

export default class EventV1Mixin extends SystemUtils.mixinClass(Mixin)
{
  /**
   * {@inheritdoc}
   */
  getId() {
    return SchemaId.fromString('pbj:gdbots:pbjx:mixin:event:1-0-0');
  }

  /**
   * {@inheritdoc}
   */
  getFields() {
    return [
      Fb.create('event_id', TimeUuidType.create())
        .required()
        .build(),
      Fb.create('occurred_at', MicrotimeType.create())
        .build(),
      Fb.create('ctx_causator_ref', MessageRefType.create())
        .build(),
      Fb.create('ctx_correlator_ref', MessageRefType.create())
        .build(),
      Fb.create('ctx_user_ref', MessageRefType.create())
        .build(),
      /*
       * The "ctx_app" refers to the application used to send the command which
       * in turn resulted in this event being published.
       */
      Fb.create('ctx_app', MessageType.create())
        .instance(App)
        .build(),
      /*
       * The "ctx_cloud" is usually copied from the command that resulted in this
       * event being published. This means the value most likely refers to the cloud
       * that received the command originally, not the machine processing the event.
       */
      Fb.create('ctx_cloud', MessageType.create())
        .instance(Cloud)
        .build(),
      Fb.create('ctx_ip', StringType.create())
        .format(Format.IPV4)
        .overridable(true)
        .build(),
      Fb.create('ctx_ua', TextType.create())
        .overridable(true)
        .build()
    ];
  }
}
