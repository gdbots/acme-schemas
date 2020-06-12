// @link http://acme-schemas.gdbots.io/json-schema/acme/iam/node/browser-app/1-0-0.json#
import Fb from '@gdbots/pbj/FieldBuilder';
import Format from '@gdbots/pbj/enums/Format';
import GdbotsIamBrowserAppV1Trait from '@gdbots/schemas/gdbots/iam/mixin/browser-app/BrowserAppV1Trait';
import GdbotsNcrNodeV1Trait from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Trait';
import Message from '@gdbots/pbj/Message';
import NodeStatus from '@gdbots/schemas/gdbots/ncr/enums/NodeStatus';
import Schema from '@gdbots/pbj/Schema';
import T from '@gdbots/pbj/types';
import UuidIdentifier from '@gdbots/pbj/well-known/UuidIdentifier';

export default class BrowserAppV1 extends Message {
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
        Fb.create(this._ID_FIELD, T.IdentifierType.create())
          .required()
          .withDefault(() => UuidIdentifier.generate())
          .classProto(UuidIdentifier)
          .overridable(true)
          .build(),
        Fb.create(this.STATUS_FIELD, T.StringEnumType.create())
          .withDefault("draft")
          .classProto(NodeStatus)
          .build(),
        Fb.create(this.ETAG_FIELD, T.StringType.create())
          .maxLength(100)
          .pattern('^[\\w\\.:-]+$')
          .build(),
        Fb.create(this.CREATED_AT_FIELD, T.MicrotimeType.create())
          .build(),
        /*
         * A fully qualified reference to what created this node. This is intentionally a message-ref
         * and not a user id because it is often a program that creates nodes, not a user.
         */
        Fb.create(this.CREATOR_REF_FIELD, T.MessageRefType.create())
          .build(),
        Fb.create(this.UPDATED_AT_FIELD, T.MicrotimeType.create())
          .useTypeDefault(false)
          .build(),
        /*
         * A fully qualified reference to what updated this node. This is intentionally a message-ref
         * and not a user id because it is often a program that updates nodes, not a user.
         * E.g. "acme:iam:node:app:cli-scheduler" or "acme:iam:node:user:60c71df0-fda8-11e5-bfb9-30342d363854"
         */
        Fb.create(this.UPDATER_REF_FIELD, T.MessageRefType.create())
          .build(),
        /*
         * A reference to the last event that changed the state of this node.
         * E.g. "acme:blog:event:article-published:60c71df0-fda8-11e5-bfb9-30342d363854"
         */
        Fb.create(this.LAST_EVENT_REF_FIELD, T.MessageRefType.create())
          .build(),
        Fb.create(this.TITLE_FIELD, T.StringType.create())
          .build(),
        /*
         * The roles determine what permissions this app will have when using the system.
         * The role itself is a node which has a set of "allow" and "deny" rules.
         */
        Fb.create(this.ROLES_FIELD, T.NodeRefType.create())
          .asASet()
          .build(),
        /*
         * An encrypted value of legacy-server-key that can be obtained from the cloud messaging tab of the Firebase
         * console.
         * @link https://firebase.google.com/docs/cloud-messaging/auth-server
         */
        Fb.create(this.FCM_API_KEY_FIELD, T.TextType.create())
          .build(),
        /*
         * A unique identifier used to identify an app within a Firebase project that can be obtained
         * from the Firebase console.
         * @link https://firebase.google.com/docs/web/setup?authuser=0#config-object
         */
        Fb.create(this.FCM_APP_ID_FIELD, T.StringType.create())
          .pattern('^[\\w:]+$')
          .build(),
        /*
         * A unique identifier for your Firebase project, used in requests to the FCM v1 HTTP endpoint.
         * @link https://firebase.google.com/docs/cloud-messaging/concept-options#projectid
         */
        Fb.create(this.FCM_PROJECT_ID_FIELD, T.StringType.create())
          .format(Format.SLUG)
          .build(),
        /*
         * A unique numerical value created when you create your Firebase project.
         * @link https://firebase.google.com/docs/cloud-messaging/concept-options#senderid
         */
        Fb.create(this.FCM_SENDER_ID_FIELD, T.StringType.create())
          .pattern('^\\d+$')
          .build(),
        /*
         * An un-encrypted key that can be obtained from the cloud messaging tab of the Firebase console.
         */
        Fb.create(this.FCM_WEB_API_KEY_FIELD, T.StringType.create())
          .pattern('^[\\w\\.-]+$')
          .build(),
      ],
      this.MIXINS,
    );
  }
}

