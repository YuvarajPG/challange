suspicious_ips = ["192.168.1.10", "10.0.0.5"]

def detect_intrusion(ip):
    if ip in suspicious_ips:
        print("🚨 ALERT: Suspicious activity detected from", ip)
    else:
        print("✔ Normal traffic from", ip)

# Simulated traffic logs
traffic_logs = [
    "192.168.1.10",
    "192.168.1.15",
    "10.0.0.5",
    "8.8.8.8"
]

print("Starting IDS monitoring...\n")

for ip in traffic_logs:
    detect_intrusion(ip)