// @link http://acme-schemas.gdbots.io/json-schema/acme/forms/command/send-submission/1-0-0.json#
import DayOfWeek from '@gdbots/schemas/gdbots/common/enums/DayOfWeek';
import Fb from '@gdbots/pbj/FieldBuilder';
import FileId from '@gdbots/schemas/gdbots/common/FileId';
import Format from '@gdbots/pbj/enums/Format';
import GdbotsPbjxCommandV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Trait';
import Gender from '@gdbots/schemas/gdbots/common/enums/Gender';
import Message from '@gdbots/pbj/Message';
import Month from '@gdbots/schemas/gdbots/common/enums/Month';
import Schema from '@gdbots/pbj/Schema';
import SexualOrientation from '@gdbots/schemas/gdbots/common/enums/SexualOrientation';
import T from '@gdbots/pbj/types';

export default class SendSubmissionV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema(this.SCHEMA_ID, this,
      [
        Fb.create(this.COMMAND_ID_FIELD, T.TimeUuidType.create())
          .required()
          .build(),
        Fb.create(this.OCCURRED_AT_FIELD, T.MicrotimeType.create())
          .build(),
        /*
         * Used to perform optimistic concurrency control.
         * @link https://en.wikipedia.org/wiki/HTTP_ETag
         */
        Fb.create(this.EXPECTED_ETAG_FIELD, T.StringType.create())
          .maxLength(100)
          .pattern('^[\\w\\.:-]+$')
          .build(),
        /*
         * Multi-tenant apps can use this field to track the tenant id.
         */
        Fb.create(this.CTX_TENANT_ID_FIELD, T.StringType.create())
          .pattern('^[\\w\\/\\.:-]+$')
          .build(),
        /*
         * The "ctx_retries" field is used to keep track of how many attempts were
         * made to process this command. In some cases, the service or transport
         * that handles the command may be down or an optimistic check has failed
         * and is being retried.
         */
        Fb.create(this.CTX_RETRIES_FIELD, T.TinyIntType.create())
          .build(),
        /*
         * The "ctx_causator" is the actual causator object that "ctx_causator_ref"
         * refers to. In some cases it's useful for command handlers to copy the
         * causator into the command. For example, when a node is being updated we
         * may want to know what the node will be after the update. We can derive
         * this via the causator instead of requesting the node and engaging a race
         * condition.
         */
        Fb.create(this.CTX_CAUSATOR_FIELD, T.MessageType.create())
          .build(),
        Fb.create(this.CTX_CAUSATOR_REF_FIELD, T.MessageRefType.create())
          .build(),
        Fb.create(this.CTX_CORRELATOR_REF_FIELD, T.MessageRefType.create())
          .build(),
        Fb.create(this.CTX_USER_REF_FIELD, T.MessageRefType.create())
          .build(),
        /*
         * The "ctx_app" refers to the application used to send the command. This is
         * different from ctx_ua (user_agent) because the agent used (Safari, Firefox)
         * is not necessarily the app used (cms, iOS app, website)
         */
        Fb.create(this.CTX_APP_FIELD, T.MessageType.create())
          .anyOfCuries([
            'gdbots:contexts::app',
          ])
          .build(),
        /*
         * The "ctx_cloud" is set by the server receiving the command and is generally
         * only used internally for tracking and performance monitoring.
         */
        Fb.create(this.CTX_CLOUD_FIELD, T.MessageType.create())
          .anyOfCuries([
            'gdbots:contexts::cloud',
          ])
          .build(),
        Fb.create(this.CTX_IP_FIELD, T.StringType.create())
          .format(Format.IPV4)
          .overridable(true)
          .build(),
        Fb.create(this.CTX_IPV6_FIELD, T.StringType.create())
          .format(Format.IPV6)
          .overridable(true)
          .build(),
        Fb.create(this.CTX_UA_FIELD, T.TextType.create())
          .overridable(true)
          .build(),
        /*
         * An optional message/reason for the command being sent.
         * Consider this like a git commit message.
         */
        Fb.create(this.CTX_MSG_FIELD, T.TextType.create())
          .build(),
        Fb.create(this.FORM_REF_FIELD, T.NodeRefType.create())
          .required()
          .build(),
        /*
         * Contains answers submitted from the fields on the form.
         */
        Fb.create(this.CF_FIELD, T.DynamicFieldType.create())
          .asAList()
          .build(),
        /*
         * Any files uploaded should have the IDs copied here in addition to
         * being present in the "cf" field (or whereever they are mapped to).
         */
        Fb.create(this.FILE_IDS_FIELD, T.IdentifierType.create())
          .asASet()
          .classProto(FileId)
          .build(),
        /*
         * Publisher provided identifier (PPID)
         */
        Fb.create(this.PPID_FIELD, T.StringType.create())
          .pattern('^[\\w\\/\\.:-]+$')
          .build(),
        Fb.create(this.HASHTAGS_FIELD, T.StringType.create())
          .asASet()
          .format(Format.HASHTAG)
          .build(),
        /*
         * Tags is a map that categorizes data or tracks references in
         * external systems. The tags names should be consistent and descriptive,
         * e.g. fb_user_id:123, salesforce_customer_id:456.
         */
        Fb.create(this.TAGS_FIELD, T.StringType.create())
          .asAMap()
          .pattern('^[\\w\\/\\.:-]+$')
          .build(),
        Fb.create(this.MONTH_OF_YEAR_FIELD, T.IntEnumType.create())
          .withDefault(0)
          .classProto(Month)
          .build(),
        Fb.create(this.DAY_OF_MONTH_FIELD, T.TinyIntType.create())
          .max(31)
          .build(),
        Fb.create(this.DAY_OF_WEEK_FIELD, T.IntEnumType.create())
          .withDefault(0)
          .classProto(DayOfWeek)
          .build(),
        Fb.create(this.IS_WEEKEND_FIELD, T.BooleanType.create())
          .build(),
        Fb.create(this.HOUR_OF_DAY_FIELD, T.TinyIntType.create())
          .max(23)
          .build(),
        Fb.create(this.TS_YMDH_FIELD, T.IntType.create())
          .build(),
        Fb.create(this.TS_YMD_FIELD, T.IntType.create())
          .build(),
        Fb.create(this.TS_YM_FIELD, T.MediumIntType.create())
          .build(),
        Fb.create(this.UTM_SOURCE_FIELD, T.StringType.create())
          .maxLength(50)
          .pattern('^[\\w\\/\\.:-]+$')
          .build(),
        Fb.create(this.UTM_MEDIUM_FIELD, T.StringType.create())
          .maxLength(50)
          .pattern('^[\\w\\/\\.:-]+$')
          .build(),
        Fb.create(this.UTM_TERM_FIELD, T.StringType.create())
          .maxLength(100)
          .pattern('^[\\w\\s\\/\\.,:-]+$')
          .build(),
        Fb.create(this.UTM_CONTENT_FIELD, T.StringType.create())
          .maxLength(50)
          .pattern('^[\\w\\/\\.:-]+$')
          .build(),
        Fb.create(this.UTM_CAMPAIGN_FIELD, T.StringType.create())
          .maxLength(50)
          .pattern('^[\\w\\/\\.:-]+$')
          .build(),
        Fb.create(this.FIRST_NAME_FIELD, T.StringType.create())
          .build(),
        Fb.create(this.LAST_NAME_FIELD, T.StringType.create())
          .build(),
        Fb.create(this.EMAIL_FIELD, T.StringType.create())
          .format(Format.EMAIL)
          .build(),
        Fb.create(this.EMAIL_DOMAIN_FIELD, T.StringType.create())
          .format(Format.HOSTNAME)
          .build(),
        Fb.create(this.ADDRESS_FIELD, T.MessageType.create())
          .anyOfCuries([
            'gdbots:geo::address',
          ])
          .build(),
        /*
         * A general format for international telephone numbers.
         * @link https://en.wikipedia.org/wiki/E.164
         */
        Fb.create(this.PHONE_FIELD, T.StringType.create())
          .asAMap()
          .maxLength(20)
          .pattern('^\\+?[1-9]\\d{1,14}$')
          .build(),
        Fb.create(this.DOB_FIELD, T.DateType.create())
          .build(),
        /*
         * The "age" is generally populated if "dob" is present by using the difference of
         * "dob" and "occurred_at" to determine the age at the time of the response.
         */
        Fb.create(this.AGE_FIELD, T.TinyIntType.create())
          .max(120)
          .build(),
        /*
         * The person's physical height recorded in inches.
         */
        Fb.create(this.HEIGHT_FIELD, T.TinyIntType.create())
          .max(120)
          .build(),
        Fb.create(this.GENDER_FIELD, T.IntEnumType.create())
          .classProto(Gender)
          .build(),
        Fb.create(this.SEXUAL_ORIENTATION_FIELD, T.StringEnumType.create())
          .classProto(SexualOrientation)
          .build(),
        Fb.create(this.STORY_FIELD, T.TextType.create())
          .build(),
        /*
         * Networks is a map that contains handles/usernames on a social network.
         * E.g. facebook:homer, twitter:stackoverflow, youtube:coltrane78.
         */
        Fb.create(this.NETWORKS_FIELD, T.StringType.create())
          .asAMap()
          .maxLength(50)
          .pattern('^[\\w\\.-]+$')
          .build(),
      ],
      this.MIXINS,
    );
  }
}

