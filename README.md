# Test webservice

Test webservice to query pid (GET /pid) and environment variables (e.g. GET /path). Or returns JSON with all environment variables (GET /)

```
docker run -d -p 8080:8080 -e "KEY=random" puco/tester
curl -X GET http://localhost:8080/KEY
```