<?php
declare(strict_types=1);

// @link http://acme-schemas.gdbots.io/json-schema/acme/forms/command/send-submission/1-0-0.json#
namespace Acme\Schemas\Forms\Command;

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
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Trait as GdbotsPbjxCommandV1Trait;

final class SendSubmissionV1 extends AbstractMessage
{
    const SCHEMA_ID = 'pbj:acme:forms:command:send-submission:1-0-0';
    const SCHEMA_CURIE = 'acme:forms:command:send-submission';
    const SCHEMA_CURIE_MAJOR = 'acme:forms:command:send-submission:v1';

    const MIXINS = [
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

    const COMMAND_ID_FIELD = 'command_id';
    const OCCURRED_AT_FIELD = 'occurred_at';
    const EXPECTED_ETAG_FIELD = 'expected_etag';
    const CTX_TENANT_ID_FIELD = 'ctx_tenant_id';
    const CTX_RETRIES_FIELD = 'ctx_retries';
    const CTX_CAUSATOR_FIELD = 'ctx_causator';
    const CTX_CAUSATOR_REF_FIELD = 'ctx_causator_ref';
    const CTX_CORRELATOR_REF_FIELD = 'ctx_correlator_ref';
    const CTX_USER_REF_FIELD = 'ctx_user_ref';
    const CTX_APP_FIELD = 'ctx_app';
    const CTX_CLOUD_FIELD = 'ctx_cloud';
    const CTX_IP_FIELD = 'ctx_ip';
    const CTX_IPV6_FIELD = 'ctx_ipv6';
    const CTX_UA_FIELD = 'ctx_ua';
    const CTX_MSG_FIELD = 'ctx_msg';
    const FORM_REF_FIELD = 'form_ref';
    const CF_FIELD = 'cf';
    const FILE_IDS_FIELD = 'file_ids';
    const PPID_FIELD = 'ppid';
    const HASHTAGS_FIELD = 'hashtags';
    const TAGS_FIELD = 'tags';
    const MONTH_OF_YEAR_FIELD = 'month_of_year';
    const DAY_OF_MONTH_FIELD = 'day_of_month';
    const DAY_OF_WEEK_FIELD = 'day_of_week';
    const IS_WEEKEND_FIELD = 'is_weekend';
    const HOUR_OF_DAY_FIELD = 'hour_of_day';
    const TS_YMDH_FIELD = 'ts_ymdh';
    const TS_YMD_FIELD = 'ts_ymd';
    const TS_YM_FIELD = 'ts_ym';
    const UTM_SOURCE_FIELD = 'utm_source';
    const UTM_MEDIUM_FIELD = 'utm_medium';
    const UTM_TERM_FIELD = 'utm_term';
    const UTM_CONTENT_FIELD = 'utm_content';
    const UTM_CAMPAIGN_FIELD = 'utm_campaign';
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
    const NETWORKS_FIELD = 'networks';

    const FIELDS = [
      self::COMMAND_ID_FIELD,
      self::OCCURRED_AT_FIELD,
      self::EXPECTED_ETAG_FIELD,
      self::CTX_TENANT_ID_FIELD,
      self::CTX_RETRIES_FIELD,
      self::CTX_CAUSATOR_FIELD,
      self::CTX_CAUSATOR_REF_FIELD,
      self::CTX_CORRELATOR_REF_FIELD,
      self::CTX_USER_REF_FIELD,
      self::CTX_APP_FIELD,
      self::CTX_CLOUD_FIELD,
      self::CTX_IP_FIELD,
      self::CTX_IPV6_FIELD,
      self::CTX_UA_FIELD,
      self::CTX_MSG_FIELD,
      self::FORM_REF_FIELD,
      self::CF_FIELD,
      self::FILE_IDS_FIELD,
      self::PPID_FIELD,
      self::HASHTAGS_FIELD,
      self::TAGS_FIELD,
      self::MONTH_OF_YEAR_FIELD,
      self::DAY_OF_MONTH_FIELD,
      self::DAY_OF_WEEK_FIELD,
      self::IS_WEEKEND_FIELD,
      self::HOUR_OF_DAY_FIELD,
      self::TS_YMDH_FIELD,
      self::TS_YMD_FIELD,
      self::TS_YM_FIELD,
      self::UTM_SOURCE_FIELD,
      self::UTM_MEDIUM_FIELD,
      self::UTM_TERM_FIELD,
      self::UTM_CONTENT_FIELD,
      self::UTM_CAMPAIGN_FIELD,
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
      self::NETWORKS_FIELD,
    ];

    use GdbotsPbjxCommandV1Trait;

    protected static function defineSchema(): Schema
    {
        return new Schema(self::SCHEMA_ID, __CLASS__,
            [
                Fb::create(self::COMMAND_ID_FIELD, T\TimeUuidType::create())
                    ->required()
                    ->build(),
                Fb::create(self::OCCURRED_AT_FIELD, T\MicrotimeType::create())
                    ->build(),
                /*
                 * Used to perform optimistic concurrency control.
                 * @link https://en.wikipedia.org/wiki/HTTP_ETag
                 */
                Fb::create(self::EXPECTED_ETAG_FIELD, T\StringType::create())
                    ->maxLength(100)
                    ->pattern('^[\w\.:-]+$')
                    ->build(),
                /*
                 * Multi-tenant apps can use this field to track the tenant id.
                 */
                Fb::create(self::CTX_TENANT_ID_FIELD, T\StringType::create())
                    ->pattern('^[\w\/\.:-]+$')
                    ->build(),
                /*
                 * The "ctx_retries" field is used to keep track of how many attempts were
                 * made to process this command. In some cases, the service or transport
                 * that handles the command may be down or an optimistic check has failed
                 * and is being retried.
                 */
                Fb::create(self::CTX_RETRIES_FIELD, T\TinyIntType::create())
                    ->build(),
                /*
                 * The "ctx_causator" is the actual causator object that "ctx_causator_ref"
                 * refers to. In some cases it's useful for command handlers to copy the
                 * causator into the command. For example, when a node is being updated we
                 * may want to know what the node will be after the update. We can derive
                 * this via the causator instead of requesting the node and engaging a race
                 * condition.
                 */
                Fb::create(self::CTX_CAUSATOR_FIELD, T\MessageType::create())
                    ->build(),
                Fb::create(self::CTX_CAUSATOR_REF_FIELD, T\MessageRefType::create())
                    ->build(),
                Fb::create(self::CTX_CORRELATOR_REF_FIELD, T\MessageRefType::create())
                    ->build(),
                Fb::create(self::CTX_USER_REF_FIELD, T\MessageRefType::create())
                    ->build(),
                /*
                 * The "ctx_app" refers to the application used to send the command. This is
                 * different from ctx_ua (user_agent) because the agent used (Safari, Firefox)
                 * is not necessarily the app used (cms, iOS app, website)
                 */
                Fb::create(self::CTX_APP_FIELD, T\MessageType::create())
                    ->anyOfCuries([
                        'gdbots:contexts::app',
                    ])
                    ->build(),
                /*
                 * The "ctx_cloud" is set by the server receiving the command and is generally
                 * only used internally for tracking and performance monitoring.
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
                 * An optional message/reason for the command being sent.
                 * Consider this like a git commit message.
                 */
                Fb::create(self::CTX_MSG_FIELD, T\TextType::create())
                    ->build(),
                Fb::create(self::FORM_REF_FIELD, T\NodeRefType::create())
                    ->required()
                    ->build(),
                /*
                 * Contains answers submitted from the fields on the form.
                 */
                Fb::create(self::CF_FIELD, T\DynamicFieldType::create())
                    ->asAList()
                    ->build(),
                /*
                 * Any files uploaded should have the IDs copied here in addition to
                 * being present in the "cf" field (or whereever they are mapped to).
                 */
                Fb::create(self::FILE_IDS_FIELD, T\IdentifierType::create())
                    ->asASet()
                    ->className(FileId::class)
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
                 * Tags is a map that categorizes data or tracks references in
                 * external systems. The tags names should be consistent and descriptive,
                 * e.g. fb_user_id:123, salesforce_customer_id:456.
                 */
                Fb::create(self::TAGS_FIELD, T\StringType::create())
                    ->asAMap()
                    ->pattern('^[\w\/\.:-]+$')
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
                 * "dob" and "occurred_at" to determine the age at the time of the response.
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
                    ->className(Gender::class)
                    ->build(),
                Fb::create(self::SEXUAL_ORIENTATION_FIELD, T\StringEnumType::create())
                    ->className(SexualOrientation::class)
                    ->build(),
                Fb::create(self::STORY_FIELD, T\TextType::create())
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
            ],
            self::MIXINS
        );
    }
}
