# React2Shell
This repo is a proof-of-concept of the React2Shell vulnerability: https://react2shell.com/
It includes a simple vulnerable NextJS application, a Python script to run the exploit, and a sample request and response body to reference.

## NextJS Setup
The dependencies needed to start the vulnerable application are listed on package.json, they can be installed with the following command:
```bash
npm install
```

You can then run a local server:
```bash
npm run dev
```

Make sure the server remains running before using the exploit.

## Exploit.py
This script injects a payload to run a parsed command to a desired server.

You'll first need to make sure the requests library is enabled:
```bash
pir install requests
```

You can then run the script with the following arguments:
-t: The target IP or URL.
-c: The command you wish to run on the target server. (Use quotes for commands with space)

```python
python3 exploit.py -t https://localhost:3000 -c ls
```




