<?php

namespace Acme\Schemas\Iam\Request;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\FieldBuilder as Fb;
use Gdbots\Pbj\Schema;
use Gdbots\Pbj\Type as T;
use Gdbots\Schemas\Iam\Mixin\GetUserBatchRequest\GetUserBatchRequestV1 as GdbotsIamGetUserBatchRequestV1;
use Gdbots\Schemas\Iam\Mixin\GetUserBatchRequest\GetUserBatchRequestV1Mixin;
use Gdbots\Schemas\Iam\Mixin\GetUserBatchRequest\GetUserBatchRequestV1Trait;
use Gdbots\Schemas\Ncr\Mixin\GetNodeBatchRequest\GetNodeBatchRequestV1;
use Gdbots\Schemas\Ncr\Mixin\GetNodeBatchRequest\GetNodeBatchRequestV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\GetNodeBatchRequest\GetNodeBatchRequestV1Trait;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1Trait;

final class GetUserBatchRequestV1 extends AbstractMessage implements
    GetUserBatchRequest,
    RequestV1,
    GetNodeBatchRequestV1,
    GdbotsIamGetUserBatchRequestV1
  
{
    use RequestV1Trait;
    use GetNodeBatchRequestV1Trait;
    use GetUserBatchRequestV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:acme:iam:request:get-user-batch-request:1-0-0', __CLASS__,
            [],
            [
                RequestV1Mixin::create(), 
                GetNodeBatchRequestV1Mixin::create(), 
                GetUserBatchRequestV1Mixin::create()
            ]
        );
    }
}
