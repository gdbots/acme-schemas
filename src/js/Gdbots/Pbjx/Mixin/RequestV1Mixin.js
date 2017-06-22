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
import TinyIntType from 'gdbots/pbj/type/tiny-int-type';
import UuidType from 'gdbots/pbj/type/uuid-type';

export default class RequestV1Mixin extends SystemUtils.mixinClass(Mixin)
{
  /**
   * {@inheritdoc}
   */
  getId() {
    return SchemaId.fromString('pbj:gdbots:pbjx:mixin:request:1-0-0');
  }

  /**
   * {@inheritdoc}
   */
  getFields() {
    return [
      Fb.create('request_id', UuidType.create())
        .required()
        .build(),
      Fb.create('occurred_at', MicrotimeType.create())
        .build(),
      /*
       * The "ctx_retries" field is used to keep track of how many attempts were
       * made to handle this request. In some cases, the service or transport
       * that handles the request may be down or over capacity and is being retried.
       */
      Fb.create('ctx_retries', TinyIntType.create())
        .build(),
      Fb.create('ctx_causator_ref', MessageRefType.create())
        .build(),
      Fb.create('ctx_correlator_ref', MessageRefType.create())
        .build(),
      Fb.create('ctx_user_ref', MessageRefType.create())
        .build(),
      /*
       * The "ctx_app" refers to the application used to make the request. This is
       * different from ctx_ua (user_agent) because the agent used (Safari, Firefox)
       * is not necessarily the app used (cms, iOS app, website)
       */
      Fb.create('ctx_app', MessageType.create())
        .instance(App)
        .build(),
      /*
       * The "ctx_cloud" is set by the server making the request and is generally
       * only used internally for tracking and performance monitoring.
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
