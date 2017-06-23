import Message from '@gdbots/pbj/Message';
import GetNodeBatchRequestV1Mixin from '/get-node-batch-request-v1-mixin';
import RequestV1Mixin from '/request-v1-mixin';
import Schema from '@gdbots/pbj/Schema';
import T from '@gdbots/pbj/Type';

export default class GetNodeBatchRequestV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:gdbots:ncr:request:get-node-batch-request:1-0-0', this.name,
      [
        /*
         * Context is a map of data that helps the NCR decide where to read/write data from.
         * A common use case is multi-tenant applications.
         */
        Fb.create('context', T.StringType.create())
          .asAMap()
          .pattern('^[\\w\\/\\.:-]+$')
          .build()
      ],
      [
        RequestV1Mixin.create(), 
        GetNodeBatchRequestV1Mixin.create()
      ]
    );
  }
}
