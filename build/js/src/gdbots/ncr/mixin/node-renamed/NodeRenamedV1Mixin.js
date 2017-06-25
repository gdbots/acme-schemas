import Fb from '@gdbots/pbj/FieldBuilder';
import Format from '@gdbots/pbj/Enum/Format';
import Mixin from '@gdbots/pbj/Mixin';
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
        .instance(NodeStatus)
        .build(),
      Fb.create('new_slug', T.StringType.create())
        .format(Format.SLUG)
        .build(),
      Fb.create('old_slug', T.StringType.create())
        .format(Format.SLUG)
        .build()
    ];
  }
}
