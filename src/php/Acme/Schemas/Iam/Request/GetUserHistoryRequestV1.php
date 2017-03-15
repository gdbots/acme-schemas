<?php

namespace Acme\Schemas\Iam\Request;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\FieldBuilder as Fb;
use Gdbots\Pbj\Schema;
use Gdbots\Pbj\Type as T;
use Gdbots\Schemas\Iam\Mixin\GetUserHistoryRequest\GetUserHistoryRequestV1 as GdbotsIamGetUserHistoryRequestV1;
use Gdbots\Schemas\Iam\Mixin\GetUserHistoryRequest\GetUserHistoryRequestV1Mixin;
use Gdbots\Schemas\Iam\Mixin\GetUserHistoryRequest\GetUserHistoryRequestV1Trait;
use Gdbots\Schemas\Pbjx\Mixin\GetEventsRequest\GetEventsRequestV1;
use Gdbots\Schemas\Pbjx\Mixin\GetEventsRequest\GetEventsRequestV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\GetEventsRequest\GetEventsRequestV1Trait;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1Trait;

final class GetUserHistoryRequestV1 extends AbstractMessage implements
    GetUserHistoryRequest,
    RequestV1,
    GetEventsRequestV1,
    GdbotsIamGetUserHistoryRequestV1
  
{
    use RequestV1Trait;
    use GetEventsRequestV1Trait;
    use GetUserHistoryRequestV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:acme:iam:request:get-user-history-request:1-0-0', __CLASS__,
            [],
            [
                RequestV1Mixin::create(), 
                GetEventsRequestV1Mixin::create(), 
                GetUserHistoryRequestV1Mixin::create()
            ]
        );
    }
}
