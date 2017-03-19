<?php

namespace Acme\Schemas\Iam\Request;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\FieldBuilder as Fb;
use Gdbots\Pbj\Schema;
use Gdbots\Pbj\Type as T;
use Gdbots\Schemas\Iam\Mixin\GetRoleHistoryRequest\GetRoleHistoryRequestV1 as GdbotsIamGetRoleHistoryRequestV1;
use Gdbots\Schemas\Iam\Mixin\GetRoleHistoryRequest\GetRoleHistoryRequestV1Mixin;
use Gdbots\Schemas\Iam\Mixin\GetRoleHistoryRequest\GetRoleHistoryRequestV1Trait;
use Gdbots\Schemas\Pbjx\Mixin\GetEventsRequest\GetEventsRequestV1;
use Gdbots\Schemas\Pbjx\Mixin\GetEventsRequest\GetEventsRequestV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\GetEventsRequest\GetEventsRequestV1Trait;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1Trait;

final class GetRoleHistoryRequestV1 extends AbstractMessage implements
    GetRoleHistoryRequest,
    RequestV1,
    GetEventsRequestV1,
    GdbotsIamGetRoleHistoryRequestV1
  
{
    use RequestV1Trait;
    use GetEventsRequestV1Trait;
    use GetRoleHistoryRequestV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:acme:iam:request:get-role-history-request:1-0-0', __CLASS__,
            [],
            [
                RequestV1Mixin::create(), 
                GetEventsRequestV1Mixin::create(), 
                GetRoleHistoryRequestV1Mixin::create()
            ]
        );
    }
}
