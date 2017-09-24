<?php
/**
 * DO NOT EDIT THIS FILE as it will be overwritten by the Pbj compiler.
 * @link https://github.com/gdbots/pbjc-php
 *
 * Registers all of the pbj schemas with the MessageResolver.
 *
 * @link http://acme-schemas.gdbots.io/
 */

\Gdbots\Pbj\MessageResolver::registerMap([
    'acme:iam:command:create-role' => 'Acme\Schemas\Iam\Command\CreateRoleV1',
    'acme:iam:command:create-user' => 'Acme\Schemas\Iam\Command\CreateUserV1',
    'acme:iam:command:delete-role' => 'Acme\Schemas\Iam\Command\DeleteRoleV1',
    'acme:iam:command:delete-user' => 'Acme\Schemas\Iam\Command\DeleteUserV1',
    'acme:iam:command:grant-roles-to-user' => 'Acme\Schemas\Iam\Command\GrantRolesToUserV1',
    'acme:iam:command:revoke-roles-from-user' => 'Acme\Schemas\Iam\Command\RevokeRolesFromUserV1',
    'acme:iam:command:update-role' => 'Acme\Schemas\Iam\Command\UpdateRoleV1',
    'acme:iam:command:update-user' => 'Acme\Schemas\Iam\Command\UpdateUserV1',
    'acme:iam:event:role-created' => 'Acme\Schemas\Iam\Event\RoleCreatedV1',
    'acme:iam:event:role-deleted' => 'Acme\Schemas\Iam\Event\RoleDeletedV1',
    'acme:iam:event:role-updated' => 'Acme\Schemas\Iam\Event\RoleUpdatedV1',
    'acme:iam:event:user-created' => 'Acme\Schemas\Iam\Event\UserCreatedV1',
    'acme:iam:event:user-deleted' => 'Acme\Schemas\Iam\Event\UserDeletedV1',
    'acme:iam:event:user-roles-granted' => 'Acme\Schemas\Iam\Event\UserRolesGrantedV1',
    'acme:iam:event:user-roles-revoked' => 'Acme\Schemas\Iam\Event\UserRolesRevokedV1',
    'acme:iam:event:user-updated' => 'Acme\Schemas\Iam\Event\UserUpdatedV1',
    'acme:iam:node:role' => 'Acme\Schemas\Iam\Node\RoleV1',
    'acme:iam:node:user' => 'Acme\Schemas\Iam\Node\UserV1',
    'acme:iam:request:get-role-batch-request' => 'Acme\Schemas\Iam\Request\GetRoleBatchRequestV1',
    'acme:iam:request:get-role-batch-response' => 'Acme\Schemas\Iam\Request\GetRoleBatchResponseV1',
    'acme:iam:request:get-role-history-request' => 'Acme\Schemas\Iam\Request\GetRoleHistoryRequestV1',
    'acme:iam:request:get-role-history-response' => 'Acme\Schemas\Iam\Request\GetRoleHistoryResponseV1',
    'acme:iam:request:get-role-request' => 'Acme\Schemas\Iam\Request\GetRoleRequestV1',
    'acme:iam:request:get-role-response' => 'Acme\Schemas\Iam\Request\GetRoleResponseV1',
    'acme:iam:request:get-user-batch-request' => 'Acme\Schemas\Iam\Request\GetUserBatchRequestV1',
    'acme:iam:request:get-user-batch-response' => 'Acme\Schemas\Iam\Request\GetUserBatchResponseV1',
    'acme:iam:request:get-user-history-request' => 'Acme\Schemas\Iam\Request\GetUserHistoryRequestV1',
    'acme:iam:request:get-user-history-response' => 'Acme\Schemas\Iam\Request\GetUserHistoryResponseV1',
    'acme:iam:request:get-user-request' => 'Acme\Schemas\Iam\Request\GetUserRequestV1',
    'acme:iam:request:get-user-response' => 'Acme\Schemas\Iam\Request\GetUserResponseV1',
    'acme:iam:request:list-all-roles-request' => 'Acme\Schemas\Iam\Request\ListAllRolesRequestV1',
    'acme:iam:request:list-all-roles-response' => 'Acme\Schemas\Iam\Request\ListAllRolesResponseV1',
    'acme:iam:request:search-users-request' => 'Acme\Schemas\Iam\Request\SearchUsersRequestV1',
    'acme:iam:request:search-users-response' => 'Acme\Schemas\Iam\Request\SearchUsersResponseV1',
    'gdbots:analytics:tracker:keen' => 'Gdbots\Schemas\Analytics\Tracker\KeenV1',
    'gdbots:contexts::app' => 'Gdbots\Schemas\Contexts\AppV1',
    'gdbots:contexts::cloud' => 'Gdbots\Schemas\Contexts\CloudV1',
    'gdbots:contexts::user-agent' => 'Gdbots\Schemas\Contexts\UserAgentV1',
    'gdbots:forms:field:address-field' => 'Gdbots\Schemas\Forms\Field\AddressFieldV1',
    'gdbots:forms:field:age-field' => 'Gdbots\Schemas\Forms\Field\AgeFieldV1',
    'gdbots:forms:field:country-field' => 'Gdbots\Schemas\Forms\Field\CountryFieldV1',
    'gdbots:forms:field:date-field' => 'Gdbots\Schemas\Forms\Field\DateFieldV1',
    'gdbots:forms:field:dob-field' => 'Gdbots\Schemas\Forms\Field\DobFieldV1',
    'gdbots:forms:field:email-field' => 'Gdbots\Schemas\Forms\Field\EmailFieldV1',
    'gdbots:forms:field:facebook-user-field' => 'Gdbots\Schemas\Forms\Field\FacebookUserFieldV1',
    'gdbots:forms:field:gender-field' => 'Gdbots\Schemas\Forms\Field\GenderFieldV1',
    'gdbots:forms:field:height-field' => 'Gdbots\Schemas\Forms\Field\HeightFieldV1',
    'gdbots:forms:field:instagram-user-field' => 'Gdbots\Schemas\Forms\Field\InstagramUserFieldV1',
    'gdbots:forms:field:legal-field' => 'Gdbots\Schemas\Forms\Field\LegalFieldV1',
    'gdbots:forms:field:long-text-field' => 'Gdbots\Schemas\Forms\Field\LongTextFieldV1',
    'gdbots:forms:field:number-field' => 'Gdbots\Schemas\Forms\Field\NumberFieldV1',
    'gdbots:forms:field:phone-field' => 'Gdbots\Schemas\Forms\Field\PhoneFieldV1',
    'gdbots:forms:field:photo-field' => 'Gdbots\Schemas\Forms\Field\PhotoFieldV1',
    'gdbots:forms:field:pinterest-user-field' => 'Gdbots\Schemas\Forms\Field\PinterestUserFieldV1',
    'gdbots:forms:field:select-field' => 'Gdbots\Schemas\Forms\Field\SelectFieldV1',
    'gdbots:forms:field:short-text-field' => 'Gdbots\Schemas\Forms\Field\ShortTextFieldV1',
    'gdbots:forms:field:snapchat-user-field' => 'Gdbots\Schemas\Forms\Field\SnapchatUserFieldV1',
    'gdbots:forms:field:statement-field' => 'Gdbots\Schemas\Forms\Field\StatementFieldV1',
    'gdbots:forms:field:twitter-user-field' => 'Gdbots\Schemas\Forms\Field\TwitterUserFieldV1',
    'gdbots:forms:field:video-field' => 'Gdbots\Schemas\Forms\Field\VideoFieldV1',
    'gdbots:forms:field:website-field' => 'Gdbots\Schemas\Forms\Field\WebsiteFieldV1',
    'gdbots:forms:field:yes-no-field' => 'Gdbots\Schemas\Forms\Field\YesNoFieldV1',
    'gdbots:forms:field:youtube-user-field' => 'Gdbots\Schemas\Forms\Field\YoutubeUserFieldV1',
    'gdbots:forms:field:youtube-video-field' => 'Gdbots\Schemas\Forms\Field\YoutubeVideoFieldV1',
    'gdbots:geo::address' => 'Gdbots\Schemas\Geo\AddressV1',
    'gdbots:ncr:command:create-edge' => 'Gdbots\Schemas\Ncr\Command\CreateEdgeV1',
    'gdbots:ncr:command:delete-edge' => 'Gdbots\Schemas\Ncr\Command\DeleteEdgeV1',
    'gdbots:ncr:event:edge-created' => 'Gdbots\Schemas\Ncr\Event\EdgeCreatedV1',
    'gdbots:ncr:event:edge-deleted' => 'Gdbots\Schemas\Ncr\Event\EdgeDeletedV1',
    'gdbots:ncr:request:get-node-batch-request' => 'Gdbots\Schemas\Ncr\Request\GetNodeBatchRequestV1',
    'gdbots:ncr:request:get-node-batch-response' => 'Gdbots\Schemas\Ncr\Request\GetNodeBatchResponseV1',
    'gdbots:pbjx::envelope' => 'Gdbots\Schemas\Pbjx\EnvelopeV1',
    'gdbots:pbjx:command:check-health' => 'Gdbots\Schemas\Pbjx\Command\CheckHealthV1',
    'gdbots:pbjx:event:event-execution-failed' => 'Gdbots\Schemas\Pbjx\Event\EventExecutionFailedV1',
    'gdbots:pbjx:event:health-checked' => 'Gdbots\Schemas\Pbjx\Event\HealthCheckedV1',
    'gdbots:pbjx:request:echo-request' => 'Gdbots\Schemas\Pbjx\Request\EchoRequestV1',
    'gdbots:pbjx:request:echo-response' => 'Gdbots\Schemas\Pbjx\Request\EchoResponseV1',
    'gdbots:pbjx:request:request-failed-response' => 'Gdbots\Schemas\Pbjx\Request\RequestFailedResponseV1',
]);
