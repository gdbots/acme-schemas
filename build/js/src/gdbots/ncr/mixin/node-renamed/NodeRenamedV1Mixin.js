// @link http://acme-schemas.gdbots.io/json-schema/gdbots/ncr/mixin/node-renamed/1-0-0.json#
import Fb from '@gdbots/pbj/FieldBuilder';
import Format from '@gdbots/pbj/Enum/Format';
import Mixin from '@gdbots/pbj/Mixin';
import NodeStatus from '@gdbots/schemas/gdbots/ncr/enums/NodeStatus';
import SchemaId from '@gdbots/pbj/SchemaId';
import T from '@gdbots/pbj/Type';

export default class NodeRenamedV1Mixin extends Mixin {
  /**
   * @returns {SchemaId}
   */
  getId() {
    return SchemaId.fromString('pbj:gdbots:ncr:mixin:node-renamed:1-0-0');
  }

  /**
   * @returns {Field[]}
   */
  getFields() {
    return [
      Fb.create('node_ref', T.IdentifierType.create())
        .required()
        .build(),
      Fb.create('node_status', T.StringEnumType.create())
        .classProto(NodeStatus)
        .build(),
      Fb.create('new_slug', T.StringType.create())
        .format(Format.SLUG)
        .build(),
      Fb.create('old_slug', T.StringType.create())
        .format(Format.SLUG)
        .build(),
    ];
  }
}