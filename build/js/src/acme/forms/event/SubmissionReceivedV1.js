// @link http://acme-schemas.gdbots.io/json-schema/acme/forms/event/submission-received/1-0-0.json#
import DayOfWeek from '@gdbots/schemas/gdbots/common/enums/DayOfWeek';
import Fb from '@gdbots/pbj/FieldBuilder';
import FileId from '@gdbots/schemas/gdbots/common/FileId';
import Format from '@gdbots/pbj/enums/Format';
import GdbotsPbjxEventV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Trait';
import Gender from '@gdbots/schemas/gdbots/common/enums/Gender';
import Message from '@gdbots/pbj/Message';
import Month from '@gdbots/schemas/gdbots/common/enums/Month';
import Schema from '@gdbots/pbj/Schema';
import SexualOrientation from '@gdbots/schemas/gdbots/common/enums/SexualOrientation';
import T from '@gdbots/pbj/types';

export default class SubmissionReceivedV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema(this.SCHEMA_ID, this,
      [
        Fb.create(this.EVENT_ID_FIELD, T.TimeUuidType.create())
          .required()
          .build(),
        Fb.create(this.OCCURRED_AT_FIELD, T.MicrotimeType.create())
          .build(),
        /*
         * Multi-tenant apps can use this field to track the tenant id.
         */
        Fb.create(this.CTX_TENANT_ID_FIELD, T.StringType.create())
          .pattern('^[\\w\\/\\.:-]+$')
          .build(),
        Fb.create(this.CTX_CAUSATOR_REF_FIELD, T.MessageRefType.create())
          .build(),
        Fb.create(this.CTX_CORRELATOR_REF_FIELD, T.MessageRefType.create())
          .build(),
        Fb.create(this.CTX_USER_REF_FIELD, T.MessageRefType.create())
          .build(),
        /*
         * The "ctx_app" refers to the application used to send the command which
         * in turn resulted in this event being published.
         */
        Fb.create(this.CTX_APP_FIELD, T.MessageType.create())
          .anyOfCuries([
            'gdbots:contexts::app',
          ])
          .build(),
        /*
         * The "ctx_cloud" is usually copied from the command that resulted in this
         * event being published. This means the value most likely refers to the cloud
         * that received the command originally, not the machine processing the event.
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
         * An optional message/reason for the event being created.
         * Consider this like a git commit message.
         */
        Fb.create(this.CTX_MSG_FIELD, T.TextType.create())
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
        Fb.create(this.CTX_IP_GEO_FIELD, T.MessageType.create())
          .anyOfCuries([
            'gdbots:geo::address',
          ])
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
        Fb.create(this.CTX_UA_PARSED_FIELD, T.MessageType.create())
          .anyOfCuries([
            'gdbots:contexts::user-agent',
          ])
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
        Fb.create(this.FORM_REF_FIELD, T.NodeRefType.create())
          .required()
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
         * "dob" and "occurred_at" to determine the age at the time of the submission.
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
          .withDefault(Gender.UNKNOWN)
          .classProto(Gender)
          .build(),
        Fb.create(this.SEXUAL_ORIENTATION_FIELD, T.StringEnumType.create())
          .classProto(SexualOrientation)
          .build(),
        Fb.create(this.STORY_FIELD, T.TextType.create())
          .build(),
        Fb.create(this.FILE_IDS_FIELD, T.IdentifierType.create())
          .asASet()
          .classProto(FileId)
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
        /*
         * Mentions contains the usernames extracted from the "networks" map and possibly
         * parsed from other text fields. Makes it possible to search @mentions.
         */
        Fb.create(this.MENTIONS_FIELD, T.StringType.create())
          .asASet()
          .maxLength(50)
          .pattern('^[\\w\\.-]+$')
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
         * Contains all of the answers submitted from the custom fields on the form.
         */
        Fb.create(this.CF_FIELD, T.DynamicFieldType.create())
          .asAList()
          .build(),
        /*
         * "s256" means shard 256. Used to distribute read/write from storage and speed up
         * replay/reindex processes. It can also be used to distribute workload in front end
         * user interfaces or notifications (like isles in a grocery store).
         * This value should NOT change once set.
         */
        Fb.create(this.S256_FIELD, T.TinyIntType.create())
          .build(),
        /*
         * "s32" means shard 32. See field "s256" for explanation.
         */
        Fb.create(this.S32_FIELD, T.TinyIntType.create())
          .build(),
        /*
         * "s16" means shard 16. See field "s256" for explanation.
         */
        Fb.create(this.S16_FIELD, T.TinyIntType.create())
          .build(),
      ],
      this.MIXINS,
    );
  }
}

