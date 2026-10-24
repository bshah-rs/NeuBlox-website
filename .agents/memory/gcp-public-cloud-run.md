---
name: GCP public Cloud Run access
description: Organization policy prevents public Cloud Run invoker bindings for the NeuBlox Google Cloud project.
---

Cloud Run builds can succeed while the service remains unreachable publicly: adding `allUsers` as a Cloud Run Invoker fails because of organization policy. Firebase Hosting's documented Cloud Run integration uses unauthenticated invocation.

**Why:** The policy is enforced outside the app and blocks the public API path needed by the website contact form.

**How to apply:** Ask a project administrator for an approved exception on the service, or use a project that permits public website backends. Do not bypass the organization policy; keep the Hosting rewrite unpublished until access is resolved.

Reference: https://firebase.google.com/docs/hosting/cloud-run
