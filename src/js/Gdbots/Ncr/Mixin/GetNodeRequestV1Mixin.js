'use strict';

import BooleanType from 'gdbots/pbj/type/boolean-type';
import Fb from 'gdbots/pbj/field-builder';
import Format from 'gdbots/pbj/enum/format';
import IdentifierType from 'gdbots/pbj/type/identifier-type';
import Mixin from 'gdbots/pbj/mixin';
import SchemaId from 'gdbots/pbj/schema-id';
import StringType from 'gdbots/pbj/type/string-type';
import SystemUtils from 'gdbots/common/util/system-utils';

export default class GetNodeRequestV1Mixin extends SystemUtils.mixinClass(Mixin)
{
  /**
   * {@inheritdoc}
   */
  getId() {
    return SchemaId.fromString('pbj:gdbots:ncr:mixin:get-node-request:1-0-0');
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
       * When "node_ref" is supplied it SHOULD be used to perform the request.
       * The "node_ref" and "slug" are analogous to protobuf unions in that
       * only one of these should exist and the priority of selection is as
       * ordered in this schema.
       */
      Fb.create('node_ref', IdentifierType.create())
        .build(),
      /*
       * The "qname" field should be populated when the request is not
       * using "node_ref", e.g. "acme:article"
       */
      Fb.create('qname', StringType.create())
        .pattern('^[a-z0-9-]+:[a-z0-9-]+$')
        .build(),
      Fb.create('slug', StringType.create())
        .format(Format.SLUG)
        .build()
    ];
  }
}