const M = SubmissionReceivedV1;
M.prototype.SCHEMA_ID = M.SCHEMA_ID = 'pbj:acme:forms:event:submission-received:1-0-0';
M.prototype.SCHEMA_CURIE = M.SCHEMA_CURIE = 'acme:forms:event:submission-received';
M.prototype.SCHEMA_CURIE_MAJOR = M.SCHEMA_CURIE_MAJOR = 'acme:forms:event:submission-received:v1';

M.prototype.MIXINS = M.MIXINS = [
  'gdbots:pbjx:mixin:event:v1',
  'gdbots:pbjx:mixin:event',
  'gdbots:analytics:mixin:tracked-message:v1',
  'gdbots:analytics:mixin:tracked-message',
  'gdbots:common:mixin:taggable:v1',
  'gdbots:common:mixin:taggable',
  'gdbots:enrichments:mixin:ip-to-geo:v1',
  'gdbots:enrichments:mixin:ip-to-geo',
  'gdbots:enrichments:mixin:time-parting:v1',
  'gdbots:enrichments:mixin:time-parting',
  'gdbots:enrichments:mixin:time-sampling:v1',
  'gdbots:enrichments:mixin:time-sampling',
  'gdbots:enrichments:mixin:ua-parser:v1',
  'gdbots:enrichments:mixin:ua-parser',
  'gdbots:enrichments:mixin:utm:v1',
  'gdbots:enrichments:mixin:utm',
  'gdbots:pbjx:mixin:indexed:v1',
  'gdbots:pbjx:mixin:indexed',
];

