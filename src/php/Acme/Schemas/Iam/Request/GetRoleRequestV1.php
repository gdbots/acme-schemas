<?php

namespace Acme\Schemas\Iam\Request;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\FieldBuilder as Fb;
use Gdbots\Pbj\Schema;
use Gdbots\Pbj\Type as T;
use Gdbots\Schemas\Iam\Mixin\GetRoleRequest\GetRoleRequestV1 as GdbotsIamGetRoleRequestV1;
use Gdbots\Schemas\Iam\Mixin\GetRoleRequest\GetRoleRequestV1Mixin;
use Gdbots\Schemas\Iam\Mixin\GetRoleRequest\GetRoleRequestV1Trait;
use Gdbots\Schemas\Ncr\Mixin\GetNodeRequest\GetNodeRequestV1;
use Gdbots\Schemas\Ncr\Mixin\GetNodeRequest\GetNodeRequestV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\GetNodeRequest\GetNodeRequestV1Trait;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1Trait;

final class GetRoleRequestV1 extends AbstractMessage implements
    GetRoleRequest,
    RequestV1,
    GetNodeRequestV1,
    GdbotsIamGetRoleRequestV1
  
{
    use RequestV1Trait;
    use GetNodeRequestV1Trait;
    use GetRoleRequestV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:acme:iam:request:get-role-request:1-0-0', __CLASS__,
            [],
            [
                RequestV1Mixin::create(), 
                GetNodeRequestV1Mixin::create(), 
                GetRoleRequestV1Mixin::create()
            ]
        );
    }
}