const M = SendSubmissionV1;
M.prototype.SCHEMA_ID = M.SCHEMA_ID = 'pbj:acme:forms:command:send-submission:1-0-0';
M.prototype.SCHEMA_CURIE = M.SCHEMA_CURIE = 'acme:forms:command:send-submission';
M.prototype.SCHEMA_CURIE_MAJOR = M.SCHEMA_CURIE_MAJOR = 'acme:forms:command:send-submission:v1';

M.prototype.MIXINS = M.MIXINS = [
  'gdbots:pbjx:mixin:command:v1',
  'gdbots:pbjx:mixin:command',
  'gdbots:forms:mixin:send-submission:v1',
  'gdbots:forms:mixin:send-submission',
  'gdbots:common:mixin:taggable:v1',
  'gdbots:common:mixin:taggable',
  'gdbots:enrichments:mixin:time-parting:v1',
  'gdbots:enrichments:mixin:time-parting',
  'gdbots:enrichments:mixin:time-sampling:v1',
  'gdbots:enrichments:mixin:time-sampling',
  'gdbots:enrichments:mixin:utm:v1',
  'gdbots:enrichments:mixin:utm',
];

M.prototype.COMMAND_ID_FIELD = M.COMMAND_ID_FIELD = 'command_id';
M.prototype.OCCURRED_AT_FIELD = M.OCCURRED_AT_FIELD = 'occurred_at';
M.prototype.EXPECTED_ETAG_FIELD = M.EXPECTED_ETAG_FIELD = 'expected_etag';
M.prototype.CTX_TENANT_ID_FIELD = M.CTX_TENANT_ID_FIELD = 'ctx_tenant_id';
M.prototype.CTX_RETRIES_FIELD = M.CTX_RETRIES_FIELD = 'ctx_retries';
M.prototype.CTX_CAUSATOR_FIELD = M.CTX_CAUSATOR_FIELD = 'ctx_causator';
M.prototype.CTX_CAUSATOR_REF_FIELD = M.CTX_CAUSATOR_REF_FIELD = 'ctx_causator_ref';
M.prototype.CTX_CORRELATOR_REF_FIELD = M.CTX_CORRELATOR_REF_FIELD = 'ctx_correlator_ref';
M.prototype.CTX_USER_REF_FIELD = M.CTX_USER_REF_FIELD = 'ctx_user_ref';
M.prototype.CTX_APP_FIELD = M.CTX_APP_FIELD = 'ctx_app';
M.prototype.CTX_CLOUD_FIELD = M.CTX_CLOUD_FIELD = 'ctx_cloud';
M.prototype.CTX_IP_FIELD = M.CTX_IP_FIELD = 'ctx_ip';
M.prototype.CTX_IPV6_FIELD = M.CTX_IPV6_FIELD = 'ctx_ipv6';
M.prototype.CTX_UA_FIELD = M.CTX_UA_FIELD = 'ctx_ua';
M.prototype.CTX_MSG_FIELD = M.CTX_MSG_FIELD = 'ctx_msg';
M.prototype.FORM_REF_FIELD = M.FORM_REF_FIELD = 'form_ref';
M.prototype.CF_FIELD = M.CF_FIELD = 'cf';
M.prototype.FILE_IDS_FIELD = M.FILE_IDS_FIELD = 'file_ids';
M.prototype.PPID_FIELD = M.PPID_FIELD = 'ppid';
M.prototype.HASHTAGS_FIELD = M.HASHTAGS_FIELD = 'hashtags';
M.prototype.TAGS_FIELD = M.TAGS_FIELD = 'tags';
M.prototype.MONTH_OF_YEAR_FIELD = M.MONTH_OF_YEAR_FIELD = 'month_of_year';
M.prototype.DAY_OF_MONTH_FIELD = M.DAY_OF_MONTH_FIELD = 'day_of_month';
M.prototype.DAY_OF_WEEK_FIELD = M.DAY_OF_WEEK_FIELD = 'day_of_week';
M.prototype.IS_WEEKEND_FIELD = M.IS_WEEKEND_FIELD = 'is_weekend';
M.prototype.HOUR_OF_DAY_FIELD = M.HOUR_OF_DAY_FIELD = 'hour_of_day';
M.prototype.TS_YMDH_FIELD = M.TS_YMDH_FIELD = 'ts_ymdh';
M.prototype.TS_YMD_FIELD = M.TS_YMD_FIELD = 'ts_ymd';
M.prototype.TS_YM_FIELD = M.TS_YM_FIELD = 'ts_ym';
M.prototype.UTM_SOURCE_FIELD = M.UTM_SOURCE_FIELD = 'utm_source';
M.prototype.UTM_MEDIUM_FIELD = M.UTM_MEDIUM_FIELD = 'utm_medium';
M.prototype.UTM_TERM_FIELD = M.UTM_TERM_FIELD = 'utm_term';
M.prototype.UTM_CONTENT_FIELD = M.UTM_CONTENT_FIELD = 'utm_content';
M.prototype.UTM_CAMPAIGN_FIELD = M.UTM_CAMPAIGN_FIELD = 'utm_campaign';
M.prototype.FIRST_NAME_FIELD = M.FIRST_NAME_FIELD = 'first_name';
M.prototype.LAST_NAME_FIELD = M.LAST_NAME_FIELD = 'last_name';
M.prototype.EMAIL_FIELD = M.EMAIL_FIELD = 'email';
M.prototype.EMAIL_DOMAIN_FIELD = M.EMAIL_DOMAIN_FIELD = 'email_domain';
M.prototype.ADDRESS_FIELD = M.ADDRESS_FIELD = 'address';
M.prototype.PHONE_FIELD = M.PHONE_FIELD = 'phone';
M.prototype.DOB_FIELD = M.DOB_FIELD = 'dob';
M.prototype.AGE_FIELD = M.AGE_FIELD = 'age';
M.prototype.HEIGHT_FIELD = M.HEIGHT_FIELD = 'height';
M.prototype.GENDER_FIELD = M.GENDER_FIELD = 'gender';
M.prototype.SEXUAL_ORIENTATION_FIELD = M.SEXUAL_ORIENTATION_FIELD = 'sexual_orientation';
M.prototype.STORY_FIELD = M.STORY_FIELD = 'story';
M.prototype.NETWORKS_FIELD = M.NETWORKS_FIELD = 'networks';

