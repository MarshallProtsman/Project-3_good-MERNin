echo "Updating Build info JSON"

#cd build
rm gen-creds.json
touch gen-creds.json

echo '{' >> gen-creds.json
echo '"type": "service_account",' >> gen-creds.json
echo '"project_id": "exploratory-proj-1563483626141",' >> gen-creds.json

echo '"private_key_id": '"\"$PRIVATE_KEY_ID"\", >> gen-creds.json
printf '%s\n' '"private_key": '"\"$PRIVATE_KEY"\", >> gen-creds.json
echo '"client_email": '"\"$CLIENT_EMAIL"\", >> gen-creds.json
echo '"client_id": '"\"$CLIENT_ID"\", >> gen-creds.json

echo '"auth_uri": "https://accounts.google.com/o/oauth2/auth",' >> gen-creds.json
echo '"token_uri": "https://oauth2.googleapis.com/token",' >> gen-creds.json
echo '"auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",' >> gen-creds.json
echo '"client_x509_cert_url": '"\"$CLIENT_X509_CERT_URL"\" >> gen-creds.json
echo '}' >> gen-creds.json
#cd ../