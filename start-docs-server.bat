@echo off
start "" "http://localhost:8080"
docs-server.exe -p 8080 -d ./build
