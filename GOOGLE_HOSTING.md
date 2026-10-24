# NeuBlox website on Google

This project is prepared for Firebase Hosting (website) and Cloud Run (contact
form API). Firebase forwards `/api/**` requests to the `neublox-api` Cloud Run
service in `us-central1`; all other paths serve the website's React app.

## Before you start

- A Google Cloud project with billing enabled
- The Google Cloud CLI (`gcloud`) and Firebase CLI (`firebase-tools`)
- A Resend API key for the account that will send contact emails
- A verified sending domain in Resend before using a `@neublox.ai` From address

Do not put the Resend key in source files or commit it. Add it to Google Secret
Manager as a secret named `resend-api-key`.

## 1. Deploy the contact API to Cloud Run

From the project root, select your Google Cloud project and enable the needed
services:

```sh
gcloud config set project YOUR_GOOGLE_CLOUD_PROJECT_ID
gcloud services enable run.googleapis.com cloudbuild.googleapis.com artifactregistry.googleapis.com secretmanager.googleapis.com
```

Create the `resend-api-key` secret in Google Cloud Console under **Security →
Secret Manager**. Grant the Cloud Run service identity access to that secret
with the **Secret Manager Secret Accessor** role.

Deploy the API from the project root:

```sh
gcloud run deploy neublox-api \
  --source . \
  --region us-central1 \
  --allow-unauthenticated \
  --set-secrets RESEND_API_KEY=resend-api-key:latest \
  --set-env-vars CONTACT_RECIPIENT_EMAIL=YOUR_INBOX,CONTACT_FROM_EMAIL="NeuBlox AI <YOUR_VERIFIED_SENDER>"
```

Replace `YOUR_INBOX` with the address that should receive contact requests and
`YOUR_VERIFIED_SENDER` with a sender address authorized in Resend. The API key
is injected from Secret Manager at runtime and is not part of the image.

## 2. Set up Firebase Hosting

Sign in to Firebase CLI and associate this folder with your Firebase project:

```sh
firebase login
firebase use --add
```

Build the website and deploy Hosting:

```sh
pnpm --filter @workspace/neublox-website run build:firebase
firebase deploy --only hosting
```

The Firebase configuration is already set to serve the Vite build output and
forward `/api/**` to Cloud Run. Deploy the API first so that the rewrite has a
live service to reach.

## 3. Connect neublox.ai

In Firebase Console, open **Hosting → Add custom domain** and follow its
instructions to add the DNS records at your domain registrar. Keep the existing
site online until Firebase shows the domain as connected and HTTPS is active.

After deployment, test `/`, `/insights`, `/contact`, and submit a test contact
request. Check Cloud Run logs if email delivery fails.
