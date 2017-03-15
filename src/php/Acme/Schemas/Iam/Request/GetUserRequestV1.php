<?php

namespace Acme\Schemas\Iam\Request;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\FieldBuilder as Fb;
use Gdbots\Pbj\Schema;
use Gdbots\Pbj\Type as T;
use Gdbots\Schemas\Iam\Mixin\GetUserRequest\GetUserRequestV1 as GdbotsIamGetUserRequestV1;
use Gdbots\Schemas\Iam\Mixin\GetUserRequest\GetUserRequestV1Mixin;
use Gdbots\Schemas\Iam\Mixin\GetUserRequest\GetUserRequestV1Trait;
use Gdbots\Schemas\Ncr\Mixin\GetNodeRequest\GetNodeRequestV1;
use Gdbots\Schemas\Ncr\Mixin\GetNodeRequest\GetNodeRequestV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\GetNodeRequest\GetNodeRequestV1Trait;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1Trait;

final class GetUserRequestV1 extends AbstractMessage implements
    GetUserRequest,
    RequestV1,
    GetNodeRequestV1,
    GdbotsIamGetUserRequestV1
  
{
    use RequestV1Trait;
    use GetNodeRequestV1Trait;
    use GetUserRequestV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:acme:iam:request:get-user-request:1-0-0', __CLASS__,
            [],
            [
                RequestV1Mixin::create(), 
                GetNodeRequestV1Mixin::create(), 
                GetUserRequestV1Mixin::create()
            ]
        );
    }
}