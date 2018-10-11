# CHANGELOG


## v1.2.7
* Use `gdbots/schemas` v1.5.7.


## v1.2.6
* Use `gdbots/schemas` v1.5.6.


## v1.2.5
* Use `gdbots/schemas` v1.5.5.


## v1.2.4
* Use `gdbots/schemas` v1.5.4.
* __Add Schemas:__
  * `acme:iam:node:email-app`


## v1.2.3
* Use `gdbots/schemas` v1.5.3.
* __Add Schemas:__
  * `acme:iam:request:get-all-apps-request`
  * `acme:iam:request:get-all-apps-response`
* __Delete Schemas:__ _(we actually need the full node, not just node ref so changed message, no use in any known universe so deleting)
  * `acme:iam:request:list-all-apps-request`
  * `acme:iam:request:list-all-apps-response`


## v1.2.2
* Use `gdbots/schemas` v1.5.2.
* __Add Schemas:__
  * `acme:iam:command:create-app`
  * `acme:iam:command:delete-app`
  * `acme:iam:command:grant-roles-to-app`
  * `acme:iam:command:revoke-roles-from-app`
  * `acme:iam:command:update-app`
  * `acme:iam:event:app-created`
  * `acme:iam:event:app-deleted`
  * `acme:iam:event:app-roles-granted`
  * `acme:iam:event:app-roles-revoked`
  * `acme:iam:event:app-updated`
  * `acme:iam:node:alexa-app`
  * `acme:iam:node:android-app`
  * `acme:iam:node:apple-news-app`
  * `acme:iam:node:browser-app`
  * `acme:iam:node:ios-app`
  * `acme:iam:node:slack-app`
  * `acme:iam:node:sms-app`
  * `acme:iam:request:get-app-history-request`
  * `acme:iam:request:get-app-history-response`
  * `acme:iam:request:get-app-request`
  * `acme:iam:request:get-app-response`
  * `acme:iam:request:list-all-apps-request`
  * `acme:iam:request:list-all-apps-response`


## v1.2.1
* Use `gdbots/schemas` v1.5.1.
* __Add Schemas:__
  * `acme:iam:command:patch-user`
  * `acme:iam:command:patch-users`
  * `acme:iam:event:user-patched`


## v1.2.0
* Use `gdbots/schemas` v1.5.0 and eliminate use of iam mixins for ncr crud operations.
* __Delete Schemas:__
  * `acme:iam:request:get-role-batch-request`
  * `acme:iam:request:get-role-batch-response`
  * `acme:iam:request:get-user-batch-request`
  * `acme:iam:request:get-user-batch-response`
* __Add Schemas:__
  * `acme:forms:command:create-form`
  * `acme:forms:command:delete-form`
  * `acme:forms:command:expire-form`
  * `acme:forms:command:lock-form`
  * `acme:forms:command:mark-form-as-draft`
  * `acme:forms:command:mark-form-as-pending`
  * `acme:forms:command:publish-form`
  * `acme:forms:command:rename-form`
  * `acme:forms:command:send-submission`
  * `acme:forms:command:unlock-form`
  * `acme:forms:command:unpublish-form`
  * `acme:forms:command:update-form`
  * `acme:forms:event:form-created`
  * `acme:forms:event:form-deleted`
  * `acme:forms:event:form-expired`
  * `acme:forms:event:form-locked`
  * `acme:forms:event:form-marked-as-draft`
  * `acme:forms:event:form-marked-as-pending`
  * `acme:forms:event:form-published`
  * `acme:forms:event:form-renamed`
  * `acme:forms:event:form-scheduled`
  * `acme:forms:event:form-unlocked`
  * `acme:forms:event:form-unpublished`
  * `acme:forms:event:form-updated`
  * `acme:forms:event:submission-received`
  * `acme:forms:node:form`
  * `acme:forms:request:get-form-history-request`
  * `acme:forms:request:get-form-history-response`
  * `acme:forms:request:get-form-request`
  * `acme:forms:request:get-form-response`
  * `acme:forms:request:search-forms-request`
  * `acme:forms:request:search-forms-response`


## v1.1.2
* Use `gdbots/schemas` v1.4.4


## v1.1.1
* Change composer version constraint for `gdbots/pbj` to `~1.1|~2.0`.
* Use `gdbots/schemas` v1.4.1


## v1.1.0
* Bump requirements for npm package to `"@gdbots/schemas": "^1.4.0"` and
  update npm `peerDependencies` to allow for more `@gdbots/pbj` versions.


## v1.0.1
* Bump requirements for npm package to proper `"@gdbots/schemas": "^1.2.0"`.


## v1.0.0
* Initial version.