M.prototype.FIELDS = M.FIELDS = [
  M.COMMAND_ID_FIELD,
  M.OCCURRED_AT_FIELD,
  M.EXPECTED_ETAG_FIELD,
  M.CTX_TENANT_ID_FIELD,
  M.CTX_RETRIES_FIELD,
  M.CTX_CAUSATOR_FIELD,
  M.CTX_CAUSATOR_REF_FIELD,
  M.CTX_CORRELATOR_REF_FIELD,
  M.CTX_USER_REF_FIELD,
  M.CTX_APP_FIELD,
  M.CTX_CLOUD_FIELD,
  M.CTX_IP_FIELD,
  M.CTX_IPV6_FIELD,
  M.CTX_UA_FIELD,
  M.CTX_MSG_FIELD,
  M.FORM_REF_FIELD,
  M.CF_FIELD,
  M.FILE_IDS_FIELD,
  M.PPID_FIELD,
  M.HASHTAGS_FIELD,
  M.TAGS_FIELD,
  M.MONTH_OF_YEAR_FIELD,
  M.DAY_OF_MONTH_FIELD,
  M.DAY_OF_WEEK_FIELD,
  M.IS_WEEKEND_FIELD,
  M.HOUR_OF_DAY_FIELD,
  M.TS_YMDH_FIELD,
  M.TS_YMD_FIELD,
  M.TS_YM_FIELD,
  M.UTM_SOURCE_FIELD,
  M.UTM_MEDIUM_FIELD,
  M.UTM_TERM_FIELD,
  M.UTM_CONTENT_FIELD,
  M.UTM_CAMPAIGN_FIELD,
  M.FIRST_NAME_FIELD,
  M.LAST_NAME_FIELD,
  M.EMAIL_FIELD,
  M.EMAIL_DOMAIN_FIELD,
  M.ADDRESS_FIELD,
  M.PHONE_FIELD,
  M.DOB_FIELD,
  M.AGE_FIELD,
  M.HEIGHT_FIELD,
  M.GENDER_FIELD,
  M.SEXUAL_ORIENTATION_FIELD,
  M.STORY_FIELD,
  M.NETWORKS_FIELD,
];

GdbotsPbjxCommandV1Trait(M);

Object.freeze(M);
Object.freeze(M.prototype);
