# Load Testing - WalabotHomeOnPrem

## Simulator Api
run commmand:
npm run build
npm run start

run with docker
docker build . --tag simulator
docker run -p 3000:3000 simulator

# Environment Variables
- PORT
- IS_DRYRUN
- DEVICE_ID
- BACKEND_URL
- QUEUE_BROKER_URL
- TELEMETRY_POLICY

# EndPints
## Device options
Post: http://localhost:3000/device-options
```bash
{
    "telemetryPolicy": "Off"
}
```
## Fall event
Post: http://localhost:3000/fall-event
## Presence event
Post: http://localhost:3000/presence-event

# Probes
## Startup probe
Get: http://localhost:3000/

## Liveness probe
Get: http://localhost:3000/health