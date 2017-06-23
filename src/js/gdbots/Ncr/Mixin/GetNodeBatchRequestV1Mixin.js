import Fb from '@gdbots/pbj/FieldBuilder';
import Mixin from '@gdbots/pbj/Mixin';
import SchemaId from '@gdbots/pbj/SchemaId';
import T from '@gdbots/pbj/Type';

export default class GetNodeBatchRequestV1Mixin extends Mixin {
  /**
   * @returns {SchemaId}
   */
  getId() {
    return SchemaId.fromString('pbj:gdbots:ncr:mixin:get-node-batch-request:1-0-0');
  }

  /**
   * @returns {Field[]}
   */
  getFields() {
    return [
      /*
       * If true, a strongly consistent read is used; if false (the default), an eventually consistent read is used.
       */
      Fb.create('consistent_read', T.BooleanType.create())
        .build(),
      /*
       * When "node_refs" is supplied it SHOULD be used to perform the request.
       * The "node_refs" and "slugs" are analogous to protobuf unions in that
       * only one of these should exist and the priority of selection is as
       * ordered in this schema.
       */
      Fb.create('node_refs', T.IdentifierType.create())
        .asASet()
        .build()
    ];
  }
}