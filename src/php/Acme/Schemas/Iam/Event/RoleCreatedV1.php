<?php

namespace Acme\Schemas\Iam\Event;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\FieldBuilder as Fb;
use Gdbots\Pbj\Schema;
use Gdbots\Pbj\Type as T;
use Gdbots\Schemas\Analytics\Mixin\TrackedMessage\TrackedMessageV1;
use Gdbots\Schemas\Analytics\Mixin\TrackedMessage\TrackedMessageV1Mixin;
use Gdbots\Schemas\Analytics\Mixin\TrackedMessage\TrackedMessageV1Trait;
use Gdbots\Schemas\Enrichments\Mixin\IpToGeo\IpToGeoV1;
use Gdbots\Schemas\Enrichments\Mixin\IpToGeo\IpToGeoV1Mixin;
use Gdbots\Schemas\Enrichments\Mixin\IpToGeo\IpToGeoV1Trait;
use Gdbots\Schemas\Enrichments\Mixin\TimeParting\TimePartingV1;
use Gdbots\Schemas\Enrichments\Mixin\TimeParting\TimePartingV1Mixin;
use Gdbots\Schemas\Enrichments\Mixin\TimeParting\TimePartingV1Trait;
use Gdbots\Schemas\Enrichments\Mixin\TimeSampling\TimeSamplingV1;
use Gdbots\Schemas\Enrichments\Mixin\TimeSampling\TimeSamplingV1Mixin;
use Gdbots\Schemas\Enrichments\Mixin\TimeSampling\TimeSamplingV1Trait;
use Gdbots\Schemas\Enrichments\Mixin\UaParser\UaParserV1;
use Gdbots\Schemas\Enrichments\Mixin\UaParser\UaParserV1Mixin;
use Gdbots\Schemas\Enrichments\Mixin\UaParser\UaParserV1Trait;
use Gdbots\Schemas\Iam\Mixin\RoleCreated\RoleCreatedV1 as GdbotsIamRoleCreatedV1;
use Gdbots\Schemas\Iam\Mixin\RoleCreated\RoleCreatedV1Mixin;
use Gdbots\Schemas\Iam\Mixin\RoleCreated\RoleCreatedV1Trait;
use Gdbots\Schemas\Ncr\Mixin\NodeCreated\NodeCreatedV1;
use Gdbots\Schemas\Ncr\Mixin\NodeCreated\NodeCreatedV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\NodeCreated\NodeCreatedV1Trait;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1Trait;

final class RoleCreatedV1 extends AbstractMessage implements
    RoleCreated,
    EventV1,
    NodeCreatedV1,
    GdbotsIamRoleCreatedV1,
    TrackedMessageV1,
    IpToGeoV1,
    TimePartingV1,
    TimeSamplingV1,
    UaParserV1
  
{
    use EventV1Trait;
    use NodeCreatedV1Trait;
    use RoleCreatedV1Trait;
    use TrackedMessageV1Trait;
    use IpToGeoV1Trait;
    use TimePartingV1Trait;
    use TimeSamplingV1Trait;
    use UaParserV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:acme:iam:event:role-created:1-0-0', __CLASS__,
            [],
            [
                EventV1Mixin::create(), 
                NodeCreatedV1Mixin::create(), 
                RoleCreatedV1Mixin::create(), 
                TrackedMessageV1Mixin::create(), 
                IpToGeoV1Mixin::create(), 
                TimePartingV1Mixin::create(), 
                TimeSamplingV1Mixin::create(), 
                UaParserV1Mixin::create()
            ]
        );
    }
}
