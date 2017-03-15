<?php

namespace Acme\Schemas\Iam\Request;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\FieldBuilder as Fb;
use Gdbots\Pbj\Schema;
use Gdbots\Pbj\Type as T;
use Gdbots\Schemas\Iam\Mixin\SearchUsersRequest\SearchUsersRequestV1 as GdbotsIamSearchUsersRequestV1;
use Gdbots\Schemas\Iam\Mixin\SearchUsersRequest\SearchUsersRequestV1Mixin;
use Gdbots\Schemas\Iam\Mixin\SearchUsersRequest\SearchUsersRequestV1Trait;
use Gdbots\Schemas\Ncr\Mixin\SearchNodesRequest\SearchNodesRequestV1;
use Gdbots\Schemas\Ncr\Mixin\SearchNodesRequest\SearchNodesRequestV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\SearchNodesRequest\SearchNodesRequestV1Trait;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1Trait;

final class SearchUsersRequestV1 extends AbstractMessage implements
    SearchUsersRequest,
    RequestV1,
    SearchNodesRequestV1,
    GdbotsIamSearchUsersRequestV1
  
{
    use RequestV1Trait;
    use SearchNodesRequestV1Trait;
    use SearchUsersRequestV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:acme:iam:request:search-users-request:1-0-0', __CLASS__,
            [],
            [
                RequestV1Mixin::create(), 
                SearchNodesRequestV1Mixin::create(), 
                SearchUsersRequestV1Mixin::create()
            ]
        );
    }
}
