'use strict';

import BooleanType from 'gdbots/pbj/type/boolean-type';
import Fb from 'gdbots/pbj/field-builder';
import IdentifierType from 'gdbots/pbj/type/identifier-type';
import Mixin from 'gdbots/pbj/mixin';
import SchemaId from 'gdbots/pbj/schema-id';
import SystemUtils from 'gdbots/common/util/system-utils';

export default class GetNodeBatchRequestV1Mixin extends SystemUtils.mixinClass(Mixin)
{
  /**
   * {@inheritdoc}
   */
  getId() {
    return SchemaId.fromString('pbj:gdbots:ncr:mixin:get-node-batch-request:1-0-0');
  }

  /**
   * {@inheritdoc}
   */
  getFields() {
    return [
      /*
       * If true, a strongly consistent read is used; if false (the default), an eventually consistent read is used.
       */
      Fb.create('consistent_read', BooleanType.create())
        .build(),
      /*
       * When "node_refs" is supplied it SHOULD be used to perform the request.
       * The "node_refs" and "slugs" are analogous to protobuf unions in that
       * only one of these should exist and the priority of selection is as
       * ordered in this schema.
       */
      Fb.create('node_refs', IdentifierType.create())
        .asASet()
        .build()
    ];
  }
}
