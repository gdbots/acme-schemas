import Message from '@gdbots/pbj/Message';
import ListAllRolesRequestV1Mixin from '/list-all-roles-request-v1-mixin';
import RequestV1Mixin from '/request-v1-mixin';
import Schema from '@gdbots/pbj/Schema';

export default class ListAllRolesRequestV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:request:list-all-roles-request:1-0-0', this.name,
      [],
      [
        RequestV1Mixin.create(), 
        ListAllRolesRequestV1Mixin.create()
      ]
    );
  }
}
