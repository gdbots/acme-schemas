<?php
// @link http://acme-schemas.gdbots.io/json-schema/acme/forms/command/send-submission/1-0-0.json#
namespace Acme\Schemas\Forms\Command;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Enum\Format;
use Gdbots\Pbj\FieldBuilder as Fb;
use Gdbots\Pbj\Schema;
use Gdbots\Pbj\Type as T;
use Gdbots\Schemas\Common\Enum\Gender;
use Gdbots\Schemas\Common\Enum\SexualOrientation;
use Gdbots\Schemas\Common\Mixin\Taggable\TaggableV1 as GdbotsCommonTaggableV1;
use Gdbots\Schemas\Common\Mixin\Taggable\TaggableV1Mixin as GdbotsCommonTaggableV1Mixin;
use Gdbots\Schemas\Enrichments\Mixin\TimeParting\TimePartingV1 as GdbotsEnrichmentsTimePartingV1;
use Gdbots\Schemas\Enrichments\Mixin\TimeParting\TimePartingV1Mixin as GdbotsEnrichmentsTimePartingV1Mixin;
use Gdbots\Schemas\Enrichments\Mixin\TimeSampling\TimeSamplingV1 as GdbotsEnrichmentsTimeSamplingV1;
use Gdbots\Schemas\Enrichments\Mixin\TimeSampling\TimeSamplingV1Mixin as GdbotsEnrichmentsTimeSamplingV1Mixin;
use Gdbots\Schemas\Enrichments\Mixin\Utm\UtmV1 as GdbotsEnrichmentsUtmV1;
use Gdbots\Schemas\Enrichments\Mixin\Utm\UtmV1Mixin as GdbotsEnrichmentsUtmV1Mixin;
use Gdbots\Schemas\Forms\Mixin\SendSubmission\SendSubmissionV1 as GdbotsFormsSendSubmissionV1;
use Gdbots\Schemas\Forms\Mixin\SendSubmission\SendSubmissionV1Mixin as GdbotsFormsSendSubmissionV1Mixin;
use Gdbots\Schemas\Geo\Address as GdbotsGeoAddress;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1 as GdbotsPbjxCommandV1;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Mixin as GdbotsPbjxCommandV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Trait as GdbotsPbjxCommandV1Trait;

final class SendSubmissionV1 extends AbstractMessage implements
    SendSubmission,
    GdbotsPbjxCommandV1,
    GdbotsFormsSendSubmissionV1,
    GdbotsCommonTaggableV1,
    GdbotsEnrichmentsTimePartingV1,
    GdbotsEnrichmentsTimeSamplingV1,
    GdbotsEnrichmentsUtmV1
{
    use GdbotsPbjxCommandV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:acme:forms:command:send-submission:1-0-0', __CLASS__,
            [
                Fb::create('first_name', T\StringType::create())
                    ->build(),
                Fb::create('last_name', T\StringType::create())
                    ->build(),
                Fb::create('email', T\StringType::create())
                    ->format(Format::EMAIL())
                    ->build(),
                Fb::create('email_domain', T\StringType::create())
                    ->format(Format::HOSTNAME())
                    ->build(),
                Fb::create('address', T\MessageType::create())
                    ->anyOfClassNames([
                        GdbotsGeoAddress::class,
                    ])
                    ->build(),
                /*
                 * A general format for international telephone numbers.
                 * @link https://en.wikipedia.org/wiki/E.164
                 */
                Fb::create('phone', T\StringType::create())
                    ->asAMap()
                    ->maxLength(20)
                    ->pattern('^\+?[1-9]\d{1,14}$')
                    ->build(),
                Fb::create('dob', T\DateType::create())
                    ->build(),
                /*
                 * The "age" is generally populated if "dob" is present by using the difference of
                 * "dob" and "occurred_at" to determine the age at the time of the response.
                 */
                Fb::create('age', T\TinyIntType::create())
                    ->max(120)
                    ->build(),
                /*
                 * The person's physical height recorded in inches.
                 */
                Fb::create('height', T\TinyIntType::create())
                    ->max(120)
                    ->build(),
                Fb::create('gender', T\IntEnumType::create())
                    ->className(Gender::class)
                    ->build(),
                Fb::create('sexual_orientation', T\StringEnumType::create())
                    ->className(SexualOrientation::class)
                    ->build(),
                Fb::create('story', T\TextType::create())
                    ->build(),
                /*
                 * Networks is a map that contains handles/usernames on a social network.
                 * E.g. facebook:homer, twitter:stackoverflow, youtube:coltrane78.
                 */
                Fb::create('networks', T\StringType::create())
                    ->asAMap()
                    ->maxLength(50)
                    ->pattern('^[\w\.-]+$')
                    ->build(),
            ],
            [
                GdbotsPbjxCommandV1Mixin::create(),
                GdbotsFormsSendSubmissionV1Mixin::create(),
                GdbotsCommonTaggableV1Mixin::create(),
                GdbotsEnrichmentsTimePartingV1Mixin::create(),
                GdbotsEnrichmentsTimeSamplingV1Mixin::create(),
                GdbotsEnrichmentsUtmV1Mixin::create(),
            ]
        );
    }
}
