'use strict';

import Fb from 'gdbots/pbj/field-builder';
import MessageRefType from 'gdbots/pbj/type/message-ref-type';
import MessageType from 'gdbots/pbj/type/message-type';
import MicrotimeType from 'gdbots/pbj/type/microtime-type';
import Mixin from 'gdbots/pbj/mixin';
import Request from '/request';
import SchemaId from 'gdbots/pbj/schema-id';
import SystemUtils from 'gdbots/common/util/system-utils';
import UuidType from 'gdbots/pbj/type/uuid-type';

export default class ResponseV1Mixin extends SystemUtils.mixinClass(Mixin)
{
  /**
   * {@inheritdoc}
   */
  getId() {
    return SchemaId.fromString('pbj:gdbots:pbjx:mixin:response:1-0-0');
  }

  /**
   * {@inheritdoc}
   */
  getFields() {
    return [
      Fb.create('response_id', UuidType.create())
        .required()
        .build(),
      Fb.create('created_at', MicrotimeType.create())
        .build(),
      Fb.create('ctx_request_ref', MessageRefType.create())
        .build(),
      /*
       * The "ctx_request" is the actual request object that "ctx_request_ref" refers to.
       * In some cases it's useful for request handlers to copy the request into the response
       * so the requestor has everything in one message. This will NOT always be populated.
       * A common use case is search request/response cycles where you want to know what the
       * search criteria was so you can render that along with the results.
       */
      Fb.create('ctx_request', MessageType.create())
        .instance(Request)
        .build(),
      Fb.create('ctx_correlator_ref', MessageRefType.create())
        .build()
    ];
  }
}
