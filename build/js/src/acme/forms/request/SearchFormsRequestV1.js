// @link http://acme-schemas.gdbots.io/json-schema/acme/forms/request/search-forms-request/1-0-0.json#
import GdbotsFormsSearchFormsRequestV1Mixin from '@gdbots/schemas/gdbots/forms/mixin/search-forms-request/SearchFormsRequestV1Mixin';
import GdbotsNcrSearchNodesRequestV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/search-nodes-request/SearchNodesRequestV1Mixin';
import GdbotsPbjxRequestV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/request/RequestV1Mixin';
import GdbotsPbjxRequestV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/request/RequestV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class SearchFormsRequestV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:forms:request:search-forms-request:1-0-0', SearchFormsRequestV1,
      [],
      [
        GdbotsPbjxRequestV1Mixin.create(),
        GdbotsNcrSearchNodesRequestV1Mixin.create(),
        GdbotsFormsSearchFormsRequestV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxRequestV1Trait(SearchFormsRequestV1);
MessageResolver.register('acme:forms:request:search-forms-request', SearchFormsRequestV1);
Object.freeze(SearchFormsRequestV1);
Object.freeze(SearchFormsRequestV1.prototype);