M.prototype.EVENT_ID_FIELD = M.EVENT_ID_FIELD = 'event_id';
M.prototype.OCCURRED_AT_FIELD = M.OCCURRED_AT_FIELD = 'occurred_at';
M.prototype.CTX_TENANT_ID_FIELD = M.CTX_TENANT_ID_FIELD = 'ctx_tenant_id';
M.prototype.CTX_CAUSATOR_REF_FIELD = M.CTX_CAUSATOR_REF_FIELD = 'ctx_causator_ref';
M.prototype.CTX_CORRELATOR_REF_FIELD = M.CTX_CORRELATOR_REF_FIELD = 'ctx_correlator_ref';
M.prototype.CTX_USER_REF_FIELD = M.CTX_USER_REF_FIELD = 'ctx_user_ref';
M.prototype.CTX_APP_FIELD = M.CTX_APP_FIELD = 'ctx_app';
M.prototype.CTX_CLOUD_FIELD = M.CTX_CLOUD_FIELD = 'ctx_cloud';
M.prototype.CTX_IP_FIELD = M.CTX_IP_FIELD = 'ctx_ip';
M.prototype.CTX_IPV6_FIELD = M.CTX_IPV6_FIELD = 'ctx_ipv6';
M.prototype.CTX_UA_FIELD = M.CTX_UA_FIELD = 'ctx_ua';
M.prototype.CTX_MSG_FIELD = M.CTX_MSG_FIELD = 'ctx_msg';
M.prototype.TAGS_FIELD = M.TAGS_FIELD = 'tags';
M.prototype.CTX_IP_GEO_FIELD = M.CTX_IP_GEO_FIELD = 'ctx_ip_geo';
M.prototype.MONTH_OF_YEAR_FIELD = M.MONTH_OF_YEAR_FIELD = 'month_of_year';
M.prototype.DAY_OF_MONTH_FIELD = M.DAY_OF_MONTH_FIELD = 'day_of_month';
M.prototype.DAY_OF_WEEK_FIELD = M.DAY_OF_WEEK_FIELD = 'day_of_week';
M.prototype.IS_WEEKEND_FIELD = M.IS_WEEKEND_FIELD = 'is_weekend';
M.prototype.HOUR_OF_DAY_FIELD = M.HOUR_OF_DAY_FIELD = 'hour_of_day';
M.prototype.TS_YMDH_FIELD = M.TS_YMDH_FIELD = 'ts_ymdh';
M.prototype.TS_YMD_FIELD = M.TS_YMD_FIELD = 'ts_ymd';
M.prototype.TS_YM_FIELD = M.TS_YM_FIELD = 'ts_ym';
M.prototype.CTX_UA_PARSED_FIELD = M.CTX_UA_PARSED_FIELD = 'ctx_ua_parsed';
M.prototype.UTM_SOURCE_FIELD = M.UTM_SOURCE_FIELD = 'utm_source';
M.prototype.UTM_MEDIUM_FIELD = M.UTM_MEDIUM_FIELD = 'utm_medium';
M.prototype.UTM_TERM_FIELD = M.UTM_TERM_FIELD = 'utm_term';
M.prototype.UTM_CONTENT_FIELD = M.UTM_CONTENT_FIELD = 'utm_content';
M.prototype.UTM_CAMPAIGN_FIELD = M.UTM_CAMPAIGN_FIELD = 'utm_campaign';
M.prototype.FORM_REF_FIELD = M.FORM_REF_FIELD = 'form_ref';
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
M.prototype.FILE_IDS_FIELD = M.FILE_IDS_FIELD = 'file_ids';
M.prototype.NETWORKS_FIELD = M.NETWORKS_FIELD = 'networks';
M.prototype.MENTIONS_FIELD = M.MENTIONS_FIELD = 'mentions';
M.prototype.PPID_FIELD = M.PPID_FIELD = 'ppid';
M.prototype.HASHTAGS_FIELD = M.HASHTAGS_FIELD = 'hashtags';
M.prototype.CF_FIELD = M.CF_FIELD = 'cf';
M.prototype.S256_FIELD = M.S256_FIELD = 's256';
M.prototype.S32_FIELD = M.S32_FIELD = 's32';
M.prototype.S16_FIELD = M.S16_FIELD = 's16';

M.prototype.FIELDS = M.FIELDS = [
  M.EVENT_ID_FIELD,
  M.OCCURRED_AT_FIELD,
  M.CTX_TENANT_ID_FIELD,
  M.CTX_CAUSATOR_REF_FIELD,
  M.CTX_CORRELATOR_REF_FIELD,
  M.CTX_USER_REF_FIELD,
  M.CTX_APP_FIELD,
  M.CTX_CLOUD_FIELD,
  M.CTX_IP_FIELD,
  M.CTX_IPV6_FIELD,
  M.CTX_UA_FIELD,
  M.CTX_MSG_FIELD,
  M.TAGS_FIELD,
  M.CTX_IP_GEO_FIELD,
  M.MONTH_OF_YEAR_FIELD,
  M.DAY_OF_MONTH_FIELD,
  M.DAY_OF_WEEK_FIELD,
  M.IS_WEEKEND_FIELD,
  M.HOUR_OF_DAY_FIELD,
  M.TS_YMDH_FIELD,
  M.TS_YMD_FIELD,
  M.TS_YM_FIELD,
  M.CTX_UA_PARSED_FIELD,
  M.UTM_SOURCE_FIELD,
  M.UTM_MEDIUM_FIELD,
  M.UTM_TERM_FIELD,
  M.UTM_CONTENT_FIELD,
  M.UTM_CAMPAIGN_FIELD,
  M.FORM_REF_FIELD,
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
  M.FILE_IDS_FIELD,
  M.NETWORKS_FIELD,
  M.MENTIONS_FIELD,
  M.PPID_FIELD,
  M.HASHTAGS_FIELD,
  M.CF_FIELD,
  M.S256_FIELD,
  M.S32_FIELD,
  M.S16_FIELD,
];

GdbotsPbjxEventV1Trait(M);

Object.freeze(M);
Object.freeze(M.prototype);
