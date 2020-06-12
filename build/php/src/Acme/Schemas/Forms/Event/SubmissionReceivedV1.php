<?php
declare(strict_types=1);

// @link http://acme-schemas.gdbots.io/json-schema/acme/forms/event/submission-received/1-0-0.json#
namespace Acme\Schemas\Forms\Event;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Enum\Format;
use Gdbots\Pbj\FieldBuilder as Fb;
use Gdbots\Pbj\Schema;
use Gdbots\Pbj\Type as T;
use Gdbots\Schemas\Common\Enum\DayOfWeek;
use Gdbots\Schemas\Common\Enum\Gender;
use Gdbots\Schemas\Common\Enum\Month;
use Gdbots\Schemas\Common\Enum\SexualOrientation;
use Gdbots\Schemas\Common\FileId;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1Trait as GdbotsPbjxEventV1Trait;

final class SubmissionReceivedV1 extends AbstractMessage
{
    const SCHEMA_ID = 'pbj:acme:forms:event:submission-received:1-0-0';
    const SCHEMA_CURIE = 'acme:forms:event:submission-received';
    const SCHEMA_CURIE_MAJOR = 'acme:forms:event:submission-received:v1';

    const MIXINS = [
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

    const EVENT_ID_FIELD = 'event_id';
    const OCCURRED_AT_FIELD = 'occurred_at';
    const CTX_TENANT_ID_FIELD = 'ctx_tenant_id';
    const CTX_CAUSATOR_REF_FIELD = 'ctx_causator_ref';
    const CTX_CORRELATOR_REF_FIELD = 'ctx_correlator_ref';
    const CTX_USER_REF_FIELD = 'ctx_user_ref';
    const CTX_APP_FIELD = 'ctx_app';
    const CTX_CLOUD_FIELD = 'ctx_cloud';
    const CTX_IP_FIELD = 'ctx_ip';
    const CTX_IPV6_FIELD = 'ctx_ipv6';
    const CTX_UA_FIELD = 'ctx_ua';
    const CTX_MSG_FIELD = 'ctx_msg';
    const TAGS_FIELD = 'tags';
    const CTX_IP_GEO_FIELD = 'ctx_ip_geo';
    const MONTH_OF_YEAR_FIELD = 'month_of_year';
    const DAY_OF_MONTH_FIELD = 'day_of_month';
    const DAY_OF_WEEK_FIELD = 'day_of_week';
    const IS_WEEKEND_FIELD = 'is_weekend';
    const HOUR_OF_DAY_FIELD = 'hour_of_day';
    const TS_YMDH_FIELD = 'ts_ymdh';
    const TS_YMD_FIELD = 'ts_ymd';
    const TS_YM_FIELD = 'ts_ym';
    const CTX_UA_PARSED_FIELD = 'ctx_ua_parsed';
    const UTM_SOURCE_FIELD = 'utm_source';
    const UTM_MEDIUM_FIELD = 'utm_medium';
    const UTM_TERM_FIELD = 'utm_term';
    const UTM_CONTENT_FIELD = 'utm_content';
    const UTM_CAMPAIGN_FIELD = 'utm_campaign';
    const FORM_REF_FIELD = 'form_ref';
    const FIRST_NAME_FIELD = 'first_name';
    const LAST_NAME_FIELD = 'last_name';
    const EMAIL_FIELD = 'email';
    const EMAIL_DOMAIN_FIELD = 'email_domain';
    const ADDRESS_FIELD = 'address';
    const PHONE_FIELD = 'phone';
    const DOB_FIELD = 'dob';
    const AGE_FIELD = 'age';
    const HEIGHT_FIELD = 'height';
    const GENDER_FIELD = 'gender';
    const SEXUAL_ORIENTATION_FIELD = 'sexual_orientation';
    const STORY_FIELD = 'story';
    const FILE_IDS_FIELD = 'file_ids';
    const NETWORKS_FIELD = 'networks';
    const MENTIONS_FIELD = 'mentions';
    const PPID_FIELD = 'ppid';
    const HASHTAGS_FIELD = 'hashtags';
    const CF_FIELD = 'cf';
    const S256_FIELD = 's256';
    const S32_FIELD = 's32';
    const S16_FIELD = 's16';

    const FIELDS = [
      self::EVENT_ID_FIELD,
      self::OCCURRED_AT_FIELD,
      self::CTX_TENANT_ID_FIELD,
      self::CTX_CAUSATOR_REF_FIELD,
      self::CTX_CORRELATOR_REF_FIELD,
      self::CTX_USER_REF_FIELD,
      self::CTX_APP_FIELD,
      self::CTX_CLOUD_FIELD,
      self::CTX_IP_FIELD,
      self::CTX_IPV6_FIELD,
      self::CTX_UA_FIELD,
      self::CTX_MSG_FIELD,
      self::TAGS_FIELD,
      self::CTX_IP_GEO_FIELD,
      self::MONTH_OF_YEAR_FIELD,
      self::DAY_OF_MONTH_FIELD,
      self::DAY_OF_WEEK_FIELD,
      self::IS_WEEKEND_FIELD,
      self::HOUR_OF_DAY_FIELD,
      self::TS_YMDH_FIELD,
      self::TS_YMD_FIELD,
      self::TS_YM_FIELD,
      self::CTX_UA_PARSED_FIELD,
      self::UTM_SOURCE_FIELD,
      self::UTM_MEDIUM_FIELD,
      self::UTM_TERM_FIELD,
      self::UTM_CONTENT_FIELD,
      self::UTM_CAMPAIGN_FIELD,
      self::FORM_REF_FIELD,
      self::FIRST_NAME_FIELD,
      self::LAST_NAME_FIELD,
      self::EMAIL_FIELD,
      self::EMAIL_DOMAIN_FIELD,
      self::ADDRESS_FIELD,
      self::PHONE_FIELD,
      self::DOB_FIELD,
      self::AGE_FIELD,
      self::HEIGHT_FIELD,
      self::GENDER_FIELD,
      self::SEXUAL_ORIENTATION_FIELD,
      self::STORY_FIELD,
      self::FILE_IDS_FIELD,
      self::NETWORKS_FIELD,
      self::MENTIONS_FIELD,
      self::PPID_FIELD,
      self::HASHTAGS_FIELD,
      self::CF_FIELD,
      self::S256_FIELD,
      self::S32_FIELD,
      self::S16_FIELD,
    ];

    use GdbotsPbjxEventV1Trait;

    protected static function defineSchema(): Schema
    {
        return new Schema(self::SCHEMA_ID, __CLASS__,
            [
                Fb::create(self::EVENT_ID_FIELD, T\TimeUuidType::create())
                    ->required()
                    ->build(),
                Fb::create(self::OCCURRED_AT_FIELD, T\MicrotimeType::create())
                    ->build(),
                /*
                 * Multi-tenant apps can use this field to track the tenant id.
                 */
                Fb::create(self::CTX_TENANT_ID_FIELD, T\StringType::create())
                    ->pattern('^[\w\/\.:-]+$')
                    ->build(),
                Fb::create(self::CTX_CAUSATOR_REF_FIELD, T\MessageRefType::create())
                    ->build(),
                Fb::create(self::CTX_CORRELATOR_REF_FIELD, T\MessageRefType::create())
                    ->build(),
                Fb::create(self::CTX_USER_REF_FIELD, T\MessageRefType::create())
                    ->build(),
                /*
                 * The "ctx_app" refers to the application used to send the command which
                 * in turn resulted in this event being published.
                 */
                Fb::create(self::CTX_APP_FIELD, T\MessageType::create())
                    ->anyOfCuries([
                        'gdbots:contexts::app',
                    ])
                    ->build(),
                /*
                 * The "ctx_cloud" is usually copied from the command that resulted in this
                 * event being published. This means the value most likely refers to the cloud
                 * that received the command originally, not the machine processing the event.
                 */
                Fb::create(self::CTX_CLOUD_FIELD, T\MessageType::create())
                    ->anyOfCuries([
                        'gdbots:contexts::cloud',
                    ])
                    ->build(),
                Fb::create(self::CTX_IP_FIELD, T\StringType::create())
                    ->format(Format::IPV4())
                    ->overridable(true)
                    ->build(),
                Fb::create(self::CTX_IPV6_FIELD, T\StringType::create())
                    ->format(Format::IPV6())
                    ->overridable(true)
                    ->build(),
                Fb::create(self::CTX_UA_FIELD, T\TextType::create())
                    ->overridable(true)
                    ->build(),
                /*
                 * An optional message/reason for the event being created.
                 * Consider this like a git commit message.
                 */
                Fb::create(self::CTX_MSG_FIELD, T\TextType::create())
                    ->build(),
                /*
                 * Tags is a map that categorizes data or tracks references in
                 * external systems. The tags names should be consistent and descriptive,
                 * e.g. fb_user_id:123, salesforce_customer_id:456.
                 */
                Fb::create(self::TAGS_FIELD, T\StringType::create())
                    ->asAMap()
                    ->pattern('^[\w\/\.:-]+$')
                    ->build(),
                Fb::create(self::CTX_IP_GEO_FIELD, T\MessageType::create())
                    ->anyOfCuries([
                        'gdbots:geo::address',
                    ])
                    ->build(),
                Fb::create(self::MONTH_OF_YEAR_FIELD, T\IntEnumType::create())
                    ->withDefault(0)
                    ->className(Month::class)
                    ->build(),
                Fb::create(self::DAY_OF_MONTH_FIELD, T\TinyIntType::create())
                    ->max(31)
                    ->build(),
                Fb::create(self::DAY_OF_WEEK_FIELD, T\IntEnumType::create())
                    ->withDefault(0)
                    ->className(DayOfWeek::class)
                    ->build(),
                Fb::create(self::IS_WEEKEND_FIELD, T\BooleanType::create())
                    ->build(),
                Fb::create(self::HOUR_OF_DAY_FIELD, T\TinyIntType::create())
                    ->max(23)
                    ->build(),
                Fb::create(self::TS_YMDH_FIELD, T\IntType::create())
                    ->build(),
                Fb::create(self::TS_YMD_FIELD, T\IntType::create())
                    ->build(),
                Fb::create(self::TS_YM_FIELD, T\MediumIntType::create())
                    ->build(),
                Fb::create(self::CTX_UA_PARSED_FIELD, T\MessageType::create())
                    ->anyOfCuries([
                        'gdbots:contexts::user-agent',
                    ])
                    ->build(),
                Fb::create(self::UTM_SOURCE_FIELD, T\StringType::create())
                    ->maxLength(50)
                    ->pattern('^[\w\/\.:-]+$')
                    ->build(),
                Fb::create(self::UTM_MEDIUM_FIELD, T\StringType::create())
                    ->maxLength(50)
                    ->pattern('^[\w\/\.:-]+$')
                    ->build(),
                Fb::create(self::UTM_TERM_FIELD, T\StringType::create())
                    ->maxLength(100)
                    ->pattern('^[\w\s\/\.,:-]+$')
                    ->build(),
                Fb::create(self::UTM_CONTENT_FIELD, T\StringType::create())
                    ->maxLength(50)
                    ->pattern('^[\w\/\.:-]+$')
                    ->build(),
                Fb::create(self::UTM_CAMPAIGN_FIELD, T\StringType::create())
                    ->maxLength(50)
                    ->pattern('^[\w\/\.:-]+$')
                    ->build(),
                Fb::create(self::FORM_REF_FIELD, T\NodeRefType::create())
                    ->required()
                    ->build(),
                Fb::create(self::FIRST_NAME_FIELD, T\StringType::create())
                    ->build(),
                Fb::create(self::LAST_NAME_FIELD, T\StringType::create())
                    ->build(),
                Fb::create(self::EMAIL_FIELD, T\StringType::create())
                    ->format(Format::EMAIL())
                    ->build(),
                Fb::create(self::EMAIL_DOMAIN_FIELD, T\StringType::create())
                    ->format(Format::HOSTNAME())
                    ->build(),
                Fb::create(self::ADDRESS_FIELD, T\MessageType::create())
                    ->anyOfCuries([
                        'gdbots:geo::address',
                    ])
                    ->build(),
                /*
                 * A general format for international telephone numbers.
                 * @link https://en.wikipedia.org/wiki/E.164
                 */
                Fb::create(self::PHONE_FIELD, T\StringType::create())
                    ->asAMap()
                    ->maxLength(20)
                    ->pattern('^\+?[1-9]\d{1,14}$')
                    ->build(),
                Fb::create(self::DOB_FIELD, T\DateType::create())
                    ->build(),
                /*
                 * The "age" is generally populated if "dob" is present by using the difference of
                 * "dob" and "occurred_at" to determine the age at the time of the submission.
                 */
                Fb::create(self::AGE_FIELD, T\TinyIntType::create())
                    ->max(120)
                    ->build(),
                /*
                 * The person's physical height recorded in inches.
                 */
                Fb::create(self::HEIGHT_FIELD, T\TinyIntType::create())
                    ->max(120)
                    ->build(),
                Fb::create(self::GENDER_FIELD, T\IntEnumType::create())
                    ->withDefault(Gender::UNKNOWN())
                    ->className(Gender::class)
                    ->build(),
                Fb::create(self::SEXUAL_ORIENTATION_FIELD, T\StringEnumType::create())
                    ->className(SexualOrientation::class)
                    ->build(),
                Fb::create(self::STORY_FIELD, T\TextType::create())
                    ->build(),
                Fb::create(self::FILE_IDS_FIELD, T\IdentifierType::create())
                    ->asASet()
                    ->className(FileId::class)
                    ->build(),
                /*
                 * Networks is a map that contains handles/usernames on a social network.
                 * E.g. facebook:homer, twitter:stackoverflow, youtube:coltrane78.
                 */
                Fb::create(self::NETWORKS_FIELD, T\StringType::create())
                    ->asAMap()
                    ->maxLength(50)
                    ->pattern('^[\w\.-]+$')
                    ->build(),
                /*
                 * Mentions contains the usernames extracted from the "networks" map and possibly
                 * parsed from other text fields. Makes it possible to search @mentions.
                 */
                Fb::create(self::MENTIONS_FIELD, T\StringType::create())
                    ->asASet()
                    ->maxLength(50)
                    ->pattern('^[\w\.-]+$')
                    ->build(),
                /*
                 * Publisher provided identifier (PPID)
                 */
                Fb::create(self::PPID_FIELD, T\StringType::create())
                    ->pattern('^[\w\/\.:-]+$')
                    ->build(),
                Fb::create(self::HASHTAGS_FIELD, T\StringType::create())
                    ->asASet()
                    ->format(Format::HASHTAG())
                    ->build(),
                /*
                 * Contains all of the answers submitted from the custom fields on the form.
                 */
                Fb::create(self::CF_FIELD, T\DynamicFieldType::create())
                    ->asAList()
                    ->build(),
                /*
                 * "s256" means shard 256. Used to distribute read/write from storage and speed up
                 * replay/reindex processes. It can also be used to distribute workload in front end
                 * user interfaces or notifications (like isles in a grocery store).
                 * This value should NOT change once set.
                 */
                Fb::create(self::S256_FIELD, T\TinyIntType::create())
                    ->build(),
                /*
                 * "s32" means shard 32. See field "s256" for explanation.
                 */
                Fb::create(self::S32_FIELD, T\TinyIntType::create())
                    ->build(),
                /*
                 * "s16" means shard 16. See field "s256" for explanation.
                 */
                Fb::create(self::S16_FIELD, T\TinyIntType::create())
                    ->build(),
            ],
            self::MIXINS
        );
    }
}
