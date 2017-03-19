<?php

namespace Acme\Schemas\Iam\Request;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\FieldBuilder as Fb;
use Gdbots\Pbj\Schema;
use Gdbots\Pbj\Type as T;
use Gdbots\Schemas\Iam\Mixin\GetRoleResponse\GetRoleResponseV1 as GdbotsIamGetRoleResponseV1;
use Gdbots\Schemas\Iam\Mixin\GetRoleResponse\GetRoleResponseV1Mixin;
use Gdbots\Schemas\Iam\Mixin\GetRoleResponse\GetRoleResponseV1Trait;
use Gdbots\Schemas\Ncr\Mixin\GetNodeResponse\GetNodeResponseV1;
use Gdbots\Schemas\Ncr\Mixin\GetNodeResponse\GetNodeResponseV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\GetNodeResponse\GetNodeResponseV1Trait;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1Trait;

final class GetRoleResponseV1 extends AbstractMessage implements
    GetRoleResponse,
    ResponseV1,
    GetNodeResponseV1,
    GdbotsIamGetRoleResponseV1
  
{
    use ResponseV1Trait;
    use GetNodeResponseV1Trait;
    use GetRoleResponseV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:acme:iam:request:get-role-response:1-0-0', __CLASS__,
            [],
            [
                ResponseV1Mixin::create(), 
                GetNodeResponseV1Mixin::create(), 
                GetRoleResponseV1Mixin::create()
            ]
        );
    }
}