const M = BrowserAppV1;
M.prototype.SCHEMA_ID = M.SCHEMA_ID = 'pbj:acme:iam:node:browser-app:1-0-0';
M.prototype.SCHEMA_CURIE = M.SCHEMA_CURIE = 'acme:iam:node:browser-app';
M.prototype.SCHEMA_CURIE_MAJOR = M.SCHEMA_CURIE_MAJOR = 'acme:iam:node:browser-app:v1';

M.prototype.MIXINS = M.MIXINS = [
  'gdbots:ncr:mixin:node:v1',
  'gdbots:ncr:mixin:node',
  'gdbots:iam:mixin:app:v1',
  'gdbots:iam:mixin:app',
  'gdbots:iam:mixin:browser-app:v1',
  'gdbots:iam:mixin:browser-app',
];

M.prototype._ID_FIELD = M._ID_FIELD = '_id';
M.prototype.STATUS_FIELD = M.STATUS_FIELD = 'status';
M.prototype.ETAG_FIELD = M.ETAG_FIELD = 'etag';
M.prototype.CREATED_AT_FIELD = M.CREATED_AT_FIELD = 'created_at';
M.prototype.CREATOR_REF_FIELD = M.CREATOR_REF_FIELD = 'creator_ref';
M.prototype.UPDATED_AT_FIELD = M.UPDATED_AT_FIELD = 'updated_at';
M.prototype.UPDATER_REF_FIELD = M.UPDATER_REF_FIELD = 'updater_ref';
M.prototype.LAST_EVENT_REF_FIELD = M.LAST_EVENT_REF_FIELD = 'last_event_ref';
M.prototype.TITLE_FIELD = M.TITLE_FIELD = 'title';
M.prototype.ROLES_FIELD = M.ROLES_FIELD = 'roles';
M.prototype.FCM_API_KEY_FIELD = M.FCM_API_KEY_FIELD = 'fcm_api_key';
M.prototype.FCM_APP_ID_FIELD = M.FCM_APP_ID_FIELD = 'fcm_app_id';
M.prototype.FCM_PROJECT_ID_FIELD = M.FCM_PROJECT_ID_FIELD = 'fcm_project_id';
M.prototype.FCM_SENDER_ID_FIELD = M.FCM_SENDER_ID_FIELD = 'fcm_sender_id';
M.prototype.FCM_WEB_API_KEY_FIELD = M.FCM_WEB_API_KEY_FIELD = 'fcm_web_api_key';

M.prototype.FIELDS = M.FIELDS = [
  M._ID_FIELD,
  M.STATUS_FIELD,
  M.ETAG_FIELD,
  M.CREATED_AT_FIELD,
  M.CREATOR_REF_FIELD,
  M.UPDATED_AT_FIELD,
  M.UPDATER_REF_FIELD,
  M.LAST_EVENT_REF_FIELD,
  M.TITLE_FIELD,
  M.ROLES_FIELD,
  M.FCM_API_KEY_FIELD,
  M.FCM_APP_ID_FIELD,
  M.FCM_PROJECT_ID_FIELD,
  M.FCM_SENDER_ID_FIELD,
  M.FCM_WEB_API_KEY_FIELD,
];

GdbotsNcrNodeV1Trait(M);

GdbotsIamBrowserAppV1Trait(M);

Object.freeze(M);
Object.freeze(M.prototype);
