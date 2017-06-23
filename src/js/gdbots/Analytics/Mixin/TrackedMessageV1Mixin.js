import Fb from '@gdbots/pbj/FieldBuilder';
import Mixin from '@gdbots/pbj/Mixin';
import SchemaId from '@gdbots/pbj/SchemaId';

export default class TrackedMessageV1Mixin extends Mixin {
  /**
   * @returns {SchemaId}
   */
  getId() {
    return SchemaId.fromString('pbj:gdbots:analytics:mixin:tracked-message:1-0-0');
  }

  /**
   * @returns {Field[]}
   */
  getFields() {
    return [];
  }
}
