# Test website

```
docker run --rm -p 8080:8080 -e "KEY=random" puco/tester
curl -X GET http://localhost:8080/KEY
```