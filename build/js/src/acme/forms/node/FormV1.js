// @link http://acme-schemas.gdbots.io/json-schema/acme/forms/node/form/1-0-0.json#
import GdbotsCommonLabelableV1Mixin from '@gdbots/schemas/gdbots/common/mixin/labelable/LabelableV1Mixin';
import GdbotsCommonTaggableV1Mixin from '@gdbots/schemas/gdbots/common/mixin/taggable/TaggableV1Mixin';
import GdbotsFormsFormV1Mixin from '@gdbots/schemas/gdbots/forms/mixin/form/FormV1Mixin';
import GdbotsNcrExpirableV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/expirable/ExpirableV1Mixin';
import GdbotsNcrIndexedV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/indexed/IndexedV1Mixin';
import GdbotsNcrLockableV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/lockable/LockableV1Mixin';
import GdbotsNcrNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Mixin';
import GdbotsNcrNodeV1Trait from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Trait';
import GdbotsNcrPublishableV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/publishable/PublishableV1Mixin';
import GdbotsNcrSluggableV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/sluggable/SluggableV1Mixin';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class FormV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:forms:node:form:1-0-0', FormV1,
      [],
      [
        GdbotsNcrNodeV1Mixin.create(),
        GdbotsFormsFormV1Mixin.create(),
        GdbotsCommonLabelableV1Mixin.create(),
        GdbotsCommonTaggableV1Mixin.create(),
        GdbotsNcrExpirableV1Mixin.create(),
        GdbotsNcrIndexedV1Mixin.create(),
        GdbotsNcrLockableV1Mixin.create(),
        GdbotsNcrPublishableV1Mixin.create(),
        GdbotsNcrSluggableV1Mixin.create(),
      ],
    );
  }

  /**
   * @returns {Object}
   */
  getUriTemplateVars() {
    return {
      _id: `${this.get('_id', '')}`,
      slug: this.get('slug'),
    };
  }
}

GdbotsNcrNodeV1Trait(FormV1);
MessageResolver.register('acme:forms:node:form', FormV1);
Object.freeze(FormV1);
Object.freeze(FormV1.prototype);
