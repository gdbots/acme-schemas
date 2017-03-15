<?php

namespace Acme\Schemas\Iam\Request;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\FieldBuilder as Fb;
use Gdbots\Pbj\Schema;
use Gdbots\Pbj\Type as T;
use Gdbots\Schemas\Iam\Mixin\GetUserResponse\GetUserResponseV1 as GdbotsIamGetUserResponseV1;
use Gdbots\Schemas\Iam\Mixin\GetUserResponse\GetUserResponseV1Mixin;
use Gdbots\Schemas\Iam\Mixin\GetUserResponse\GetUserResponseV1Trait;
use Gdbots\Schemas\Ncr\Mixin\GetNodeResponse\GetNodeResponseV1;
use Gdbots\Schemas\Ncr\Mixin\GetNodeResponse\GetNodeResponseV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\GetNodeResponse\GetNodeResponseV1Trait;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1Trait;

final class GetUserResponseV1 extends AbstractMessage implements
    GetUserResponse,
    ResponseV1,
    GetNodeResponseV1,
    GdbotsIamGetUserResponseV1
  
{
    use ResponseV1Trait;
    use GetNodeResponseV1Trait;
    use GetUserResponseV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:acme:iam:request:get-user-response:1-0-0', __CLASS__,
            [],
            [
                ResponseV1Mixin::create(), 
                GetNodeResponseV1Mixin::create(), 
                GetUserResponseV1Mixin::create()
            ]
        );
    }
}
