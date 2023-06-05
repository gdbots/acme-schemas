// @link http://acme-schemas.gdbots.io/json-schema/acme/iam/node/android-app/1-0-0.json#
import Fb from '@gdbots/pbj/FieldBuilder.js';
import Format from '@gdbots/pbj/enums/Format.js';
import GdbotsIamAndroidAppV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/android-app/AndroidAppV1Mixin.js';
import GdbotsNcrNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Mixin.js';
import Message from '@gdbots/pbj/Message.js';
import NodeStatus from '@gdbots/schemas/gdbots/ncr/enums/NodeStatus.js';
import Schema from '@gdbots/pbj/Schema.js';
import T from '@gdbots/pbj/types/index.js';
import UuidIdentifier from '@gdbots/pbj/well-known/UuidIdentifier.js';

export default class AndroidAppV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema(this.SCHEMA_ID, this,
      [
        /*
         * The "_id" value:
         * - MUST NOT change for the life of the node.
         * - SHOULD be globally unique
         * - SHOULD be generated by the app (ideally in default value closure... e.g. UuidIdentifier::generate())
         */
        Fb.create('_id', T.IdentifierType.create())
          .required()
          .withDefault(() => UuidIdentifier.generate())
          .classProto(UuidIdentifier)
          .overridable(true)
          .build(),
        Fb.create('status', T.StringEnumType.create())
          .withDefault("draft")
          .classProto(NodeStatus)
          .build(),
        Fb.create('etag', T.StringType.create())
          .maxLength(100)
          .pattern('^[\\w\\.:-]+$')
          .build(),
        Fb.create('created_at', T.MicrotimeType.create())
          .build(),
        /*
         * A fully qualified reference to what created this node. This is intentionally a message-ref
         * and not a user id because it is often a program that creates nodes, not a user.
         */
        Fb.create('creator_ref', T.MessageRefType.create())
          .build(),
        Fb.create('updated_at', T.MicrotimeType.create())
          .useTypeDefault(false)
          .build(),
        /*
         * A fully qualified reference to what updated this node. This is intentionally a message-ref
         * and not a user id because it is often a program that updates nodes, not a user.
         * E.g. "acme:iam:node:app:cli-scheduler" or "acme:iam:node:user:60c71df0-fda8-11e5-bfb9-30342d363854"
         */
        Fb.create('updater_ref', T.MessageRefType.create())
          .build(),
        /*
         * A reference to the last event that changed the state of this node.
         * E.g. "acme:blog:event:article-published:60c71df0-fda8-11e5-bfb9-30342d363854"
         */
        Fb.create('last_event_ref', T.MessageRefType.create())
          .build(),
        Fb.create('title', T.StringType.create())
          .build(),
        /*
         * The roles determine what permissions this app will have when using the system.
         * The role itself is a node which has a set of "allow" and "deny" rules.
         */
        Fb.create('roles', T.NodeRefType.create())
          .asASet()
          .build(),
        /*
         * An encrypted value of connection-string (starts with Endpoint=sb://) that can be obtained from Azure portal.
         * @link
         * https://docs.microsoft.com/en-us/azure/notification-hubs/notification-hubs-nodejs-push-notification-tutorial
         */
        Fb.create('azure_notification_hub_connection', T.TextType.create())
          .build(),
        Fb.create('azure_notification_hub_name', T.StringType.create())
          .pattern('^[\\w\\.-]+$')
          .build(),
        /*
         * An encrypted value of legacy-server-key that can be obtained from the cloud messaging tab of the Firebase
         * console.
         * @link https://firebase.google.com/docs/cloud-messaging/auth-server
         */
        Fb.create('fcm_api_key', T.TextType.create())
          .build(),
        /*
         * An encrypted value of the service account file that can be obtained from the service accounts tab of the Firebase
         * console.
         * @link https://firebase.google.com/docs/cloud-messaging/auth-server
         */
        Fb.create('fcm_auth_config', T.TextType.create())
          .build(),
        /*
         * A unique identifier for your Firebase project, used in requests to the FCM v1 HTTP endpoint.
         * @link https://firebase.google.com/docs/cloud-messaging/concept-options#projectid
         */
        Fb.create('fcm_project_id', T.StringType.create())
          .format(Format.SLUG)
          .build(),
        /*
         * A unique numerical value created when you create your Firebase project.
         * @link https://firebase.google.com/docs/cloud-messaging/concept-options#senderid
         */
        Fb.create('fcm_sender_id', T.StringType.create())
          .pattern('^\\d+$')
          .build(),
        /*
         * An un-encrypted key that can be obtained from the cloud messaging tab of the Firebase console.
         */
        Fb.create('fcm_web_api_key', T.StringType.create())
          .pattern('^[\\w\\.-]+$')
          .build(),
      ],
      this.MIXINS,
    );
  }
}

const M = AndroidAppV1;
M.prototype.SCHEMA_ID = M.SCHEMA_ID = 'pbj:acme:iam:node:android-app:1-0-0';
M.prototype.SCHEMA_CURIE = M.SCHEMA_CURIE = 'acme:iam:node:android-app';
M.prototype.SCHEMA_CURIE_MAJOR = M.SCHEMA_CURIE_MAJOR = 'acme:iam:node:android-app:v1';
M.prototype.MIXINS = M.MIXINS = [
  'gdbots:ncr:mixin:node:v1',
  'gdbots:ncr:mixin:node',
  'gdbots:iam:mixin:app:v1',
  'gdbots:iam:mixin:app',
  'gdbots:iam:mixin:android-app:v1',
  'gdbots:iam:mixin:android-app',
];

GdbotsNcrNodeV1Mixin(M);

GdbotsIamAndroidAppV1Mixin(M);

Object.freeze(M);
Object.freeze(M.prototype);
