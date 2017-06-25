import MessageRef from '@gdbots/pbj/MessageRef';

export default function NodeV1Trait(m) {
  /**
   * @param {?string} tag
   *
   * @returns {MessageRef}
   */
  m.prototype.generateMessageRef = function generateMessageRef(tag = null) {
    return new MessageRef(this.schema().getCurie(), this.get('_id'), tag);
  }
}
