# openssl for https server
---

## self signed certification
---
1. openssl genrsa -aes256 -out rootca.key 2048 (genertate rootca key)
2. openssl req -new -key rootca.key -out rootca.csr (generate certification request)
3. openssl x509 -req -days 3650 -in rootca.csr -signkey rootca.key -out rootca.crt (receive request and generate certification)

## server certification by my rootca
---
1. openssl genrsa -aes256 -out engineeringblog.com.key 2048
2. openssl rsa -in engineeringblog.com.key.enc -out engineeringblog.com.key (remove encription from key)
3. openssl req -new -key engineeringblog.com.key -out engineeringblog.com.csr
4. openssl x509 -req -days 3650 -in engineeringblog.com.csr -CA rootca.crt -CAcreateserial -CAkey rootca.key -out engineeringblog.com.crt
