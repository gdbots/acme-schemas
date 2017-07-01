// @link http://acme-schemas.gdbots.io/json-schema/gdbots/ncr/mixin/node-published/1-0-0.json#
import Fb from '@gdbots/pbj/FieldBuilder';
import Format from '@gdbots/pbj/Enum/Format';
import Mixin from '@gdbots/pbj/Mixin';
import SchemaId from '@gdbots/pbj/SchemaId';
import T from '@gdbots/pbj/Type';

export default class NodePublishedV1Mixin extends Mixin {
  /**
   * @returns {SchemaId}
   */
  getId() {
    return SchemaId.fromString('pbj:gdbots:ncr:mixin:node-published:1-0-0');
  }

  /**
   * @returns {Field[]}
   */
  getFields() {
    return [
      Fb.create('node_ref', T.IdentifierType.create())
        .required()
        .build(),
      Fb.create('slug', T.StringType.create())
        .format(Format.SLUG)
        .build(),
      Fb.create('published_at', T.DateTimeType.create())
        .build(),
    ];
  }
}